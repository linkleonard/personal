<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '~reset-css/_reset.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h2 {
  margin: 10px 0 15px 0;

  font-size: 25px;
  font-weight: normal;
}

a {
  color: #42b983;
}

section {
  padding: 30px;

  &:nth-child(2n + 1) {
    background: #f8f8f8;
  }

  h2 {
    margin-bottom: 40px;
  }
}
</style>
