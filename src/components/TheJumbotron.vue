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

  <section class="jumbotron-top jt-container container-fluid">
    <div class="jumbotron-top-backgound">
      <img src="../assets/img/slide-1.jpg" alt="">
      <div class="text-jumbotron">
        <h1>Start your Human <span>Revolution</span>  today</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, mollitia.</p>

      </div>
    </div>

    <div class="jumbotron-top-offer container">
      <div class="content row">

        <div class="left-part col-md-6 col-lg-6 col-sm-12">
          <h2><span class="white-text">Limited Sale: </span>All courses with 55% off</h2>
          <div class="mail-input input-group">
            <input type="email" class="form-control rounded-pill mail" placeholder="Enter your E-mail"  aria-describedby="basic-addon2">
            <button type="button" class="btn rounded-pill subscribe end-0">Subscribe</button>
          </div>
        </div>

        <!-- countdown component imported-->
        <div class="coutdown right-part col-md-6 col-lg-6 col-sm-12">
          <countdown
            tag="div"
            :time="new Date('Dec 20, 2022').getTime()"
            v-slot="{ days, hours, minutes, seconds }">
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

    </div>
  </section>

  <section class="jumbotron-bottom row">
    <div class="director col-md-6 col-lg-6 col-sm-12">
      <h2>Hey there, my name is John Doe. I'm the founder of the Brain Academy.</h2>
      <img src="../assets/img/sign.jpg" alt="">
    </div>

    <div class="right col-md-6 col-lg-6 col-sm-12">
      <div class="presentation">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit repellat modi soluta excepturi ex officiis, nihil ab magni culpa voluptatibus, vitae quisquam optio distinctio recusandae veritatis adipisci sunt minima qui eius error commodi eveniet deleniti dolor. Autem ducimus cupiditate id. Ab fuga at repudiandae sed odit eius autem consequatur vitae quod molestiae totam nam explicabo aut, iure unde voluptatum, inventore qui aliquam! Nostrum perferendis numquam similique voluptates velit distinctio dolorum incidunt expedita officia fuga, magni veritatis necessitatibus repellendus, ipsam rerum quae aperiam porro quasi? Dicta, delectus incidunt in natus vel voluptates illo necessitatibus numquam recusandae maiores consequuntur soluta ea molestiae.
      </div>
    </div>
  </section>
  
</template>


<style lang="scss" scoped>

@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.jt-container{
  margin: 0;
  padding: 0;
  position: relative;
  font-family: $main-font;
  width: 100%;
  .jumbotron-top-backgound{
    position: relative;
    img{
      min-width: 100%;
    }
    .text-jumbotron{
      position: absolute;
      top: 30%;
      left: 70%;
      transform: translate(-30%, -70%);
      width: 500px;
      margin-top: 20px;
      h1{
        font-size: 70px;
        span{
          color: $primary-color;
        }
      }
      p{
        font-size: 2rem;
      }
    }
  }
  
  .jumbotron-top-offer{
    background-color: $primary-color;
    display: flex;
    width: 80%;
    padding: 20px 50px;
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: -15%;
    transform: translateX(-50%);
    border-radius: 5px;
    .white-text{
      color:white;
    }
    .content{
      width: 100%;
      @include centerFlex('vertical');
      .left-part{
        padding-left: 0;
        padding-right: 0;
  
        h2{
          font-size: 1.8rem;
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
        padding-left: 0;
        padding-right: 0;
        .numbers{
          @include positionFlex('between');
          color: white;
          font-size: 6rem;
          line-height: 6rem;
          span{
            font-size: 2rem;
            color: black;
            line-height: 2rem;
          }
          .col{
            @include flexDirection('column');
          }
        }
      }
    }
  }
}
.jumbotron-bottom{
  padding-top: 200px;
  max-width: 70%;
  margin: 0 auto;
  @include positionFlex('between');
  .director{
    font-family: $main-font;
    padding: 0 50px;
    h2{
      font-size: 2rem;
    }
    img{
      @include centerFlex('horizontal');
      max-width: 200px;
      margin: 20px auto;
    }
  }
  .presentation{
    font-family: $text-font;
    font-size: 0.8rem;
    color: #222222;
  }
}

</style>