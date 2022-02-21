<template>
  <div id="app">
    <h1>To Do list</h1>
    <div v-for="tarea in tareas" :key="tarea.id">{{tarea.titulo}}</div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  }, */
  data:{//data(){return }
    tareas:[
      {
        id:1,
        titulo:'Hello'
      },
      {
        id:2,
        titulo:'There'
      }
    ];
  },
  computed:{

  },
  methods:{

  }
}
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
