export default {
  name: '优惠券',
  value: 'coupon',
  description: '',
  codeSnippet: `
  <style>
    .coupon {
        width: {{q2}};
        height: {{q3}};
        background-image: radial-gradient(
            circle at {{q5}} {{q5}},
            transparent 0%,
            transparent {{q5}},
            {{q4}} {{q5}},
            {{q4}} 100%
        );
        background-position: {{q6}} -{{q5}};
        background-size: 100% 100%;
        border-radius: {{q5}};
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    }
  </style>
  <div class="coupon"></div>
  `,
  options: [
    {
      type: 'select',
      message: '请选择方向',
      choices: [
        {
          name: '横向',
          value: 'horizontal',
          description: '',
        },
        {
          name: '纵向',
          value: 'vertical',
          description: '',
        },
      ],
    },
    {
      type: 'input',
      message: '请输入宽度',
      default: '300px',
    },
    {
      type: 'input',
      message: '请输入高度',
      default: '100px',
    },
    {
      type: 'input',
      message: '请输入背景色',
      default: '#e15852',
    },
    {
      type: 'input',
      message: '请输入半圆大小',
      default: '10px',
    },
    {
      type: 'input',
      message: '请输入半圆位置',
      default: '80px',
    },
    {
      type: 'input',
      message: '请输入半圆背景色',
      default: 'transparent',
    },
    {
      type: 'select',
      message: '是否添加阴影？',
      choices: [
        {
          name: '是',
          value: 'shadow-yes',
          description: '',
        },
        {
          name: '否',
          value: 'shadow-no',
          description: '',
        },
      ],
    },
  ],
}
