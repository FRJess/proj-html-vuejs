<script>
import Countdown from '@logustra/vountdown';

export default {
  name:'TheJumbotron',
  components: {
    Countdown
  },

}
</script>

<template>

  <!-- top con background e overflow -->
  <section class="jumbotron">
    <div class="jumbotron-top-backgound">
      <img src="../assets/img/slide-1.jpg" alt="">
      <div class="text-jumbotron">
        <h1>Start your Human Revolution today</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, mollitia.</p>

      </div>
    </div>

    <div class="jumbotron-top-offer">
      <div class="left-part">
        <h2><span class="white-text">Limited Sale: </span>All courses with 55% off</h2>
        <div class="mail-input input-group">
          <input type="email" class="form-control rounded-pill mail" placeholder="Enter your E-mail"  aria-describedby="basic-addon2">
          <button type="button" class="btn rounded-pill subscribe end-0">Subscribe</button>
        </div>
      </div>
      
      <div class="coutdown right-part">
        <countdown
          tag="div"
          :time="new Date('Dec 20, 2022').getTime()"
          v-slot="{ days, hours, minutes, seconds }"
        >
          <div class="numbers">
            <div class="days col">
              {{ days }} <span>Days</span>
            </div>
            <div class="hours col">
              {{ hours }} <span>Hours</span>
            </div>
            <div class="minutes col">
              {{ minutes }} <span>Minutes</span>
            </div>
            <div class="seconds col">
              {{ seconds }} <span>Seconds</span>
            </div>
          </div>
        </countdown>

     </div>
        

    </div>

  </section>

  <!-- bottom con testo + immagine firma -->
  <section>
    <div class="left">
      <h2>John doe</h2>
      <img src="" alt="">
    </div>

    <div class="right">
      <div class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere cumque exercitationem ipsum quae consectetur at quidem hic atque ut?</div>
    </div>
  </section>
  
</template>


<style lang="scss">

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.jumbotron{
  min-width: 100%;
  position: relative;
  font-family: $main-font;
  .white-text{
    color:white;
  }
  .jumbotron-top-backgound{
    position: relative;
    img{
      width: 100%;
    }
    .text-jumbotron{
      position: absolute;
      top: 30%;
      left: 70%;
      transform: translate(-30%, -70%);
    }
   
  }
  .jumbotron-top-offer{
    background-color: $primary-color;
    width: 80%;
    padding: 20px 50px;
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    bottom: -15%;
    border-radius: 5px;
    @include positionFlex('between');
    .left-part{
      min-width: 70%;

      h2{
        font-size: 1.8rem;
        // text-align: center;
      }
      .mail-input{
        width: 75%;
        margin: 20px 0;
        padding: 0;
        position: relative;
        .mail{
          font-size: 0.8rem;
          padding: 10px;
        }
        .subscribe{
          background-color: #2D4649;
          cursor: pointer;
          vertical-align: middle;
          position: absolute;
          text-transform: uppercase;
          color: white;
          font-size: 0.8rem;
          padding: 10px;
        }
      }

    }
    .coutdown{
      min-width: 30%;
      padding-right: 20px;
      .numbers{
        @include positionFlex('between');
        color: white;
        font-size: 3rem;
        span{
          font-size: 1rem;
          color: black;
        }
        .col{
          @include flexDirection('column');
        }
      }
    }
  }
}


</style>