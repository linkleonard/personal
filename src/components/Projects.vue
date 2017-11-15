<template>
  <div class="projects">
    <custom-header>Projects</custom-header>
    <ul>
      <li><a href="http://www.leonaard.me/skate-smooth/" target="_blank">Skate Smooth</a></li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Bleep bloop',
    };
  },
  components: {
    CustomHeader: Header,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
