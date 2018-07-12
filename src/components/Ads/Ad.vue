<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card class="elevation-10 mb-3">
          
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
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {}
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

<style>

</style>
