<script>
import AppCardCourses from './AppCardCourses.vue';
import courses from '../data/courses';

export default {
  name:'NewCourses',

  components:{
    AppCardCourses
  },

  data(){
    return{
      courses

    }
  },

}
</script>

<template>

<div  class="cards-courses">
  <h3>New Courses</h3>


  <!-- card con js -->
  <AppCardCourses
  v-for="(card, index) in courses"
  :card="card"
  :key="index"/>


  <button>load more</button>

</div>
  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.cards-courses{
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  h3{
    font-size: 3rem;
  }
}

</style>