<template>
  <section class="projects">
    <h2>Projects</h2>
    <ul>
      <li v-for="item in projects">
        <a :href="item.uri" target="_blank" :style="{backgroundImage: `url(${item.background})`}">
          <span>{{ item.name }}</span>
          <div class="overlay" :style="{backgroundImage: `url(${item.backgroundBlur})`}" />
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import longboardBackground from '@/assets/longboard.jpg';
import longboardBackgroundBlurred from '@/assets/longboard-blur.jpg';

export default {
  name: 'HelloWorld',
  data() {
    return {
      projects: [
        {
          name: 'Skate Smooth',
          uri: 'http://www.leonaard.me/skate-smooth/',
          background: longboardBackground,
          backgroundBlur: longboardBackgroundBlurred,
        },
      ],
    };
  },
  components: {

  },
};
</script>

<style lang="scss" scoped>

ul {
  display: flex;
  justify-content: center;

  li {
    flex: 0 0 200px;
    height: 150px;
    display: flex;
  }
}

span {
  position: absolute;

  left: 0;
  right: 0;
  vertical-align: middle;

  top: 50%;
  transform: translateY(-50%);
  margin: auto;

  z-index: 1;

  color: #ffffff;
  text-shadow: 0 0 10px #000000, 0 0 10px #000000, 0 0 10px #000000;
}

a {
  flex: 1 1 auto;
  position: relative;

  border-radius: 10px;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0;
  }
}

a, .overlay {
  background-size: 200px 150px;
  background-position: center;
  transition: all 200ms linear;
}

a:hover, .overlay {
  background-size: 220px 165px;
}

a:hover {
  .overlay {
    background-size: 220px 165px;
    opacity: 1;
  }
}

</style>
