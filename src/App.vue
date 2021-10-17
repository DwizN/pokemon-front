<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view class="app-content" ></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html {
  height: 100%;
  margin:0px;
  background: url("assets/background.png") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}

body {
  background-color: transparent!important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  border-radius: 8px;
  margin-top: 10px;
  background-color: #fff;
}
</style>
