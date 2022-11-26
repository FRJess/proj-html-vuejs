<script>
export default {
  name:'Book'

}
</script>

<template>

  <div class="container-book">
    <img src="../assets/img/slider_1-1917x607-1914x606.jpg" class="image-background" alt="library">
    <img src="../assets/img/book.png" class="image-book" alt="book">
    <div class="book-text">
      <h2>Get My Exclusive Investing Book just for $19.50</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, aspernatur.</p>
      <div class="button-amazon">
        <img src="../assets/img/amazon.png" alt="amazon button">
      </div>
    </div>

  </div>
  
</template>


<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.container-book{
  font-family: $text-font;
  position: relative;
  max-height: 600px;
  // min-width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  .image-background{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .image-book{
    height: 90%;
    position: absolute;
    bottom: 0%;
    right: 20%;
  }
  .book-text{
    position: absolute;
    max-width: 40%;
    top: 20%;
    left: 20%;
    text-align: center;
    h2{
      font-weight: 800;
      color: $primary-color;
    }
    p{
      color: white;
      font-family: $italic-font;
      font-style: italic;
    }
    .button-amazon{
      img{
        max-width: 150px;
      }
    }
  }
}


</style>