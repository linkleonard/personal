<template>
  <nav>
    <img :src="Profile">
    <h1 class="username">{{ username }}</h1>
  </nav>
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
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background-color: #e8ffe8;
}

.username {
  margin: 0 10px;
}

h1 {
  font-size: 24px;
  font-weight: 500;
}
</style>
