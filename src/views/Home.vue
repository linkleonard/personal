<template>
  <div>
    <site-header />
    <about />
    <skills />
    <projects />
    <site-footer />
  </div>
</template>

<script>
import Projects from '@/components/Projects.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';

export default {
  name: 'Home',
  components: {
    Projects,
    About,
    Skills,
    SiteHeader,
    SiteFooter,
  },
};
</script>
