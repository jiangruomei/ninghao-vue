<template>
  <h3>{{ name }}</h3>
  <input type="text" @keyup.enter="onKeyupInput" />
</template>

<script>
export default {
  data() {
    return {
      name: 'MEIMEI',
    };
  },
  methods: {
    onKeyupInput(event) {
      console.log('回车！');
    },
  },
};
</script>
<style>
@import './styles/app.css';
</style>
