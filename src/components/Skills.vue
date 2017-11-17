<template>
  <section class="projects">
    <h2>Skills</h2>

    <ul>
      <li v-for="item in itemsToDisplay">
        <span className="label">{{ item.name }}</span>
        <span><bar :fill="item.value" /></span>
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
        { name: 'Python', value: 1.0 },
        { name: 'Javascript', value: 1.0 },
        { name: 'Django', value: 1.0 },
        { name: 'Unit Testing', value: 0.9 },
        { name: 'React', value: 0.75 },
        { name: 'Redux', value: 0.75 },
        { name: 'C#', value: 0.75 },
        { name: 'C++', value: 0.5 },
        { name: 'C', value: 0.2 },
        { name: 'Unity', value: 0.5 },
        { name: 'Functional Programming', value: 0.75 },
        { name: 'Unix Tools', value: 0.75 },
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
  justify-content: center;
}

li {
  flex: 0 0 400px;
  display: flex;
  justify-content: flex-start;
  padding: 10px;

  > :first-child {
    flex: 0 0 50%;

    text-align: center;
    padding: 0 5px;
  }

  > :last-child {
    flex: 0 0 33%;
  }
}

</style>
