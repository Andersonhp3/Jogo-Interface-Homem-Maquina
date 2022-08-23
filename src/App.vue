<template>
  <TelaInicialJogo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TelaInicialJogo from './components/TelaInicialJogo.vue';

export default defineComponent({
  name: 'App',
  components: {
    TelaInicialJogo
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
