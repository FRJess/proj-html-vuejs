<script>
import NewCourses from './NewCourses.vue';
import Book from './Book.vue';
import WhyCourses from './WhyCourses.vue';

  export default {
    name:'AppMain',

    components:{
      NewCourses,
      Book,
      WhyCourses
    }
  }

</script>

<template>
  <NewCourses/>
  <Book/>
  <WhyCourses/>

  
</template>


<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


</style>
