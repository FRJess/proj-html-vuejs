<script>
import menufooter from '../data/menufooter';

export default {
  name:'TheFooter',

  data(){
    return {
      menufooter
    }
  }

}
</script>

<template>
  <div class="footer-container">
    <div class="footer-menu row">

      <div class="col-lg-3 col-md-6 col-sm-12 jt-col about">
        <h4>About</h4>
        <div>Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.</div>
        <div>Developed by Stylemix Themes</div>
        
        <div class="social-menu"> 
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12 jt-col contacts">
        <h4>Contact</h4>
        <ul>
          <li>USA, California 20 First Avenue, California</li>
          <li>Tel.: +1 212 456 300 32</li>
          <li>Fax.: +1 212 456 300 30</li>
          <li>info@masterstudy.com</li>
        </ul>
      </div>
      
      <!-- imported footermenu.js -->
      <div class="col-lg-3 col-md-6 col-sm-12 jt-col pages">
        <h4>Pages</h4>
        <ul>
          <li
          v-for="(link, index) in menufooter"
          :key="index"
          ><a class="position-relative" :href="link.href">{{link.text}}</a>
          
          </li>
        </ul>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12 jt-col blog">
        <h4>Blog</h4>
        <div class="blog-post">
          <img src="../assets/img/photo-1517520287167-4bbf64a00d66-50x50.jpeg" alt="">
          <div class="text">
            <h6>Our main target is to "Developing Yourself as a Leader"</h6>
            <p>- August 9, 2018</p>

          </div>
        </div>
        
        <div class="blog-post">
          <img src="../assets/img/photo-1490376840453-5f616fbebe5b-50x50.jpeg" alt="">
          <div class="text">
            <h6>Our main target is to "Developing Yourself as a Leader"</h6>
            <p>- August 9, 2018</p>

          </div>

        </div>
    
      </div>
    </div>

  
</div>
  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.footer-container{
  width: 100%;
  background-color: $primary-color;
  padding: 50px;
  margin-top: 60px;

  .footer-menu{
    width: auto;
    max-width: 1200px;
    font-family: $text-font;
    text-align: left;
    margin: 0 auto;
    padding: 60px 0 0;
    @include positionFlex ('between');

    .jt-col{
      padding: 0 15px 15px;
    }

    .social-menu a{
      display: inline-block;
      vertical-align: top;
      margin: 15px 15px 0 0;
    }

    .contacts ul li:first-child{
      margin-bottom: 10px;
    }
    .contacts ul li:last-child{
      margin-top: 10px;
    }

    .pages ul{
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
      list-style-type: square;
      li{
        margin-bottom: 10px;

      }
    }

    .blog-post{
      img{
        width: 75px;
        contain: content;
        float: left;
        padding: 0;
        margin-right: 15px;
      }
      h6{
        font-family: $main-font;
        font-size: 1.4rem;
      }
      p{
        font-size: 0.8rem;
        color: darken($light-elements, 20%) ;
        margin-left: 85px
      }
    }

    ul{
      @include listStyle();
      margin: 0;
      padding: 0;
    }
    a{
      @include links();
      &:hover{
        color: white;
      }
    }
  }

  h4{
    text-transform: uppercase;
    font-size: 2rem;
    font-family: $main-font;
    margin-bottom: 2rem;
  }
}

</style>