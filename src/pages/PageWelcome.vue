<template>
  <div id="welcome">
    <HeaderPages/>
    <NavBarLeft/>
    <NavBarRight/>
    <BodyWelcome/>
  </div>
</template>

<script>
import NavBarLeft from '../components/NavBarLeft'
import NavBarRight from '../components/NavBarRight'
import HeaderPages from '../components/HeaderPages'
import BodyWelcome from '../components/BodyWelcome'

export default {
  name: 'welcome',
  components: {
    HeaderPages,
    NavBarLeft,
    NavBarRight,
    BodyWelcome
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
#welcome {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: #87CEEB;
}
</style>
