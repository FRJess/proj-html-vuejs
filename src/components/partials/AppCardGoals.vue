<script>
import reasons from '../../data/reasons';

export default {
  name:'AppCardGoals',
  props:{
    card: Object,
  },

}
</script>

<template>

  <!-- card con js -->

  <div class="jt-col">
      <div class="card-group h-100">
        <div class="jt-card card rounded-0 border-top-0 border-bottom-0 border-end-0">
          <div class="icon">
            <font-awesome-icon :class="card.icon"></font-awesome-icon>
          </div>
          <div class="card-body">
            <h4 class="card-title">{{card.name}}</h4>
            <p class="card-description">{{card.description}}</p>
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
  display: inline-block;
  cursor: pointer;
  margin: 0px 0px;
  padding: 20px 10px;
  border-left: 4px solid $primary-color;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: $text-font;
  &:hover{
    background-color: $primary-color;
    color: black;
  }
  .icon{
    color: $primary-color;
    float: left;
    display: inline;
    font-size: 40px;
    width: 20%;
    height: 100%;
  }
  
  .card-body{
    float: left;
    display: inline;
    width: 80%;
    height: 100%;
    padding: 0;
    text-align: left;
    .card-title{
      font-family: $main-font;
      font-size: 1.5rem;
    }
    .card-description{
      font-family: $text-font;
      color: $light-elements;
      font-size: 0.8rem;
      padding: 0;
      margin: 0;
    }
  }
}


</style>