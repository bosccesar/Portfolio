<template>
  <div id="app">
    <HelloWorld/>
    <HeaderWelcome/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HeaderWelcome from './components/HeaderWelcome'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderWelcome
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
