<template>
  <div>
    <heading>{{ username }}</heading>
    <div>{{ roles }}</div>
  </div>
</template>

<script>
import Heading from '@/components/Heading';

export default {
  name: 'About',
  data() {
    return {
      username: 'Leonard Law',
      roles: ['Developer', 'Musician', 'Gamer'].join(', '),
    };
  },
  components: {
    Heading,
  },
};
</script>
