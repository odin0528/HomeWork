<template>
  <b-nav-item-dropdown
    ref="cartDropdown"
    class="dropdown-cart mr-25 d-none d-sm-block"
    right
    @hidden="checkCartUpdated"
  >
    <template #button-content>
      <feather-icon
        class="body-color carts-icon"
        icon="ShoppingCartIcon"
        size="21"
      />
      <b-badge v-if="items > 0" pill>
        {{ items }}
      </b-badge>
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header bb-1">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">{{ $t('my_cart') }}</h4>
        <b-badge pill variant="light-primary">
          {{ printf($t('cart_counter'), items) }}
        </b-badge>
      </div>
    </li>

    <!-- Cart Items -->
    <li class="carts-list">
      <div
        v-for="(product, productIndex) in $store.state.carts.products"
        :key="product.productID"
        class="cart-list-items"
      >
        <hr v-if="productIndex !== 0" class="w-100" />
        <div class="cart-item-title">
          <b-link :to="`/products/${product.productID}`">
            {{ product.title }}
          </b-link>
        </div>
        <div
          v-for="(style, styleIndex) in product.styles"
          :key="style.id"
          class="carts-style-list"
        >
          <hr v-if="styleIndex !== 0" :key="style.id" />
          <div class="d-flex align-items-center">
            <feather-icon
              size="22"
              icon="XIcon"
              class="cart-item-remove cursor-pointer mr-25"
              @click="removeItemFromCarts($event, productIndex, styleIndex)"
            />
            <div
              class="carts-style-photos"
              :style="{ backgroundImage: `url(${style.photo})` }"
            ></div>
            <div class="media-heading small">
              <div class="cart-item-style-title">
                {{ style.style_title || '-' }}
              </div>
              <div class="cart-unit">
                <template v-if="style.discounted_price !== style.price">
                  單價:
                  <span class="item-price"
                    >${{ style.discounted_price.toLocaleString('en-US') }}</span
                  >
                  <span class="origin-price"
                    >${{ style.price.toLocaleString('en-US') }}</span
                  >
                </template>
                <template v-else>
                  <span>${{ style.price.toLocaleString('en-US') }}</span>
                </template>
              </div>
            </div>

            <div class="cart-item-qty">
              <b-form-spinbutton
                :value="style.buy_count"
                min="1"
                size="sm"
                @change="updateBuyCount($event, productIndex, styleIndex)"
              />
            </div>

            <div class="cart-item-price">
              <span class="small">小計</span>
              <span class="item-price">
                ${{
                  (style.discounted_price * style.buy_count).toLocaleString(
                    'en-US'
                  )
                }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li v-if="items" class="dropdown-menu-footer carts-list-footer">
      <div
        v-if="checkoutDiscount + productDiscount > 0"
        class="d-flex justify-content-between align-items-center px-50 pb-25"
      >
        <div class="mb-0 h6">{{ $t('origin_price') }}:</div>
        <div class="origin-price text-muted mb-0 h6">
          ${{ total.toLocaleString('en-US') }}
        </div>
      </div>
      <div
        v-if="checkoutDiscount + productDiscount > 0"
        class="d-flex justify-content-between align-items-center px-50 pb-25"
      >
        <div class="mb-0 h6">本次購買省下:</div>
        <div class="text-success mb-0">
          ${{ (checkoutDiscount + productDiscount).toLocaleString('en-US') }}
        </div>
      </div>
      <div class="d-flex justify-content-between pb-25 px-50">
        <div class="mb-0">{{ $t('total') }}:</div>
        <div class="h4 text-danger font-weight-bolder mb-0">
          ${{
            (total - checkoutDiscount - productDiscount).toLocaleString('en-US')
          }}
        </div>
      </div>
      <b-button
        variant="primary"
        block
        to="/checkout"
        @click="$refs.cartDropdown.hide()"
      >
        {{ $t('checkout') }}
      </b-button>
    </li>

    <p v-if="!$store.state.carts.products.length" class="m-0 p-1 text-center">
      {{ $t('cart_is_empty') }}
    </p>
  </b-nav-item-dropdown>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    const printf = require('printf')
    return {
      perfectScrollbarSettings: {
        maxScrollbarLength: 60,
        wheelPropagation: false
      },
      printf
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.carts.items,
      total: (state) => state.carts.total,
      productDiscount: (state) => state.carts.productDiscount,
      checkoutDiscount: (state) => state.carts.checkoutDiscount
    })
  },
  methods: {
    updateBuyCount(buyCount, productIndex, styleIndex) {
      this.$store.dispatch('carts/updateBuyCount', {
        productIndex,
        styleIndex,
        buyCount
      })
    },
    removeItemFromCarts(event, productIndex, styleIndex) {
      event.preventDefault()
      event.stopPropagation()
      this.$store.dispatch('carts/removeProducts', {
        productIndex,
        styleIndex
      })
    },
    checkCartUpdated() {
      this.$store.dispatch('carts/checkCartUpdated')
    }
  }
}
</script>

<style lang="scss">
.origin-price {
  text-decoration: line-through;
  color: #bbb;
  font-size: 0.9rem;
  font-weight: lighter;
}
.dropdown-menu {
  padding-bottom: 0px;
}
</style>
