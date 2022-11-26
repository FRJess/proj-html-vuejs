<script>
export default {
  name:'Book'

}
</script>

<template>

  <div class="container-book">
    <img src="../assets/img/slider_1-1917x607-1914x606.jpg" class="image-background" alt="library">
    <img src="../assets/img/book.png" class="image-book" alt="book">
    <!-- <img src="../assets/img/amazon.png" class="image-button" alt="amazon button"> -->

  </div>

  <!-- con background library -->
  <h2>exclu</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, aspernatur.</p>
  
</template>


<style lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.container-book{
  position: relative;
  max-height: 600px;
  // width: 100%;
  top: 0;
  left: 0;
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
    right: 270px;
  }
}


</style>