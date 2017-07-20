<template>
    <div class="wrap">
        <div class="con">
           <div class="header-left">
             <!--<img src="../assets/img/favicon.png" alt="">-->
                <div class="logo"><a href="">粮仓</a></div>

            </div>
             <div class="header-right">
                 <ul>
                    <li><a href="">登录</a></li>
                    <li><a href="">注册</a></li>
                    <li><a href="">购物车</a></li>
                    <li><a href="">消息</a></li>
                    <li><a href="">添加良品</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>

export default {
  name: 'MyHeader'
}
</script>


<style>
.wrap{
    width:100%;
    background-color:#25292E;
}
.logo{
background: url("../assets/img/favicon.png") no-repeat 0px 5px ;
}
.logo a {
  display: block;
  color: white;
  padding-left: 40px;
  padding-top: 10px;

}
.con{
    width:1000px;
    margin: 0 auto ;
    height:40px;
    background-color:#25292E;
    color:white;
    display:flex;
    flex-direction: row;
    align-items: center;




}
.header-left{
  height: 53px;
    flex:4;

}
.header-right{
  height: 53px;
    flex:6;


}
.header-right ul{
  list-style:none;
  display:flex;
  flex-direction: row;
  align-items: center;
  align-content:space-between;


}
.header-right ul li{
  padding-top: 10px;
  width: 75px;
  height: 53px;


}
.header-right ul li a{
  height: 53px;

  color: white;


}
</style>
