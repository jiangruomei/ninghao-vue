<template>
  <h3>{{ name }}</h3>
  <input type="text" :value="content" @input="content = $event.target.value" />
  <span>➡️ Content: {{ content }}</span>
</template>

<script>
export default {
  data() {
    return {
      name: 'MEIMEI',
      content: '天生好命',
    };
  },
};
</script>
<style>
@import './styles/app.css';
</style>
