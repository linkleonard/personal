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
@import '~reset-css/sass/_reset.scss';
@import 'theme.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h2 {
  margin: 10px 0 15px 0;

  font-size: 25px;
  font-weight: normal;
}

a {
  color: $primary-link-color;
}

section {
  padding: 30px;

  &:nth-child(2n + 1) {
    background: $background-primary;
  }

  h2 {
    margin-bottom: 40px;
  }
}
</style>
