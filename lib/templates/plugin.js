import AnchorLink from './anchorlink'

export default (ctx, inject) => {
  const options = JSON.parse('<%= JSON.stringify(options.options) %>')

  const anchorLink = new AnchorLink(ctx, options)

  ctx.$anchorLink = anchorLink
  inject('anchorLink', anchorLink)
}
