<script>
import courses from '../../data/courses';

import { getPathImage } from '../../data/functions';

export default {
  name:'AppCardCourses',
  props:{
    card: Object,
  },
  data(){
    return {
      getPathImage,
    }
  },
}
</script>

<template>

      <!-- imported courses.js-->
    <div class="jt-col">
      <div class="card-group h-100">

        <div class="jt-card card h-100 mt-2 rounded-0">
          
          <img 
          :src="getPathImage(card.image)" 
          :alt="card.image"
          class="card-img-top rounded-0 p-0">
          <div class="price">{{card.price}}</div>

          <div class="card-body">
            <h4 class="card-title">{{card.name}}</h4>
            <p class="card-type">{{card.type}}</p>
            <span 
            v-if="card.special === true"
            class="jt-badge badge">
            Special
            </span>
          </div>

          <div class="card-footer jt-card-footer border-0">
            <ul>
              <li><i class="fa-sharp fa-solid fa-signal"></i>{{card.level}}</li>
              <li><i class="fa-sharp fa-solid fa-list"></i>{{card.material}}</li>
              <li><i class="fa-regular fa-clock"></i>{{card.duration}}</li>
              </ul>
          </div>
        </div>

      </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss' as *;

.card-group{
  min-width: 200px;
}
.jt-card{
    text-align: center;
    cursor: pointer;
    margin: 10px 0px;
    padding: 0px;
  img{
    max-width: 100%;
    transition: all .2s;
    margin-bottom: 20px;
    &:hover{
      filter: brightness(0.5);
    }
  }
  .jt-badge{
    text-transform: uppercase;
    font-size: 0.7rem;
    position: absolute;
    top: 5%;
    right: 2%;
    padding: 4px 6px;
    border-radius: 3px;
    background-color: $primary-color;
            
  }
  .price {
    text-align: center;
    position: absolute;
    color: white;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -20%);
    opacity: 0;
    transition: 0.6s all;
    font-weight: 600;
    font-size: 2rem;
  }
  &:hover .price {
    opacity: 1;
  }
  .card-body{
    padding: 0px;
    .card-title{
      font-size: 1rem;
    }
    .card-type{
      font-size: 0.7rem;
      font-family: $text-font;
      color: $light-elements;
      margin-bottom: 0px;
    }

  }
  .jt-card-footer{
    background-color: white;
    padding: 0;
    position: relative;
    border-top: 1px solid black;
    &::before{
      content: '';
      position: absolute;
      margin: 0 auto;
      background-color: lighten($light-elements, 20%) ;
      width: 95%;
      height: 1px;
      top: 0;
      left: 0;
      right: 0;
    }
    
    ul{
      @include centerFlex('horizontal');
      @include positionFlex('between');
      @include listStyle;
      text-align: center;
      padding: 15px 10px;
      li{
        @include centerFlex('vertical');
        font-family: $text-font;
        color: $light-elements;
        font-size: 0.6rem;
        i{
          color: $primary-color;
          padding-right: 3px;
        }
      }
    }
  }
}


</style>