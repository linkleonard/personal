<template>
  <section class="projects">
    <h2>Projects</h2>
    <ul>
      <li v-for="item in projects">
        <a :href="item.uri" target="_blank" :style="{backgroundImage: `url(${item.background})`}">
          <span>{{ item.name }}</span>
          <div class="overlay" :style="{backgroundImage: `url(${item.backgroundBlur})`}" />
        </a>
        <div class="description">
          <p v-for="paragraph in item.description">{{ paragraph }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import longboardBackground from '@/assets/longboard.jpg';
import longboardBackgroundBlurred from '@/assets/longboard-blur.jpg';
import tapcatBackground from '@/assets/tapcat.jpg';
import tapcatBackgroundBlurred from '@/assets/tapcat-blur.jpg';

export default {
  name: 'HelloWorld',
  data() {
    return {
      projects: [
        {
          name: 'Skate Smooth',
          uri: 'https://www.leonaard.me/skate-smooth/',
          background: longboardBackground,
          backgroundBlur: longboardBackgroundBlurred,
          description: [
            'A visual road quality index targeted towards skateboarders.',
            'Features an integration with the Google Maps API, with data persistence powered by HTML5 Local Storage.',
          ],
        },
        {
          name: 'Tapcat',
          uri: 'https://play.google.com/store/apps/details?id=com.wildcardstudios.tapcat',
          background: tapcatBackground,
          backgroundBlur: tapcatBackgroundBlurred,
          description: [
            'Simple infinite runner for iOS and Android.',
            'High score system with social sharing capability via Facebook and high score tracking via Google Play Services.',
          ],
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
  li {
    display: flex;

    justify-content: center;
    margin: 20px;
  }
}

a {
  display: inline-block;
  width: 200px;
  height: 150px;
  flex: 0 0 auto;
  position: relative;

  border-radius: 10px;
  overflow: hidden;
  margin-left: 50px;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0;
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

.description {
  flex: 1 1 auto;
  max-width: 600px;

  p {
    margin: 10px 30px;
    text-align: left;
    line-height: 20px;

    &:first-child {
      font-size: 20px;
      line-height: 25px;
      font-weight: 500;
    }
  }
}

</style>
