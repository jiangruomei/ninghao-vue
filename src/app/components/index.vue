<template>
  <div @click="onClickText">您好，欢迎访问宁皓网!</div>
</template>
<script>
export default {
  methods: {
    onClickText() {
      // this.$router.push('/about');
      // this.$router.replace('/about');
      this.$router.push({ name: 'about' });
    },
  },
};
</script>
