<script>
import NewCourses from './NewCourses.vue'

export default {
  name:'AppMain',

  components:{
    NewCourses
  
  }


}
</script>

<template>
  <NewCourses/>

  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


</style>
