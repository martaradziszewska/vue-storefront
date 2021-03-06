import { productThumbnailPath } from '@vue-storefront/core/helpers'

export const ProductTile = {
  name: 'ProductTile',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      clicks: 0,
      placeholder: '/assets/placeholder.jpg'
    }
  },
  computed: {
    thumbnail () {
      // todo: play with the image based on category page filters - eg. when 'red' color is chosen, image is going to be 'red'
      let thumbnail = productThumbnailPath(this.product)
      return this.getThumbnail(thumbnail, 310, 300)
    },
    thumbnailObj () {
      return {
        src: this.thumbnail,
        loading: this.placeholder,
        error: this.placeholder
      }
    },
    isOnSale () {
      return this.product.sale === '1' ? 'sale' : ''
    },
    isNew () {
      return this.product.new === '1' ? 'new' : ''
    }
  }
}
