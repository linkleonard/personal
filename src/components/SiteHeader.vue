<template>
  <div>
    <img src="../assets/profile.png">
    <heading class="username">{{ username }}</heading>
  </div>
</template>

<script>
import Heading from '@/components/Heading';

export default {
  name: 'About',
  data() {
    return {
      username: 'Leonard Law',
    };
  },
  components: {
    Heading,
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.username {
  margin: 0 10px;
}
</style>
