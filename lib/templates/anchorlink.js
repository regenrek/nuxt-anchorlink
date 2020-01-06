import Storage from './storage'

const types = {
  SET_HASHLINK: 'SET_HASHLINK',
  SET_OFFSET: 'SET_OFFSET',
  SET_ANCHOR: 'SET_ANCHOR'
}

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

  setAnchor (hashLink, offset) {
    this.$storage.setState(types.SET_ANCHOR, { hashLink, offset })
  }

  resetAnchor () {
    this.$storage.setState(types.SET_HASHLINK, '')
    this.$storage.setState(types.SET_OFFSET, 0)
  }

  get target () {
    return this.$storage.getState('target')
  }
}
