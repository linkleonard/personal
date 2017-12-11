<template>
  <section class="projects">
    <h2>Skills</h2>

    <div class="filters">
      <div class="label">Filters</div>
      <div class="controls">
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

    <ul :class="classNames({expanded})">
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

    <button class="show-more" @click="toggleExpand">
      {{ expanded ? 'Show less' : 'Show more' }}
    </button>
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
const TAG_BACKEND = 'backend';
const TAG_FRONTEND = 'frontend';

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
    toggleExpand() {
      this.expanded = !this.expanded;
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
        [TAG_BACKEND]: false,
        [TAG_FRONTEND]: false,
      },
      allTags: [
        TAG_TOOLS,
        TAG_LANGUAGE,
        TAG_PLATFORM,
        TAG_MISC,
        TAG_FRAMEWORK,
        TAG_TECHNOLOGY,
        TAG_BACKEND,
        TAG_FRONTEND,
      ],
      items: [
        { name: 'Apache', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'AWS', value: 0.5, tags: [TAG_PLATFORM] },
        { name: 'Bash', value: 0.75, tags: [TAG_LANGUAGE, TAG_BACKEND] },
        { name: 'C', value: 0.2, tags: [TAG_LANGUAGE] },
        { name: 'C#', value: 0.75, tags: [TAG_LANGUAGE] },
        { name: 'C++', value: 0.5, tags: [TAG_LANGUAGE] },
        { name: 'Celery', value: 0.75, tags: [TAG_TECHNOLOGY, TAG_BACKEND] },
        { name: 'CSS', value: 1.0, tags: [TAG_LANGUAGE, TAG_FRONTEND] },
        { name: 'Database Modeling', value: 1.0, tags: [TAG_MISC, TAG_BACKEND] },
        { name: 'Django REST Framework', value: 1.0, tags: [TAG_FRAMEWORK, TAG_BACKEND] },
        { name: 'Django', value: 1.0, tags: [TAG_FRAMEWORK, TAG_BACKEND] },
        { name: 'Docker', value: 0.5, tags: [TAG_PLATFORM] },
        { name: 'Functional Programming', value: 0.75, tags: [TAG_MISC] },
        { name: 'Git', value: 1.0, tags: [TAG_TOOLS] },
        { name: 'Java', value: 0.5, tags: [TAG_LANGUAGE] },
        { name: 'Javascript', value: 1.0, tags: [TAG_LANGUAGE, TAG_FRONTEND] },
        { name: 'Lodash', value: 1.0, tags: [TAG_FRAMEWORK, TAG_FRONTEND] },
        { name: 'Mailgun', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'MySQL', value: 1.0, tags: [TAG_TECHNOLOGY, TAG_BACKEND] },
        { name: 'Nginx', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'PostgreSQL', value: 1.0, tags: [TAG_TECHNOLOGY, TAG_BACKEND] },
        { name: 'Python', value: 1.0, tags: [TAG_LANGUAGE, TAG_BACKEND] },
        { name: 'React', value: 0.75, tags: [TAG_FRAMEWORK, TAG_FRONTEND] },
        { name: 'Redux', value: 0.75, tags: [TAG_FRAMEWORK, TAG_FRONTEND] },
        { name: 'RESTful API Design', value: 1.0, tags: [TAG_MISC, TAG_BACKEND] },
        { name: 'SCSS', value: 1.0, tags: [TAG_LANGUAGE, TAG_FRONTEND] },
        { name: 'Sentry', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'Square', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'SteamVR', value: 0.5, tags: [TAG_FRAMEWORK] },
        { name: 'Stripe', value: 0.75, tags: [TAG_PLATFORM] },
        { name: 'Supervisor', value: 0.75, tags: [TAG_TECHNOLOGY] },
        { name: 'SVN', value: 0.75, tags: [TAG_TOOLS] },
        { name: 'Test Driven Development', value: 1.0, tags: [TAG_MISC] },
        { name: 'Twilio', value: 0.5, tags: [TAG_PLATFORM] },
        { name: 'Underscore', value: 1.0, tags: [TAG_FRAMEWORK, TAG_FRONTEND] },
        { name: 'Unit Testing', value: 0.9, tags: [TAG_MISC] },
        { name: 'Unity3D', value: 0.75, tags: [TAG_FRAMEWORK] },
        { name: 'Unix Tools', value: 0.75, tags: [TAG_TOOLS] },
        { name: 'Websockets', value: 0.5, tags: [TAG_TECHNOLOGY] },
      ],
      expanded: false,
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
@import "../theme.scss";


$button-color: #42b983;
$button-checked-color: #13774a;
$border-radius: 5px;

section {
  position: relative;
}

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  &:not(.expanded) {
    max-height: $expand-collapsed-height;
    overflow-y: hidden;

    &:after {
      position: absolute;
      width: 100%;
      height: $expand-fade-height;

      bottom: 0;
      left: 0;
      right: 0;

      content: ' ';

      background: linear-gradient(
        to top,
        $color-off-white 0%,
        $color-off-white $expand-fade-cutoff,
        transparent 100%
      );
    }
  }
}

.filters {
  margin-bottom: 30px;

  .label {
    margin: 10px;
    font-size: 18px;
  }

  .controls {
    display: inline;
  }
}

.show-more {
  position: relative;
  z-index: 1;
}

button {
  padding: 10px;
  border: 1px solid $button-color;
  background: transparent;

  transition: all 200ms linear;
  outline: none;
  color: $button-color;
  text-transform: capitalize;
  border-radius: $border-radius;
  margin: 5px;

  &:hover {
    color: white;
    background: $button-color;
  }

  &.checked {
    color: white;
    background: $button-checked-color;
    border-color: $button-checked-color;
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
