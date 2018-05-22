<template>
  <v-app id="app">
    <BaseLayout></BaseLayout>
  </v-app>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'app',
  components: {
    BaseLayout
  }
}
</script>
<style lang="stylus">
@require './stylus/main';
</style>
