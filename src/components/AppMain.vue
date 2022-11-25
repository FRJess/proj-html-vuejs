<script>
import AppCardCourses from './AppCardCourses.vue'

export default {
  name:'AppMain',

  components:{
    AppCardCourses
  }

}
</script>

<template>

  <AppCardCourses/>

  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


</style>
