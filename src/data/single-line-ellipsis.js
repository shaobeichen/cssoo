export default {
  name: '单行溢出省略号',
  value: 'singleLineEllipsis',
  description: '',
  codeSnippet: `
      <style>
        .text-ellipsis {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
      </style>
      <div class="text-ellipsis"></div>
    `,
  options: [],
}
