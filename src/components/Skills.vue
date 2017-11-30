<template>
  <section class="projects">
    <h2>Skills</h2>

    <div class="filters">
      <span>Filters</span>
      <div>
        <button
          v-for="tag in allTags"
          :class="classNames({
            checked: selectedTags[tag],
          })"
          @click="event => {
            selectedTags[tag] = !selectedTags[tag];
          }"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <ul>
      <li
        v-for="item in itemsToDisplay"
        :class="classNames({
          active: shouldShowItem(item),
        })"
      >
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
import classNames from 'classnames';
import { pickBy, keys, intersection } from 'lodash';

const TAG_TOOLS = 'tools';
const TAG_LANGUAGE = 'language';
const TAG_PLATFORM = 'platform';
const TAG_MISC = 'misc';
const TAG_FRAMEWORK = 'framework';
const TAG_TECHNOLOGY = 'technology';

export default {
  name: 'Skills',
  methods: {
    classNames,
    shouldShowItem(item) {
      // Convert the selectedTags object into an array, so we can use it to
      // perform set intersection via lodash.intersection().
      const selectedTagsArray = keys(pickBy(this.selectedTags, checked => checked));
      return (
        selectedTagsArray.length === 0 ||
        intersection(item.tags, selectedTagsArray).length > 0
      );
    },
  },
  data() {
    return {
      selectedTags: {
        [TAG_TOOLS]: false,
        [TAG_LANGUAGE]: false,
        [TAG_PLATFORM]: false,
        [TAG_MISC]: false,
        [TAG_FRAMEWORK]: false,
        [TAG_TECHNOLOGY]: false,
      },
      allTags: [
        TAG_TOOLS,
        TAG_LANGUAGE,
        TAG_PLATFORM,
        TAG_MISC,
        TAG_FRAMEWORK,
        TAG_TECHNOLOGY,
      ],
      items: [
        { name: 'Apache', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'AWS', value: 0.5, tags: [TAG_PLATFORM] },
        { name: 'Bash', value: 0.75, tags: [TAG_LANGUAGE] },
        { name: 'C', value: 0.2, tags: [TAG_LANGUAGE] },
        { name: 'C#', value: 0.75, tags: [TAG_LANGUAGE] },
        { name: 'C++', value: 0.5, tags: [TAG_LANGUAGE] },
        { name: 'Celery', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'CSS', value: 1.0, tags: [TAG_LANGUAGE] },
        { name: 'Database Modeling', value: 1.0, tags: [TAG_MISC] },
        { name: 'Django REST Framework', value: 1.0, tags: [TAG_FRAMEWORK] },
        { name: 'Django', value: 1.0, tags: [TAG_FRAMEWORK] },
        { name: 'Docker', value: 0.5, tags: [TAG_PLATFORM] },
        { name: 'Functional Programming', value: 0.75, tags: [TAG_MISC] },
        { name: 'Git', value: 1.0, tags: [TAG_TOOLS] },
        { name: 'Java', value: 0.5, tags: [TAG_LANGUAGE] },
        { name: 'Javascript', value: 1.0, tags: [TAG_LANGUAGE] },
        { name: 'Lodash', value: 1.0, tags: [TAG_FRAMEWORK] },
        { name: 'Mailgun', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'MySQL', value: 1.0, tags: [TAG_TECHNOLOGY] },
        { name: 'Nginx', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'PostgreSQL', value: 1.0, tags: [TAG_TECHNOLOGY] },
        { name: 'Python', value: 1.0, tags: [TAG_LANGUAGE] },
        { name: 'React', value: 0.75, tags: [TAG_FRAMEWORK] },
        { name: 'Redux', value: 0.75, tags: [TAG_FRAMEWORK] },
        { name: 'RESTful API Design', value: 1.0, tags: [TAG_MISC] },
        { name: 'SCSS', value: 1.0, tags: [TAG_LANGUAGE] },
        { name: 'Sentry', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'Square', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'SteamVR', value: 0.5, tags: [TAG_FRAMEWORK] },
        { name: 'Stripe', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'Supervisor', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'SVN', value: 0.75, tags: [TAG_TOOLS] },
        { name: 'Test Driven Development', value: 1.0, tags: [TAG_MISC] },
        { name: 'Twilio', value: 0.5, tags: [TAG_PLATFORM] },
        { name: 'Underscore', value: 1.0, tags: [TAG_FRAMEWORK] },
        { name: 'Unit Testing', value: 0.9, tags: [TAG_MISC] },
        { name: 'Unity3D', value: 0.75, tags: [TAG_FRAMEWORK] },
        { name: 'Unix Tools', value: 0.75, tags: [TAG_TOOLS] },
        { name: 'Websockets', value: 0.5, tags: [TAG_TECHNOLOGY] },
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

$button-color: #42b983;
$border-radius: 5px;

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.filters {
  margin-bottom: 30px;

  span {
    margin-right: 10px;
    font-size: 18px;
  }

  div {
    display: inline;
  }
}

button {
  padding: 10px;
  border: 1px solid $button-color;
  background: transparent;

  transition: all 200ms linear;
  outline: none;
  color: $button-color;
  text-transform: capitalize;

  &.checked, &:hover {
    color: white;
    background: $button-color;
  }

  &:first-child {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  + button {
    border-left: none;
  }

  &:last-child {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}

li {
  flex: 0 0 100%;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33%;
  }

  @media(min-width:1200px) {
    flex: 0 0 25%;
  }

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  opacity: 0.2;

  transition: opacity 200ms linear;

  &.active {
    opacity: 1.0;
  }

  // We need a wrapper as mixing percentage-based widths and margins/paddings
  // will cause overflows
  > .wrapper {
    flex: 0 0 100%;

    @media (min-width: 768px) {
      flex: 0 0 50%;
    }

    > div {
      margin: 10px;
    }
  }

  > :first-child {
    text-align: center;
  }
}

</style>
