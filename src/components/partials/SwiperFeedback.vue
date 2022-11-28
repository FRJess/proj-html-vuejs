<script>
import {Navigation} from 'swiper';
import  { Swiper, SwiperSlide } from 'swiper/vue';
import StarRating from 'vue-star-rating';
import { getPathImage } from '../../data/functions';
import students from '../../data/studentsays';

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
  },

  methods:{
    getSwiper(){
    new Swiper('.swiper', {
      modules: [Navigation],
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    })
  }
}
}
</script>

<template>
  <!-- swiper component imported-->
  <swiper :navigation="true" :modules="modules" class="mySwiper">

    <!-- imported studentsays.js-->  
    <swiper-slide
    v-for="(card, index) in students"
    :card="card"
    :key="index" >

      <div class="jt-slider">
        
        <img :src="getPathImage(card.image)" alt="">
        <h6>{{card.title}}</h6>

        <!-- star-rating component imported-->
        <star-rating 
          :rating="5"
          :star-size="10"
          :read-only="true"
          :increment="1"
          :active-color="['#f2b71d']"
          :show-rating="false"
          :round-start-rating= "true"
          inactive-color="white"
          class="rating-stars">
        </star-rating>

        <p>{{card.text}}</p>

      </div>
        
    </swiper-slide>

  </swiper>
  
</template>


<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss' as *;

.swiper {
  width: 60%;
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

  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  padding-bottom: 5px;
}

.jt-slider{
    width: 50%;
    margin: 0 auto;
    text-align: center;
    h6{
      font-size: 1.2rem;
      line-height: 1.2rem;
      margin: 0;
    }
    .rating-stars{
      @include centerFlex('horizontal');
      padding-bottom: 15px;
    }
    p{
      font-family: $text-font;
      font-size: 0.8rem;
      color: $light-elements;
    }
  }
  
</style>