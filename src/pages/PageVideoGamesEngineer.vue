<template>
  <div id="videoGamesEngineer">
    <HeaderPages/>
  </div>
</template>

<script>
import HeaderPages from '../components/HeaderPages'

export default {
  name: 'videoGamesEngineer',
  components: {
    HeaderPages
  }
}
</script>

<style>
body {
  height: 100vh;
  margin: 0%;
  padding: 0%;
  width: 100%;
}
#videoGamesEngineer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #87CEEB;
}
</style>
