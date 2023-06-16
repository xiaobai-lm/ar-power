module.exports = {
  // 关闭eslint语法验证
  lintOnSave: false,
  devServer: {
    // 关闭eslint语法验证
    overlay: {
      warning: false,
      errors: false,
    },
  },
}