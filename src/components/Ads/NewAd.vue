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
            <v-btn class="warning" @click="triggerUpload">Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input ref="fileInput" type="file" name="" id="" style="display: none" accept="image/*" @change="onFileChange">
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img :src="imgSrc" alt="" height="100px" v-if="imgSrc">
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
            <v-btn class="success" @click="createAd" :disabled="!valid || !image || loading" :loading="loading">Create ad</v-btn>
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
        promo: false,
        image: null,
        imgSrc: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]

        const reader = new FileReader()

        reader.onload = e => {
          this.imgSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>



<style>

</style>
