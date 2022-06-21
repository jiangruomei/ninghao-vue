<template>
  <h3>{{ name }}</h3>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      name: 'MEIMEI',
    };
  },
};
</script>
<style>
@import './styles/app.css';
</style>
