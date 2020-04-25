// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'airbnb-base',//vue项目不使用jsx,使用airbnb-base配置即可
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` for stricter rules or `plugin:vue/essential` for basic rules.
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    //关闭换行符验证
    'linebreak-style': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //template中使用2个空格缩进
    'vue/html-indent': ['error', 2],
    /**
     *template中html标签void元素要求使用自闭合标签，其他标签均不允许使用自闭合标签，svg和math这两个外来标签不做限制
     */
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'never'
      },
      'svg': 'any',
      'math': 'any'
    }],

    /* 语法问题 */

    'comma-dangle': [2, 'never'],
    // 禁止使用console
    'no-console': 'warn',
    // 类的实例方法可以不用this
    'class-methods-use-this': 'off',
    // 允许重新分配函数参数
    'no-param-reassign': 'off',
    // 允许 if 语句出现在 else 代码块中
    'no-lonely-if': 'off',
    // 允许else前面有return
    'no-else-return': 'off',
    // 允许函数声明被提升到范围的顶部
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
    // 考虑到有时确实没有default case，强制写也是冗余
    'default-case': 'warn',
    // foo == null 用于判断foo不是 undefined 并且不是 null，比较常用（是唯一允许出现==的情况），故允许次写法
    'no-eq-null': 'off',
    //不强制函数返回
    'consistent-return': 'off',
    "import/no-unresolved": 0,

    /* 代码风格问题 */

    // 标识符允许使用下划线
    'no-underscore-dangle': 'off',
    // 使用2个空格缩进
    indent: ['error', 2, {SwitchCase: 1}],
    // 最大行长度150
    'max-len': ['off', 150]
  }
}
