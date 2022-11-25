<script>
import AppCardCourses from './AppCardCourses.vue';

import courses from '../data/courses';

export default {
  name:'AppMain',

  components:{
    AppCardCourses
  },

  data(){
    return{
      courses,

    }
  },

}
</script>

<template>

  <AppCardCourses
  v-for="(card, index) in courses"
  :card="card"
  :key="index"/>

  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


</style>
