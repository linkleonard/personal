<template>
  <div>
    <custom-header>{{ username }}</custom-header>
    <div>{{ roles }}</div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'About',
  data() {
    return {
      username: 'Leonard Law',
      roles: ['Developer', 'Musician', 'Gamer'].join(', '),
    };
  },
  components: {
    CustomHeader: Header,
  },
};
</script>
