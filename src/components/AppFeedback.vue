<script>
import FeedbackDatas from './partials/FeedbackDatas.vue';
import feedback from '../data/feedback';
import SwiperFeedback from './partials/SwiperFeedback.vue';
import studentsays from '../data/studentsays';

export default {
  name:'AppFeedback',

  components:{
    FeedbackDatas,
    SwiperFeedback,
  },

  data(){
    return{
      feedback,
      studentsays,
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


  <section class="bottom">
    <h2>What Students Say</h2>

    <!-- slider -->
    <div>
      <SwiperFeedback
      v-for="(card, index) in studentsays"
      :card="card"
      :key="index" />
    </div>

  </section>
  
</template>


<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.container-feedback{
  position: relative;
  width: 100%;
  max-height: 400px;
  .image-background{
    object-fit: cover;
    object-position: 0 0%;
    min-width: 100%;
    max-height: 400px;
    position: relative;
    top: 0;
    left: 0;
  }
  .feedback-datas{
    width: 80%;
    flex-wrap: wrap;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include positionFlex('between')
  }
}

</style>