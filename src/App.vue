<template>
  <div id="app">
    <div id="nav"> 
    	<img class="img" src="./assets/logo.png"> 
    	<div class="nav-con">
      <router-link to="/">首页</router-link> 
      <router-link to="/about/1">全新楼盘</router-link>
      <router-link to="/about/2">二手楼盘</router-link>
      <router-link to="/about/3">全新商铺</router-link>
      <router-link to="/journalism">楼市动态</router-link>
      <router-link to="/lianxi">联系我们</router-link>
     </div>
     <div class="nav-right">
     	<span><img src="./assets/dianhua.png" alt="" /></span>	008-6666 6666 <button>资讯电话</button> 
     </div>
      
    </div>
    <router-view/>
    <div class="footer">
    	地产REALSTATE  © 2020 All Rights Reserved.
    	<a href="#"><span>^</span></a>
    </div>
  </div>
</template>

<style>
	*{
		margin: 0;
		padding: 0;
	}
#app {
	width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
	width: 95%;
	height: 80px;
  margin: 0 auto;
  overflow: hidden;
}
.nav-con{
	float: left;
	margin-left: 15%;
}
#nav a {
  font-weight: bold;
  color: #000;
  margin-right: 30px;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  font-weight: 100;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom: 1px solid #000;
}
.img{
	float: left;
	width: 150px;
	height: 50px;
}
.nav-right{
	float: right;
	line-height: 60px;
}
.nav-right button{
	width: 100px;
	height: 30px;
	border-radius: 5px;
	border: none;
	background-color: #366DDB;
	color: #FFFFFF;
}
.nav-right img{
	 width: 20px;
}
.footer{
	width: 100%;
	height: 80px;
	background-color: #262626;
	text-align:center;
	line-height: 80px;
	color: #8d9095;
	font-size: 14px;
}
.footer span{
	color: #fff;
	float: right;
	font-size: 25px;
	margin-right: 50px;
}
</style>
