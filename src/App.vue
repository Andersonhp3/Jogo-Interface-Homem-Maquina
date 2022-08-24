<template>
  <nav class="navbar navbar-expand-lg navbar-default">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Desafios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Créditos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Ajuda</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
/* navbar */
.navbar-default {
    background-color: #AD0AF5;
    border-color: #E7E7E7;
}

.nav-link {
  color: white !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
