<template>
  <h3>{{ name }}</h3>
  <textarea v-model="content" placeholder="写点什么"></textarea>
  <span>➡️ Content: {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: 'MEIMEI',
      content: '',
    };
  },
};
</script>
<style>
@import './styles/app.css';
</style>
