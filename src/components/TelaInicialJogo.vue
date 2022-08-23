<template>

<div>
<h3>Babylon Examples</h3>
<canvas></canvas>

</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FaseUm } from '@/Fases/FaseUm';
export default defineComponent({
  name: 'TelaInicialJogo',
  mounted(){
    const canvas = document.querySelector("canvas")!;
    new FaseUm(canvas);
  }
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
width:70%;
height:70%;
}
</style>