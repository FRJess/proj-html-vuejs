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

    <div class="jt-card card col-3">
      <img 
      :src="getPathImage(card.image)" 
      :alt="card.image"
      class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{card.name}}</h4>
        <p class="card-text">{{card.type}}</p>
        <div class="card-footer jt-card-footer">
          <ul>
            <li>{{card.level}}</li>
            <li>{{card.material}}</li>
            <li>{{card.duration}}</li>
           </ul>
        </div>
    </div>
</div>

  
</template>


<style lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.jt-card{
    text-align: center;
    margin-bottom: 50px;
    cursor: pointer;
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
    ul{
      @include listStyle
    }
  }
  }


</style>