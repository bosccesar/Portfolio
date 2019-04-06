<template>
  <div id="app">
    <Header/>
    <NavBarLeft/>
    <NavBarRight/>
    <Body/>
  </div>
</template>

<script>
import NavBarLeft from './components/NavBarLeft'
import NavBarRight from './components/NavBarRight'
import Header from './components/Header'
import Body from './components/Body'

export default {
  name: 'App',
  components: {
    Header,
    NavBarLeft,
    NavBarRight,
    Body
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
  background-color: #87CEEB;
}
</style>
