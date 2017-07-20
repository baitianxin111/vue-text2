<template>
   <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
     <ul class="nav nav-tabs nav-justified">
     <li><router-link to="/">首页</router-link></li>
       <li><router-link to="shop">商店</router-link></li>
     <li><router-link to="maganize">杂志</router-link></li>
     <li><router-link to="share">分享</router-link></li>
     <li><router-link to="man">达人</router-link></li>



</ul>





  </div><!-- /.container-fluid -->
</nav>
</template>


<script>

export default {
  name: 'Navbar',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style>
.container-fluid ul li a {
  color:black;
}
</style>
