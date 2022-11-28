<script>
import TheHeader from './components/TheHeader.vue'
import TheJumbotron from './components/TheJumbotron.vue'
import AppMain from './components/AppMain.vue'
import TheFooter from './components/TheFooter.vue'


export default {
  name:'App',

  components:{
    TheHeader,
    TheJumbotron,
    AppMain,
    TheFooter,
  
  }

}
</script>

<template>

  <TheHeader/>
  <TheJumbotron/> 
  <AppMain/>
  <TheFooter/>
  
</template>


<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables.scss' as *;
@use './styles/partials/mixins' as *;



</style>