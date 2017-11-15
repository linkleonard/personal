<template>
  <div>
    <heading>About</heading>
    <div>{{ roles }}</div>
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
