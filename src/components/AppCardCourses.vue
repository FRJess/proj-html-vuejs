<script>
import courses from '../data/courses';

import { getPathImage } from '../data/functions';

export default {
  name:'AppCardCourses',
  props:{
    card: Object,
  },
  data(){
    return {
      // courses,
      getPathImage,
    }
  },
}
</script>

<template class="cards-courses">

  <h3>New Courses</h3>


  <!-- card con js -->

  <div class="card">
    <img :src="getPathImage(card.image)" alt="card.image">
    <h4>{{card.name}}</h4>
    <p>type</p>

    <nav>
      <ul>
        <li>{{card.level}}</li>
        <li>{{card.material}}</li>
        <li>{{card.duration}}</li>
      </ul>
    </nav>
  </div>

  <button>load more</button>


  
</template>


<style lang="scss">
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.cards-courses{
  max-width: 60%;
}

</style>