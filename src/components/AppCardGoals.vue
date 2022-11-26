<script>
import reasons from '../data/reasons';

export default {
  name:'AppCardGoals',
  props:{
    card: Object,
  },
  // data(){
  //   return {

  //   }
  // }

}
</script>

<template>

  <!-- card con js -->

  <div class="jt-col">
      <div class="card-group h-100">
        <div class="jt-card card h-100 mt-2 rounded-0">
          <i :class="card.icon"></i>
          <div class="card-body">
            <h4 class="card-title">{{card.name}}</h4>
            <p class="card-description">{{card.description}}</p>
          </div>
        


        </div>
      </div>
    </div>
  
</template>


<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


.card-group{
  min-width: 200px;
}
.jt-card{
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin: 10px 0px;
  padding: 0px;
  border-left: 4px solid $primary-color;
  font-family: $text-font;
  &:hover{
    background-color: $primary-color;
    color: black;
  }
  
  .card-body{
    padding: 0px;
    .card-title{
      font-size: 1rem;
      font-weight: 800;
    }
    .card-description{
      font-family: $text-font;
      color: $light-elements;
      font-size: 0.8rem;
    }
  }
  
}



</style>