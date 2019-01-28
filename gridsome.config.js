// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  transformers: {
    remark: {}
  },
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'src/pages/*.md',
      typeName: 'Content',
    },
  }]
}
