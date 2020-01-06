const merge = require('lodash/merge')
const defaults = require('./defaults')
const templates = require('./templates')
const { resolvePath } = require('./utils')

const moduleBuildDir = 'anchorlink'

module.exports = function (moduleOptions) {
  const options = merge({}, defaults, moduleOptions, this.options.smoothScroll)

  this.addPlugin({
    src: resolvePath('templates/plugin.js'),
    fileName: `${moduleBuildDir}/plugin.js`,
    options: {
      options
    }
  })

  // Copy all templates
  for (const template of templates) {
    this.addTemplate({
      src: resolvePath('templates/' + template),
      fileName: `${moduleBuildDir}/${template}`,
      options
    })
  }
}
