export default {
  name: '三角形',
  value: 'triangle',
  description: '',
  codeSnippet: `
    <style>
      .triangle {
        width: 0;
        height: 0; 
        {{q1}}
      }
    </style>
    <div class="triangle"></div>
  `,
  options: [
    {
      type: 'select',
      message: '请选择方向',
      prepose: true,
      choices: [
        {
          name: '上',
          value: 'top',
          description: '',
          codeSnippet: `border-left: {{q2}} solid transparent;
        border-right: {{q2}} solid transparent;
        border-top: 0;
        border-bottom: {{q2}} solid {{q3}};`,
        },
        {
          name: '下',
          value: 'bottom',
          description: '',
          codeSnippet: `border-left: {{q2}} solid transparent;
        border-right: {{q2}} solid transparent;
        border-top: {{q2}} solid {{q3}};
        border-bottom: 0;`,
        },
        {
          name: '左',
          value: 'left',
          description: '',
          codeSnippet: `border-left: 0;
        border-right: {{q2}} solid {{q3}};
        border-top: {{q2}} solid transparent;
        border-bottom: {{q2}} solid transparent;`,
        },
        {
          name: '右',
          value: 'right',
          description: '',
          codeSnippet: `border-left: {{q2}} solid {{q3}};
        border-right: 0;
        border-top: {{q2}} solid transparent;
        border-bottom: {{q2}} solid transparent;`,
        },
      ],
    },
    {
      type: 'input',
      message: '请输入高度',
      default: '10px',
    },
    {
      type: 'input',
      message: '请输入颜色',
      default: 'gray',
    },
  ],
}
