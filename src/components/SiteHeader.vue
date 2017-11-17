<template>
  <div>
    <img :src="Profile">
    <h2 class="username">{{ username }}</h2>
  </div>
</template>

<script>
import Profile from '@/assets/profile.png';

export default {
  name: 'About',
  data() {
    return {
      username: 'Leonard Law',
      Profile,
    };
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
