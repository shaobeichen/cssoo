export default {
  name: '滚动条',
  value: 'scrollbar',
  description: '',
  codeSnippet: `
      <style>
        .scrollbar::-webkit-scrollbar {
            width: {{q1}};
        }
        .scrollbar::-webkit-scrollbar-thumb {
            background-color: {{q3}};
            border-radius: {{q2}};
        }
        .scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }      
      </style>
      <div class="scrollbar"></div>
    `,
  options: [
    {
      type: 'input',
      message: '请输入宽度',
      default: '4px',
    },
    {
      type: 'input',
      message: '请输入圆角',
      default: '4px',
    },
    {
      type: 'input',
      message: '请输入背景色',
      default: '#f1f1f1',
    },
  ],
}
