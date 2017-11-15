<template>
  <div id="app">
    <about />
    <projects />
    <resume />
  </div>
</template>

<script>
import Projects from '@/components/Projects';
import About from '@/components/About';
import Resume from '@/components/Resume';

export default {
  name: 'app',
  components: {
    Projects,
    About,
    Resume,
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
