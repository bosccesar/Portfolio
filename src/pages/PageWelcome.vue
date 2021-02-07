<template>
  <div id="welcome">
    <div id="presentation">
      <HeaderPages/>
      <BodyWelcome/>
      <CardSoftware/>
      <CardVideoGame/>
    </div>
  </div>
</template>

<script>
import CardSoftware from '../components/CardSoftware'
import CardVideoGame from '../components/CardVideoGame'
import HeaderPages from '../components/HeaderPages'
import BodyWelcome from '../components/BodyWelcome'

export default {
  name: 'welcome',
  components: {
    HeaderPages,
    CardSoftware,
    CardVideoGame,
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
  height: 100%;
  background-color: #F5F5F5;
  padding: 0.5%
}
#presentation {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #404040;
  height: 100%;
  background-color: #E4EFFF;
  border:1px solid #9FC6FF;
  -moz-border-radius:7px;
  -webkit-border-radius:7px;
  border-radius:20px;
  box-shadow: 0px 0px 10px 5px #A9A9A9;
}
</style>
