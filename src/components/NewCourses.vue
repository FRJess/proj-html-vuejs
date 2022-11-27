<script>
import AppCardCourses from './partials/AppCardCourses.vue';
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
  <div class="new-courses-container">

    <div  class="cards-courses">
      <h3>New Courses</h3>
      <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
  
          
        <AppCardCourses
        v-for="(card, index) in courses"
        :card="card"
        :key="index"/>
       
      </div>
        
      <button type="button" class="jt-btn btn btn-warning rounded-pill">load more</button>
    </div>
      
  </div>

  
</template>


<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.new-courses-container{
  background-color: #EDF2F5;
  padding: 60px 0;
}
.cards-courses{
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  h3{
    font-size: 3rem;
  }
  .row{
    margin: 10px auto;
  }
  .jt-btn{
    text-transform: uppercase;
    background-color: $primary-color;
    color: white;
    margin-top: 30px;
    &:hover{
      filter: brightness(0.8);
      color: white
    }
  
  }
}

</style>