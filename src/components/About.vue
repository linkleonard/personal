<template>
  <div>
    <heading>About</heading>
    <div>{{ roles }}</div>
    <ul>
      <li>GitHub: <a href="https://github.com/linkleonard">https://github.com/linkleonard</a></li>
    </ul>
  </div>
</template>

<script>
import Heading from '@/components/Heading';

export default {
  name: 'About',
  data() {
    return {
      roles: ['Developer', 'Musician', 'Gamer'].join(', '),
    };
  },
  components: {
    Heading,
  },
};
</script>
