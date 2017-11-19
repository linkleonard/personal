<template>
  <section>
    <h2>About</h2>
    <div>{{ roles }}</div>
    <p>As a full stack developer, I believe that high quality code is correct, maintainable, and performant. I am well versed in the entire software development pipeline, with experience in rapid prototyping, agile development, and setting up automated production deployments.</p>
    <p>I am also a classically trained pianist, and self-taught fledging guitarist.</p>
    <p>With my background as a PC gamer, I also have an interest in the game development and related fields. I occasionally immerse myself with Unity3D and experiment with small toy projects.</p>
    <ul>
      <li v-for="item in social">
        <a class="social" :href="item.uri">
          <icon :name="item.iconName" />
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>

    <a class="button" href="https://leonaard.me/static/upload/resume.pdf">View my Resume</a>
  </section>
</template>

<script>

import Icon from 'vue-awesome/components/Icon';

import 'vue-awesome/icons/github-alt';
import 'vue-awesome/icons/linkedin';

export default {
  name: 'About',
  data() {
    return {
      roles: ['Developer', 'Musician', 'Gamer'].join(', '),
      social: [
        { name: 'GitHub', iconName: 'github-alt', uri: 'https://github.com/linkleonard' },
        { name: 'LinkedIn', iconName: 'linkedin', uri: 'https://www.linkedin.com/in/leonard-law-502a9626/' },
      ],
    };
  },
  components: {

    Icon,
  },
};
</script>

<style lang="scss" scoped>

ul {
  margin: 40px;
}

a.social {
  display: inline-block;
  padding: 10px;
  border: 1px solid #42b983;
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
    background: #42b983;
    color: #ffffff;
  }
}

a.button {
  display: inline-block;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;

  background: #42b983;
  color: #ffffff;
  text-decoration: none;
}

p {
  max-width: 600px;
  margin: 20px auto;
  line-height: 20px;
}

section {
  color: #ffffff;
  text-shadow: 0 0 2px #000000;
  background:
    // Apply gradient to improve text visibility.
    // Have this be done on the client, as the height of this section will
    // change between devices, thus the gradient may not be properly placed.
    radial-gradient(ellipse 30% 70%, rgba(0, 0, 0, 0.25) 50%, transparent 100%),
    url('../assets/about-background.jpg') center/cover;
}

</style>
