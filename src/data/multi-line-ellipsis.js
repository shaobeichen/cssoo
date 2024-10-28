export default {
  name: '多行溢出省略号',
  value: 'multiLineEllipsis',
  description: '',
  codeSnippet: `
      <style>
        .text-line-clamp {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: {{q1}};
            -webkit-box-orient: vertical;
        }
      </style>
      <div class="triangle"></div>
    `,
  options: [
    {
      type: 'input',
      message: '请输入行数',
      default: '2',
    },
  ],
}
