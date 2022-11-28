<script>
import feedback from '../../data/feedback';

export default {
  name: 'FeedbackDatas',
  props: {
    card: Object,
  },

}
</script>

<template>
  <div class="jt-col">
    <div class="card-group h-100">
      <div class="jt-card">

        <div class="icon">
          <i :class="card.icon"></i>
        </div>

        <div class="card-body">
          <div class="card-data">{{card.data}}</div>
          <div class="card-name">{{card.name}}</div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss' as *;

.jt-card{
  width: 200px;
  max-height: 100px;
  margin: 0px 0px;
  padding: 20px 10px;
  font-family: $main-font;
  color: white;
  @include centerFlex('vertical');
  .icon{
    float: left;
    display: inline;
    min-width: 25%;
    i{
      font-size: 2.2rem;
    }
  }
  .card-body{
    float: left;
    display: inline;
    max-height: 100px;
    min-width: 75%;
    padding: 10px;
    text-align: left;
    .card-data{
      color: darken($primary-color, 5%) ;
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    .card-name{
      font-family: $main-font;
      font-size: 1rem;
      line-height: 1rem;
    }

  }
}



</style>