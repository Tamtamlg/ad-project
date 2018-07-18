<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 text-xs-center pt-5 v-if="loading">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0" vif>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
        >
          <v-list-tile
            v-for="order of orders"
            :key="order.id"
          >
            <v-list-tile-action>
              <v-checkbox color="primary" :input-value="order.done" @change="markDone(order)"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },
  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
      .then(() => {
        order.done = true
      })
      .catch(() => {})
    }
  },
  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<style>

</style>
