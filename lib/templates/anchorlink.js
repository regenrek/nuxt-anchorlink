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

  async init () {
    try {
      // Call mounted for active strategy on initial load
      await this.mounted()
    } catch (error) {
      console.log(error)
    }
  }

  mounted () {
    console.log('anchorlink mounted')
    return Promise.resolve(function () {
      return true
    }).catch((error) => {
      this.callOnError(error, { method: 'mounted' })
      return Promise.reject(error)
    })
  }

  resetAnchor () {
    this.$storage.setState('SET_HASHLINK', '')
    this.$storage.setState('SET_OFFSET', 0)
  }

  get target () {
    return this.$storage.getState('target')
  }
}
