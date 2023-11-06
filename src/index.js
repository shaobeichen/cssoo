#!/usr/bin/env node

import clipboard from 'clipboardy'
import chalk from 'chalk'
import boxen from 'boxen'
import { input, select } from '@inquirer/prompts'
import choices from './data/index.js'

const main = async () => {
  try {
    const answer = await select({
      message: '选择你要生成的CSS片段',
      choices,
    })

    // 选择片段类型（优惠券、三角形等）
    const selectQuestion = choices.find((v) => v.value === answer)
    const { options } = selectQuestion

    // 循环输出选择或输入的值
    const answers = []
    for (let i = 0; i < options.length; i++) {
      const item = options[i]

      let selectValue = ''
      if (item.type === 'input') {
        selectValue = await input({ message: item.message, default: item.default })
      }
      if (item.type === 'select') {
        selectValue = await select({ message: item.message, choices: item.choices })
      }

      answers.push({ id: i + 1, selectValue, ...item })
    }

    // 将需要前置的片段优先处理
    // 比如一个选择需要处理的值是 background-position: {{q6}}
    // 里面包含了其他的参数，优先替换到主片段，然后其他参数替换时才能正常替换所有参数
    answers.sort((a, b) => b.prepose - a.prepose)

    // 根据条件对代码片段进行输入值替换
    answers.forEach((item) => {
      const replaceBlock = `{{q${item.id}}}`
      if (item.type === 'select') {
        const selectItem = item.choices.find((v) => v.value === item.selectValue) || {}
        selectQuestion.codeSnippet = selectQuestion.codeSnippet.replace(
          new RegExp(replaceBlock, 'g'),
          selectItem.codeSnippet || '',
        )
      }
      if (item.type === 'input') {
        selectQuestion.codeSnippet = selectQuestion.codeSnippet.replace(
          new RegExp(replaceBlock, 'g'),
          item.selectValue || '',
        )
      }
    })

    // 将生成的代码复制到剪贴板
    clipboard.writeSync(selectQuestion.codeSnippet)

    const content = `
    ${clipboard.readSync()}
    
     ✅ 以上片段已复制到剪贴板!
    `
    console.log(chalk.green(boxen(content, { padding: 1, margin: 1, borderStyle: 'round' })))
  } catch (error) {}
}

main()
