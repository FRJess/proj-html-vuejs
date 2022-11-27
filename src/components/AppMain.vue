<script>
import NewCourses from './NewCourses.vue';
import Book from './Book.vue';
import WhyCourses from './WhyCourses.vue';
import AppFeedback from './AppFeedback.vue';

  export default {
    name:'AppMain',

    components:{
      NewCourses,
      Book,
      WhyCourses,
      AppFeedback
    }
  }

</script>

<template>
  <NewCourses/>
  <Book/>
  <WhyCourses/>
  <AppFeedback/>

  
</template>


<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


</style>
