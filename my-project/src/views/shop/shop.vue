<template>
  <div >
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  created (){
        this.getGoods()
  },
  methods: {
      getGoods (){

          this.$http.get('http://lc.shudong.wang/api_goods.php?goods_id='+this.$route.params.id)
            .then((res) =>{
              console.log(res.data);
              this.msg = res.data.data;
            })
            .catch((error) =>{
              console.log(error)
            })
        
      }
  }
}
</script>
<style></style>
