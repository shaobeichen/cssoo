#!/usr/bin/env node

import clipboard from 'clipboardy'
import chalk from 'chalk'
import boxen from 'boxen'
import { input, select } from '@inquirer/prompts'
import choices from './data/index.js'

export default async () => {
  const answer = await select({
    message: '选择你要生成的CSS片段',
    choices,
  })

  const selectQuestion = choices.find((v) => v.value === answer)
  const { options } = selectQuestion

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

  answers.sort((a, b) => a.prepose - b.prepose)

  answers.forEach((item) => {
    const replaceBlock = `{{q${item.id}}}`
    if (item.type === 'select') {
      const selectItem = item.choices.find((v) => v.value === item.selectValue) || {}
      selectQuestion.codeSnippet = selectQuestion.codeSnippet.replace(
        new RegExp(replaceBlock, 'g'),
        selectItem.codeSnippet,
      )
    }
    if (item.type === 'input') {
      selectQuestion.codeSnippet = selectQuestion.codeSnippet.replace(
        new RegExp(replaceBlock, 'g'),
        item.selectValue,
      )
    }
  })

  clipboard.writeSync(selectQuestion.codeSnippet)

  const content = `
${clipboard.readSync()}

 ✅ 以上片段已复制到剪贴板!
`
  console.log(chalk.green(boxen(content, { padding: 1, margin: 1, borderStyle: 'double' })))
}
