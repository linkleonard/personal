<template>
  <div class="projects">
    <heading>Projects</heading>
    <ul>
      <li><a href="http://www.leonaard.me/skate-smooth/" target="_blank">Skate Smooth</a></li>
    </ul>
  </div>
</template>

<script>
import Heading from '@/components/Heading';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Bleep bloop',
    };
  },
  components: {
    Heading,
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
