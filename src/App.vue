<script>
import TheHeader from './components/TheHeader.vue'
import AppMain from './components/AppMain.vue'
import TheFooter from './components/TheFooter.vue'


export default {
  name:'App',

  components:{
    TheHeader,
    AppMain,
    TheFooter,
  }

}
</script>

<template>

  <TheHeader/>
  <AppMain/>
  <TheFooter/>
  
</template>


<style lang="scss">

</style>