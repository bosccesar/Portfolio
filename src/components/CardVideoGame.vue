<template>
  <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-top
    >
      <a slot="header">
        <img src="../assets/Icon_game.png">
      </a>
      <b-card-body>
        <b-card-title >
          <a href="#">{{ msg }}
          </a>
        </b-card-title>
      </b-card-body>
    </b-card>
  </div>
</template>

<!-- Faire une animation de translation de haut en bas -->

<script>
export default {
  name: 'cardVideoGame',
  data () {
    return {
      msg: 'Video Game Engineer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  float: right;
  margin-right: 0.2%;
}
</style>
