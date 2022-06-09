<template>
  <h3>{{ name }}</h3>
  <AppButton text="确定"></AppButton>
  <AppButton />
  <app-button></app-button>
  <AppDemoButton></AppDemoButton>
</template>

<script>
import AppButton from './components/app-button.vue';
import AppDemoButton from './components/app-demo-button.vue';
export default {
  data() {
    return {
      name: 'MEIMEI',
    };
  },
  components: {
    AppButton,
    AppDemoButton,
  },
};
</script>
<style>
@import './styles/app.css';
</style>
