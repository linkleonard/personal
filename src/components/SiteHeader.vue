<template>
  <div>
    <img src="../assets/profile.png">
    <h2 class="username">{{ username }}</h2>
  </div>
</template>

<script>


export default {
  name: 'About',
  data() {
    return {
      username: 'Leonard Law',
    };
  },
  components: {

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
