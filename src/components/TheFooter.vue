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
    <div class="footer-menu">

      <div class="col-3 jt-col about">
        <h4>About</h4>
        <div>Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.</div>
        <div>Developed by Stylemix Themes</div>
        
        <div class="social-menu"> 
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        
      </div>
      
      <div class="col-3 jt-col contacts">
        <h4>Contact</h4>
        <ul>
          <li>USA, California 20 First Avenue, California</li>
          <li>Tel.: +1 212 456 300 32</li>
          <li>Fax.: +1 212 456 300 30</li>
          <li>info@masterstudy.com</li>
        </ul>
      </div>
      
      <div class="col-3 jt-col">
        <h4>Pages</h4>
        <ul>
          <li
          v-for="(link, index) in menufooter"
          :key="index"
          ><a class="position-relative" :href="link.href">{{link.text}}</a>
          
          </li>
        </ul>
      </div>
      
      <div class="col-3 jt-col">
        <h4>Blog</h4>
    
        <img src="../assets/img/photo-1490376840453-5f616fbebe5b-50x50.jpeg" alt="">
        <h6>Our main target is to "Developing Yourself as a Leader"</h6>
        <p>- August 9, 2018</p>
    
        <img src="../assets/img/photo-1517520287167-4bbf64a00d66-50x50.jpeg" alt="">
        <h6>Our main target is to "Developing Yourself as a Leader"</h6>
        <p>- August 9, 2018</p>
    
      </div>
    </div>

  
</div>
  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.footer-container{
  height: 500px;
  width: 100%;
  background-color: $primary-color;
  padding: 50px;
  .footer-menu{
    width: auto;
    max-width: 1200px;
    font-family: $text-font;
    text-align: left;
    margin: 0 auto;
    padding: 60px 0;
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
  
}

h4{
  text-transform: uppercase;
  font-size: 2rem;
  font-family: $main-font;
}

</style>