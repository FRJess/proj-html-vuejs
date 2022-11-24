<script>

import menu from '../data/menu';

export default {
  name:'TheHeader',
  data(){
    return {
      menu
    }
  }

}
</script>

<template>
  <header  class="container">

    <!-- logo -->
    <div class="logo">
      <img src="../assets/img/MasterStudy-1.svg" alt="logo Master Study">
    </div>
  
    <!-- nav con js file link index -->
    <nav class="navbar d-flex">
      <ul>
        <li
        v-for="(link, index) in menu"
        :key="index"
        ><a :class="{'active': link.current}" :href="link.href">{{link.text}}</a></li>
      </ul>
    </nav>
  
    <!-- link social -->
    <nav>
      <!-- controllare se img o FA -->
    </nav>

  </header>



  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

header{
  // font-family: $main-font;
  padding: 50px;
  @include centerFlex ('vertical');
  @include positionFlex ('between');

  .logo{
    @include centerFlex('vertical');
    img{
      height: 30px;
      cursor: pointer;
    }
  }
  nav{
    display: flex;
    ul{
      @include listStyle();
      @include centerFlex('both');
      li{
        @include positionFlex ('between');
        @include centerFlex('vertical');
      }
    }
  }
}


</style>