<template>
	<div class="about">
		<div class="top">
			<div class="con">
				<Top></Top>
			</div>
		</div>

		<div class="main">
			<!--	内容左-数据列表-->
			<div class="h5"><span></span>全新楼盘/ NEW APARTMENT</div>
			<div class="main-left">
				<!--	组件-->
				                 
				<div class="text">
					<!--<Home a="2"></Home>
					<Home a="3"></Home>
					<Home a="1"></Home>-->
					<Home></Home>
				</div>
			</div>

			<div class="main-r">
				<div class="main-right">

					<!--组件-->
					<Title></Title>

				</div>
				</div>

			</div>
		</div>
</template>

<script>
	import Home from '@/components/Home.vue'
	import Title from '@/components/Title.vue'
	import Top from '@/components/Top.vue'

	export default {
		name: 'home',
		components: {
			Home,
			Title,
			Top
		},
		data() {
			return {
				state: []
			}
		},
		created() {
			this.$http.post('http://localhost:3000', { fenlei: this.$route.params.fenlei }, { emulateJSON: true }).then(e => this.state = e.body)
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
	
	.main {
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		padding-bottom: 30px;
	}
	
	.h5 {
		width: 100%;
		height: 120px;
		line-height: 120px;
		overflow: hidden;
	}
	
	.h5 span {
		width: 15px;
		height: 15px;
		background-color: #000;
		margin-right: 10px;
		display: inline-block;
	}
	
	.main-left {
		width: 75%;
		float: left;
		margin-top: 10px;
		overflow: hidden;
	}
	
	.new-con {
		width: 32%;
		float: left;
		overflow: hidden;
		margin-right: 1%;
		border: none;
	}
	
	.text img {
		width: 100%;
		height: 170px;
	}
	
	.text p {
		width: 100%;
		height: 30px;
		text-align: left;
		padding-left: 20px;
		line-height: 30px;
		float: left;
		color: #000000;
		font-weight: bold;
		font-size: 14px;
	}
	
	.text span {
		width: 100%;
		float: left;
		padding-left: 20px;
		font-size: 14px;
	}
	
	a {
		color: #000;
	}
	
	.main-r {
		width: 23%;
		float: right;
	}
	
	.main-right {
		width: 100%;
		float: left;
		background-color: #F7F7F7;
		overflow: hidden;
		margin-top: 10px;
	}
	
	.main-right p {
		width: 90%;
		height: 50px;
		margin-left: 20px;
		font-weight: bold;
		font-size: 14px;
		line-height: 30px;
		text-indent: 10px;
	}
	
	.main-right p span {
		width: 15px;
		height: 15px;
		background-color: #000;
		float: left;
		margin-top: 5px;
	}
	
	.main-right p button {
		display: none;
	}
	
	.tit {
		height: 80px;
		margin-left: 20px;
		font-size: 14px;
		line-height: 25px;
	}
</style>