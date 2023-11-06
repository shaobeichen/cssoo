#!/usr/bin/env node

import clipboard from 'clipboardy'
import chalk from 'chalk'
import { input, select } from '@inquirer/prompts'
import choices from '../src/index.js'

const answer = await select({
  message: '选择你要生成的CSS片段',
  choices,
})

const selectQuestion = choices.find((v) => v.value === answer)
const { options } = selectQuestion

const answers = []
for (let i = 0; i < options.length; i++) {
  const item = options[i]
  let value = ''
  if (item.type === 'input') {
    value = await input({ message: item.message, default: item.default })
  }
  if (item.type === 'select') {
    value = await select({ message: item.message, choices: item.choices })
  }
  answers.push({ id: i, value, ...item })
}

answers.sort((a, b) => a.prepose - b.prepose)

// clipboard.writeSync(answer, answers)
console.warn(answer, answers)

const content = `
--------------------
${clipboard.readSync()}

 ✅ 以上片段已复制到剪贴板! 
--------------------
`
console.log(chalk.green(content))
