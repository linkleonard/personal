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
import Projects from '@/components/Projects';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import About from '@/components/About';
import Skills from '@/components/Skills';

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
