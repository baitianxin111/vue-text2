<template>
  <div>
      <!--<router-link to="/shop">to shap</router-link>-->
  <myheader></myheader>
  <mynav></mynav>
  <myfooter></myfooter>
     
    <router-view class="text-center"></router-view>
  </div>
</template>

<script>

import MyHeader from '@/components/MyHeader'
import Navbar from  '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components:{
    myheader:MyHeader,
    mynav:Navbar,
    myfooter:Footer
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
  margin-top: 60px;
}
</style>
