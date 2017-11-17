<template>
  <div id="app">
    <site-header />
    <about />
    <skills />
    <projects />
    <site-footer />
  </div>
</template>

<script>
import Projects from '@/components/Projects';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import About from '@/components/About';
import Skills from '@/components/Skills';

export default {
  name: 'app',
  components: {
    Projects,
    About,
    Skills,
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
