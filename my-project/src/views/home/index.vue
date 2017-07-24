<template>
<div>
 <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="../../assets/img/1001.jpg" alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img src="../../assets/img/1006.jpg" alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    <div class="item">
      <img src="../../assets/img/1008.jpg" alt="...">
      <div class="carousel-caption">
        ...
      </div>
    </div>
    ...
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

   <div class="mycon">
       <p>人气良品</p>
       <br/>

    <ul>
      <li v-for="item in msg" @click=next(item.goods_id)>
        <img v-bind:src="item.goods_thumb"  alt='item.goods_id'>
        <a href="shop"  ></a>
        <!--<router-link :to="{ name: 'user', params: { userId: item.brand_id }}">User</router-link>-->
        <p>{{item.goods_name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.star_number}}</p>

      </li>

    </ul>

 </div>

<div>
  <button class="more "><router-link to="shop" > more </router-link></button>
</div>

 </div>
</template>


<script>
import $ from 'jquery'
//  import jsonp from 'jsonp'
import Vue from 'vue'
import shop from '@/views/shop/shop'
import MyHeader from '@/components/MyHeader'
import Navbar from  '@/components/Navbar'

//var jsonp = require('jsonp')
export default {
    name: 'index',
    data () {
        return {
            data: {

            },
            msg:'',
            mydata:{
              
            }
        }
    },
  created (){
        this.getGoods(),
        this.getJsonp
  },
    components:{
        myheader:MyHeader,
        mynav:Navbar,
        myshop:shop,
        
    },
  methods: {
      getGoods (){

          this.$http.get('http://lc.shudong.wang/api_goods.php')
            .then((res) =>{

              console.log(res.data);
              this.msg = res.data.data;
            })
            .catch((error) =>{
              console.log(error)
            })

      },
      next (str){
        // 传递路由
        const path = '/shop/' + str;
        this.$router.push({path:path})
        console.log(str)
      },
    getJsonp (){
          jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',null,function (err,data) {
              if (err){
                  console.error(err.message);
              }else {
                  console.log(data);
              }

          })

    }
  }
}

</script>


<style>
.item img{
    margin: 0 auto ;
}
.mycon {
  padding-top:60px;
  background:white;
}
.mycon ul {
  width:1000px;
  list-style:none;
   display: flex;
    margin:0 auto;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

}
.mycon ul li {
   border: 1px solid #a9a9a9;
    margin: 6.5px;
}
 .mycon ul li img {
    cursor: pointer;

   padding:20px;
   border:1px solid red;
   width:300px;
   height:300px;

 }
.mycon ul li {
  display: block;
  background: url("../../assets/img/heart_gray20_18.png") no-repeat 250px 300px;
}
.more{
  color:black;
  width: 120px;
  height: 30px;
  border:1px solid black;
}
  .more:hover{
    color:white;
    background-color: black;
  }
</style>
