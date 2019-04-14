<template>
  <nav class="navbar-dark bg-dark">
    <div class="general">
      <div class="blocImg">
        <a>
          <img src="../assets/Icon_game.png">
        </a>
      </div>
      <div class="bloc1">
        <ul>
          <li>
            <a class="navbar-item" href="#">
              {{ msg }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navBarBeside',
  data () {
    return {
      msg: 'Développement de jeux vidéo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.general {
  position: fixed;
  width: 5%;
  background-color: rgb(0, 0, 0);
  top: 0%;
  height: 100%;
  margin-left: 95%;
  font-family: "NHaasGroteskDSW02-65Md",sans-serif;
}
.blocImg {
  transform-origin: top left;
  position: absolute;
  top: 2%;
  right: 5%;
}
.bloc1 {
  transform: rotate(90deg);
  transform-origin: top left;
  position: absolute;
  bottom: 70.5%;
  left: 75%;
  width: 500%;
  font-size: 1.275rem;
  font-weight: bold;
}
.navbar-item {
  color: #d7e2dd;
}
/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>
