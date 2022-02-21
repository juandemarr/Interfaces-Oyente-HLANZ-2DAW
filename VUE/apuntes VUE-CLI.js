/*
--- Instalar: npm install -g @vue/cli
mejor este: npm install -g vue-generate-component  ???
--- crear proyecto: vue create lista-notas
seleccionamos default (vue 2 babel, eslint)
--- arrancar servidor: npm run serve
--- crear componente, dentro de la carpeta components: vgc -s Footer

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

---tenemos el archivo main.js con:
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

---Luego el archivo App.vue a la misma altura con: 
<template>
  <div id="app">
  </div>
</template>

<script>
    import pie from './components/Pie.vue'
    import listaSuperior from './components/listaSuperior.vue'
    export default {
        name: 'App',
        components: {
            pie,
            listaSuperior
        }
    }
</script>

<style>
</style>

---Luego en la carpeta componentes, pie.vue: lo basico de una plantilla vue

