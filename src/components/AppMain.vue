<script>
import NewCourses from './NewCourses.vue';
import Book from './Book.vue';

  export default {
    name:'AppMain',

    components:{
      NewCourses,
      Book
    }
  }

</script>

<template>
  <NewCourses/>
  <Book/>

  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


</style>
