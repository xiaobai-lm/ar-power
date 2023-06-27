module.exports = {
  // 关闭eslint语法验证
  lintOnSave: true,
  devServer: {
    // 关闭eslint语法验证
    overlay: {
      warning: true,
      errors: true,
    },
  },
}