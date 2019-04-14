<template>
    <header>
      <a v-if="['welcome'].indexOf($route.name) > -1">
        <img src="../assets/LogoWelcome.png">
      </a>
      <a v-else-if="['softwareEngineer'].indexOf($route.name) > -1">
        <img src="../assets/LogoSoftwareEngineer.png">
      </a>
      <a v-else-if="['videoGamesEngineer'].indexOf($route.name) > -1">
        <img src="../assets/LogoVideoGames.png">
      </a>
      <a v-else-if="['otherExperiences'].indexOf($route.name) > -1">
        <img src="../assets/LogoSport.png">
      </a>
    </header>
</template>

<script>
export default {
  name: 'headerPages'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 10%;
  height: 10%;
}
</style>
