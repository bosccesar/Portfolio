<template>
  <div>
    <b-card
      no-body
      style="max-width: 20rem;"
      img-top
    >
      <a slot="header">
        <img src="../assets/Icon_dev.png">
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

<script>
export default {
  name: 'cardSoftware',
  data () {
    return {
      msg: 'Software Engineer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  float: left;
  margin-left: 0.2%; 
}
</style>
