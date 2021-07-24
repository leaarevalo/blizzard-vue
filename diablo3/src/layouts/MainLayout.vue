<template>
  <div class="container">
    <header-bar />

    <router-view />

    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index'
import FooterBar from '@/components/FooterBar/Index'

export default {
  name: 'MainLayout',
  components: { FooterBar, HeaderBar }
}
</script>

<style scoped>

</style>
