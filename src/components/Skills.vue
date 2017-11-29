<template>
  <section class="projects">
    <h2>Skills</h2>

    <ul>
      <li v-for="item in itemsToDisplay">
        <div class="wrapper">
          <div>{{ item.name }}</div>
        </div>
        <div class="wrapper">
          <div><bar :fill="item.value" /></div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Bar from '@/components/Bar';

export default {
  name: 'Skills',
  data() {
    return {
      items: [
        { name: 'Apache', value: 0.75 },
        { name: 'AWS', value: 0.5 },
        { name: 'Bash', value: 0.75 },
        { name: 'C', value: 0.2 },
        { name: 'C#', value: 0.75 },
        { name: 'C++', value: 0.5 },
        { name: 'Celery', value: 0.75 },
        { name: 'CSS', value: 1.0 },
        { name: 'Database Modeling', value: 1.0 },
        { name: 'Django REST Framework', value: 1.0 },
        { name: 'Django', value: 1.0 },
        { name: 'Docker', value: 0.5 },
        { name: 'Functional Programming', value: 0.75 },
        { name: 'Git', value: 1.0 },
        { name: 'Java', value: 0.5 },
        { name: 'Javascript', value: 1.0 },
        { name: 'Lodash', value: 1.0 },
        { name: 'Mailgun', value: 0.75 },
        { name: 'MySQL', value: 1.0 },
        { name: 'Nginx', value: 0.75 },
        { name: 'PostgreSQL', value: 1.0 },
        { name: 'Python', value: 1.0 },
        { name: 'React', value: 0.75 },
        { name: 'Redux', value: 0.75 },
        { name: 'RESTful API Design', value: 1.0 },
        { name: 'SCSS', value: 1.0 },
        { name: 'Sentry', value: 0.75 },
        { name: 'Square', value: 0.75 },
        { name: 'SteamVR', value: 0.5 },
        { name: 'Stripe', value: 0.75 },
        { name: 'Supervisor', value: 0.75 },
        { name: 'SVN', value: 0.75 },
        { name: 'Test Driven Development', value: 1.0 },
        { name: 'Twilio', value: 0.5 },
        { name: 'Underscore', value: 1.0 },
        { name: 'Unit Testing', value: 0.9 },
        { name: 'Unity', value: 0.75 },
        { name: 'Unix Tools', value: 0.75 },
        { name: 'Websockets', value: 0.5 },
      ],
    };
  },
  components: {
    Bar,
  },
  computed: {
    itemsToDisplay() {
      return this.items.sort((left, right) => right.value - left.value);
    },
  },
};
</script>

<style lang="scss" scoped>

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

li {
  flex: 0 0 25%;
  display: flex;
  justify-content: center;
  min-width: 400px;

  // We need a wrapper as mixing percentage-based widths and margins/paddings
  // will cause overflows
  > .wrapper {
    flex: 0 0 50%;

    > div {
      margin: 10px;
    }
  }

  > :first-child {
    text-align: center;
  }
}

</style>
