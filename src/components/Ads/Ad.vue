<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="elevation-10 mb-3" v-if="!loading">
          
          <v-card-media
          :src="ad.imgSrc"
          height="300px"
          ></v-card-media>
        
          <v-card-text> 
           <h1 class="text--primary">{{ad.title}}</h1>
            <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <app-edit-ad-modal :ad="ad" v-if="isOwner"></app-edit-ad-modal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>

        </v-card>
        <div v-else>
          <v-container>
            <v-layout row>
              <v-flex xs12 class="text-xs-center pt-5">
                <v-progress-circular
                  :size="50"
                  color="primary"
                  indeterminate
                ></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as fb from 'firebase'
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  data () {
    return {}
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === fb.auth().currentUser.uid
    }
  },
  components: {
    appEditAdModal: EditAdModal
  }
}
</script>

<style>

</style>
