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
