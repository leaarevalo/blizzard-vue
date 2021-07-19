<template>
  <div id="app">
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>

    <MainLayout v-else/>
  </div>
</template>

<script>
import LoadLayout from '@/layouts/LoadLayout'
import MainLayout from '@/layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading'
import { mapState } from 'vuex'
export default {
  name: 'App',

  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },

  computed: {
    ...mapState('loading', { isLoading: 'isLoading' })
  }

}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  padding 60px 0
  color  #ffffff
  background-color #15202b
</style>
