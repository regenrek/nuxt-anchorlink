import AnchorLink from './anchorlink'

export default (ctx, inject) => {
  const options = JSON.parse('<%= JSON.stringify(options.options) %>')

  const $anchorLink = new AnchorLink(ctx, options)

  inject('anchorLink', $anchorLink)
  ctx.$anchorLink = $anchorLink

  return $anchorLink.init().catch((error) => {
    if (process.client) {
      console.error('[ERROR] [ANCHORLINK]', error)
    }
  })
}
