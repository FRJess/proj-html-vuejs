<script>
import feedback from '../../data/feedback';

export default {
  name: 'FeedbackDatas',
  props: {
    card: Object,
  },

}
</script>

<template>
  <div class="jt-col">
    <div class="jt-card">
      <div class="icon">

      </div>
      <div class="card-body">
        <div class="card-data">{{card.data}}</div>
        <div class="card-name">{{card.name}}</div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
@use '../../styles/general.scss' as *;


</style>