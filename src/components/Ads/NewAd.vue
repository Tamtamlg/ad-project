<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field name="title" label="Ad title" type="text" v-model="title" :rules="[v => !!v || 'Title is required']"></v-text-field>
          <v-textarea name="description" label="Ad description" type="text" v-model="description" :rules="[v => !!v || 'Title is required']"></v-textarea>
        </v-form>

        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img src="" alt="" height="100px">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch
                label="Add to promo?"
                v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-btn class="success" @click="createAd" :disabled="!valid">Create ad</v-btn>
          </v-flex>
        </v-layout>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      valid: false,
      promo: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>

<style>

</style>
