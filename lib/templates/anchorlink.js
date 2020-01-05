import Storage from './storage'

export default class AnchorLink {
  constructor (ctx, options) {
    this.ctx = ctx
    this.options = options

    const storage = new Storage(ctx, {
      vuex: {
        namespace: 'anchorlink'
      },
      initialState: {
        target: '',
        offset: 0
      }
    })

    this.$storage = storage
    this.$state = storage.state
  }
}
