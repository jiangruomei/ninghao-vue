<template>
  <h3>{{ name }}</h3>
  <AppButton @tap="onTapAppButton" @init="onInitAppButton">提交</AppButton>
  <!-- <AppButton /> -->
  <!-- <app-button></app-button>
  <AppDemoButton></AppDemoButton> -->
</template>

<script>
import AppButton from './components/app-button.vue';
// import AppDemoButton from './components/app-demo-button.vue';
export default {
  data() {
    return {
      name: 'MEIMEI',
    };
  },
  components: {
    AppButton,
    // AppDemoButton,
  },
  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },
    onInitAppButton() {
      console.log('on init app button');
    },
  },
};
</script>
<style>
@import './styles/app.css';
</style>
