<template>
	<div class="journalism">
		<!--头部-->
		<div class="top">
			<div class="con">
				首页 ＞ 楼市动态
				<input type="text" placeholder="搜索新闻" />
			</div>
		</div>
		
		<div class="content">
			<div class="content-left">
			<div class="h5"><span></span>楼市动态/ NEW APARTMENT</div>
			<!--组件-->
			<Xinwen></Xinwen>
			<button>点击加载更多 ↓ </button>
		</div>
		
		<div class="content-right"></div>
		
		</div>
	</div>
</template>

<script>
import Xinwen from '@/components/Xinwen.vue'

export default {
  name: 'home',
  components: {
  	Xinwen
  }
}	
	
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	.top {
		width: 100%;
		height: 80px;
		background-color: #F4F4F4;
		line-height: 80px;
		font-size: 14px;
		color: #333333;
		overflow: hidden;
	}
	
	.con {
		width: 95%;
		margin: 0 auto;
	}
	.con input{
		float: right;
		width: 300px;
		height: 40px;
		margin-top: 20px;
	}
	.content{
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		margin-top: 50px;
		padding-bottom: 100px;
	}
	.content-left{
		width: 45%;
		float: left;
	}
	.h5{
		float: left;
		width: 100%;
		height: 50px;
		overflow: hidden;
	}
	.h5 span{
		width: 15px;
		height: 15px;
		background-color: #000;
		margin-right: 10px;
		display: inline-block;
	}
	.zys-tit{
		width: 100%;
		overflow: hidden;
		padding-bottom: 30px;		
	}
	.zys-tit img{
		float: left;
		width: 100px;
		height: 100px;
	}
	.zys-tit-left{
		width: 75%;
		float: left;
		margin-left: 20px;
		font-size: 12px;
	}
	.zys-tit p{
		font-size: 16px;
		font-weight: 600;
		color: #000;
	}
	.zys-tit a{
		line-height: 30px;
		color: #3a79e8;
	}
	.zys-tit span{
		font-size: 13px;
		color: #999999;
		line-height: 20px;
		display: inline-block;
	}
	.content-left button{
		float: left;
		border: none;
		padding: 5px;
		background-color: #fff;
		margin: 50px 50px 50px 200px;
		color: #999999;
	}
	.content-right{
		width: 53%;
		height: 800px;
		float: right;
		background: url(../assets/2.jpg);
		background-repeat: no-repeat;
		background-position:100px left; 
		background-size: cover;
	}
</style>