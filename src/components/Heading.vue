<template>
  <h2><slot /></h2>
</template>

<script>
export default {
  name: 'Heading',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 10px 0 15px 0;

  font-size: 25px;
  font-weight: normal;
}
</style>
