<script>
import FeedbackDatas from './partials/FeedbackDatas.vue';
import feedback from '../data/feedback';

export default {
  name:'AppFeedback',

  components:{
    FeedbackDatas
  },

  data(){
    return{
      feedback
    }
  }

}
</script>

<template>

  <!-- backgroup top -->
  <section class="top-feedback">
    <div class="container-feedback">
    <img src="../assets/img/counter-1919x1101.jpg" class="image-background" alt="alumni">
  
    <div class="feedback-datas">
      <FeedbackDatas
        v-for="(card, index) in feedback"
        :card="card"
        :key="index"/>
      <!-- FA con numero + titolo -->
    </div>

  </div>

  </section>


  <!-- <section class="bottom">
    <h2>student</h2>

    slider
    <div>
      <img src="" alt="">
      <h4>titolo</h4>
      <div>stelle</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, fugit. Dolorem unde dicta assumenda facere enim odio cumque impedit hic.</p>
      
    </div>

  </section> -->
  
</template>


<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.container-feedback{
  // position: relative;
  max-height: 400px;
  .image-background{
    
    object-fit: cover;
    object-position: 0 0%;
    width: 100%;
    height: 300px;
    position: relative;
    top: 0;
    left: 0;
  }
  .feedback-datas{
    width: 60%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include positionFlex('between')
  }
}

</style>