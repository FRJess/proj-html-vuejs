<script>
import AppCardGoals from './AppCardGoals.vue';
import reasons from '../data/reasons';

export default {
  name:'WhyCourses',

  components:{
    AppCardGoals
  },

  data(){
    return{
      reasons

    }
  },

}
</script>

<template>
  <div class="why-courses-container">

    <div  class="cards-reasons">
      <h3>Why my Courses?</h3>
      <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 g-4">
  
          
        <AppCardGoals
        v-for="(card, index) in reasons"
        :card="card"
        :key="index"/>
       
      </div>
    </div>
      
  </div>

  
</template>


<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.why-courses-container{
  padding: 60px 0;
}
.cards-reasons{
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  h3{
    font-size: 3rem;
  }
  .row{
    margin: 10px auto;
  }
}

</style>