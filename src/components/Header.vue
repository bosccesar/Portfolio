<template>
    <header>
      <h1>{{ fullname }}</h1>
    </header>
</template>

<script>

module.exports = {
  name: 'HeaderWelcome',
  data: function () {
    return {
      lastname: 'BOSC',
      firstname: 'CESAR'
    }
  },
  computed: {
    fullname: function () {
      return this.lastname + ' ' + this.firstname
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
