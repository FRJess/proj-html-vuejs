<script>
import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import students from '../../data/studentsays';
import StarRating from 'vue-star-rating';
import { getPathImage } from '../../data/functions';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  name:'SwiperFeedback',
  components:{
    Swiper,
    SwiperSlide,
    StarRating,
  },
  props:{
    card: Object,
  },
  setup() {
    return {
      modules: [Navigation],
      getPathImage,
    };
  },
}
</script>

<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <img :src="getPathImage(card.image)" alt="">
      <h6>{{card.title}}</h6>
      <div class="rating-stars">
          <star-rating 
          :rating="5"
          :star-size="30"
          :read-only="true"
          :increment="1"
          :active-color="['#E50815']"
          :show-rating="false"
          :round-start-rating= "true"
          inactive-color="white"
          :glow="4"
          glow-color="#ffff00">
          </star-rating>
        </div>
        <p>{{card.text}}</p>

    </swiper-slide>
  </swiper>
  
</template>


<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss' as *;

</style>