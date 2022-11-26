<script>
import courses from '../data/courses';

import { getPathImage } from '../data/functions';

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

      <!-- card con js -->
    <div class="jt-col">
      <div class="card-group h-100">
        <div class="jt-card card h-100 mt-2">
          <img 
          :src="getPathImage(card.image)" 
          :alt="card.image"
          class="card-img-top">
          <div class="card-body">
            <h4 class="card-title">{{card.name}}</h4>
            <p class="card-text">{{card.type}}</p>
          </div>
          <div class="card-footer jt-card-footer">
            <ul>
              <li>{{card.level}}</li>
              <li>{{card.material}}</li>
              <li>{{card.duration}}</li>
              </ul>
          </div>
        </div>

      </div>

      
    </div>
</template>


<style lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.card-group{
  // margin-bottom: 5px;
}
.jt-card{
    text-align: center;
    cursor: pointer;
    margin: 10px 0px;
    padding: 0px;
    // min-width: 600px;
  img{
    max-width: 100%;
    transition: all .2s;
    margin-bottom: 20px;
    &:hover{
      filter: brightness(0.5);
    }
  }
  .jt-card-footer{
    background-color: white;
    padding: 0;
    // display: flex;
    ul{
      @include centerFlex('horizontal');
      @include positionFlex('between');
      @include listStyle;
      text-align: center;
      padding: 10px;
      li{
        font-size: 0.8rem;
      }
    }
  }
}


</style>