<template>
  <div id="app">
    <graphiql
      :fetcher="fetcher"
    ></graphiql>
  </div>
</template>

<script>
import Graphiql from 'graphiql'

export default {
  name: 'app',
  components: {
    Graphiql
  },
  methods: {
    fetcher (query) {
      console.log('query', query)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
