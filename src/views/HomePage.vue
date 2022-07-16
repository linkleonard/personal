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
import Projects from '@/components/ProjectList.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import About from '@/components/AboutSection.vue';
import Skills from '@/components/SkillList.vue';

export default {
  name: 'HomePage',
  components: {
    Projects,
    About,
    Skills,
    SiteHeader,
    SiteFooter,
  },
};
</script>
