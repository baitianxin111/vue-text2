<template>
<div>
  <myheader></myheader>
  这是主页

</div>
</template>
  

<script>
import Vue from 'vue'
import MyHeader from '@/components/MyHeader'


export default {
    name: 'index',
    components:{ 
        myheader:MyHeader      
    }
} 

</script>


<style>
</style>