<template>
  <section>
    <heading>About</heading>
    <div>{{ roles }}</div>
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
import Heading from '@/components/Heading';
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
    Heading,
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

</style>
