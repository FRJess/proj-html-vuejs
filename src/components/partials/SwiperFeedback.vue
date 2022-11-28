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
    }
  },
  data(){
    return{
      students
    }
  }
}
</script>

<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">

    <swiper-slide
    v-for="(card, index) in students"
    :card="card"
    :key="index" >

      <img :src="getPathImage(card.image)" alt="">
      <h6>{{card.title}}</h6>
      <div class="rating-stars">
          <star-rating 
          :rating="5"
          :star-size="10"
          :read-only="true"
          :increment="1"
          :active-color="['#f2b71d']"
          :show-rating="false"
          :round-start-rating= "true"
          inactive-color="white">
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

.swiper {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 108px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  &:active{
    width: 80px;
  }
}


</style>