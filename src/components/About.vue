<template>
  <section>
    <h2>About</h2>
    <div>{{ roles }}</div>
    <p>
      I believe that high quality code is correct, maintainable, and performant.
      I am well versed in the entire software development pipeline, with experience in
      rapid prototyping, agile development, and setting up automated production deployments.
    </p>
    <p>I am also a classically trained pianist, and self-taught fledging guitarist.</p>
    <p>
      I also have an interest in the game development and related fields.
      I occasionally immerse myself with Unity3D and experiment with small toy projects.
    </p>
    <ul>
      <li v-for="item in social" :key="item.name">
        <a class="social" :href="item.uri">
          <icon :name="item.iconName" />
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons/brands/github-alt';
import 'vue-awesome/icons/brands/linkedin';

export default {
  name: 'About',
  data() {
    return {
      roles: ['Full Stack Engineer', 'Musician', 'Gamer'].join(', '),
      social: [
        { name: 'GitHub', iconName: 'brands/github-alt', uri: 'https://github.com/linkleonard' },
        { name: 'LinkedIn', iconName: 'brands/linkedin', uri: 'https://www.linkedin.com/in/leonard-law-502a9626/' },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "../theme.scss";

ul {
  margin: 40px;
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 10px;
}

a.social {
  display: inline-block;
  padding: 10px;
  color: $button-default-color;
  background: $button-default-background;
  border: 1px solid $button-default-border;
  border-radius: 5px;
  text-decoration: none;

  display: inline-flex;
  align-items: center;

  transition: all 100ms linear;

  > * {
    flex: 0 0 auto;

    &:first-child {
      margin-right: 5px;
    }
  }

  &:hover {
    background: $button-default-focus-background;
    color: $button-default-focus-color;
    border-color: $button-default-focus-border;
  }
}

h2,
p {
  text-shadow: 0 0 2px #000000;
}

a.button {
  display: inline-block;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid $button-primary-border;

  background: $button-primary-background;
  color: $button-primary-color;
  text-decoration: none;

  transition: all 100ms linear;

  &:hover {
    color: $button-primary-focus-color;
    background: $button-primary-focus-background;
    border-color: $button-primary-focus-border;
  }
}

p {
  max-width: 600px;
  margin: 20px auto;
  line-height: 20px;
}

section {
  color: $main-body-text-color;
  // Apply gradient to improve text visibility.
  // Have this be done on the client, as the height of this section will
  // change between devices, thus the gradient may not be properly placed.
  background: radial-gradient(
      ellipse 30% 70%,
      rgba(0, 0, 0, 0.25) 50%,
      transparent 100%
    ),
    url("../assets/about-background.jpg") center/cover;
}
</style>
