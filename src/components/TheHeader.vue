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
  <header  class="jt-container">
          
    <div class="logo col-auto">
      <img src="../assets/img/MasterStudy-1.svg" alt="logo Master Study">
    </div>

    <!-- imported menu.js -->
    <div class="navigation col-auto">
      <ul>
          <li
          v-for="(link, index) in menu"
          :key="index"
          ><a class="position-relative" :class="{'active': link.current}" :href="link.href">{{link.text}}            
            <span 
            v-if="link.new === true"
            class="jt-badge badge">
            New
          </span></a>
          </li>
        </ul>
    </div>

    <div class="social-menu col-auto">
      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
    </div>


  </header>
  
</template>


<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.jt-container{
  height:250px;
  width: 70%;
  margin: 0 auto;
  font-family: $main-font;
  font-size: 20px;
  @include centerFlex ('vertical');
  @include positionFlex ('between');

  .logo{
    img{
      height: 50px;
      cursor: pointer;
    }
  }
  .navigation{
    display: flex;
    ul{
      @include listStyle();
      @include centerFlex('both');
      li{
        text-decoration: none;
        margin: 0 10px 0 10px;
        a{
          @include links();
          
          // line styled in active element
          &.active{
            margin-bottom: 8px;
            text-decoration: underline;
            text-decoration-color: $primary-color;
            text-decoration-thickness: 4px;
            text-underline-offset: 10px;
            &::after{
              content: '';
              display: block;
              position: absolute;
              width: 0;
              height: 0;
              top: 24px;
              left: 50%;
              margin-left: -3px;
              border-style: solid;
              border-width: 0 3px 3px;
              border-color: transparent transparent $primary-color;
            }
          }

          .jt-badge{
            text-transform: uppercase;
            font-size: 0.8rem;
            position: absolute;
            bottom: 100%;
            right: -15%;
            padding: 4px 6px;
            border-radius: 3px;
            background-color: #DC1244;
          }
        }
      }
    }
  }
  .social-menu{
    a{
      margin: 0 5px 0 5px;
      @include links();

    }
  }
}

</style>