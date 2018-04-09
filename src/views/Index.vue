<template>
	<div class="home">
		<div class="Carousel">
			<!--轮播-->
			<img src="../assets/1.jpg" alt="" />
		</div>

		<div class="main">
			<!--内容左-数据列表..-->
			<div class="main-left">
				<!--组件-->
				<Img></Img>
			<div class="new">				
				<Box a="1"></Box>
				<Box a="2"></Box>
				<Box a="3"></Box>
				
			</div>
			</div>

			<!--内容右-列表-->
			<div class="main-r">
				<div class="main-right">

					<!--组件-->
					<Title></Title>

				</div>
				<div class="main-right">
					<p><span></span> 联系我们 - CONTACT</p>
					<div class="dian">
						Tom <img src="../assets/ren.png" alt="" /> <br />
						<a href="#">188 0000 0000 / 008-6666 6666</a>
					</div>
					<div class="dian">
						Smith <img src="../assets/ren.png" alt="" /> <br />
						<a href="#">188 0000 0000 / 008-6666 6666</a>
					</div>
					<div class="dian">
						Andy <img src="../assets/ren.png" alt="" /> <br />
						<a href="#">188 0000 0000 / 008-6666 6666</a>
					</div>
				</div>
				<div class="main-right">
					<img src="../assets/input.png" alt="" />
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Title from '@/components/Title.vue' //导入组件
	import Img from '@/components/Img.vue'
	import Box from '@/components/Box.vue'

	export default {
		components: {
			Title,
			Img,
			Box: Box
		},
		data() {
			return {
				c: 0,
				state:[],
			}
		},
		created() {
			this.$http.post('http://localhost:3000', { fenlei: this.a }, { emulateJSON: true }).then(e => this.state = e.body)
		}
	}
</script>

<style>
	.home {
		width: 95%;
		margin: 0 auto;
	}
	
	.Carousel {
		width: 100%;
		overflow: hidden;
	}
	
	.Carousel img {
		float: left;
		width: 100%;
		height: 600px;
	}
	
	.main {
		width: 90%;
		margin: 0 auto;
		margin-top: 30px;
		overflow: hidden;
	}
	
	.main-left {
		width: 75%;
		float: left;
	}
	
	.left-img {
		width: 100%;
		overflow: hidden;
	}
	
	.left-img img {
		float: left;
		width: 49%;
		margin-right: 1%;
		margin-top: 1%;
	}
	
	.new {
		width: 100%;
		overflow: hidden;
	}
	.box{
		width: 100%;
		border: 1px solid #CCCCCC;
		background-color: #F7F7F7;
		margin-top: 30px;
		overflow: hidden;
	}
	.p {
		text-align: center;
		font-size: 20px;
	    line-height: 30px;
	    font-weight: bold;
	    padding-top: 10px;
	}
	.pp{
		text-align: center;
		padding-bottom: 0px;
		line-height: 30px;
	}
	.new-con {
		width: 33%;
		float: left;
		margin-left: 1px;
		overflow: hidden;
		border-right: 1px solid #CCCCCC;
		background-color: #FFFFFF;
		padding-bottom: 20px;
	}
	
	.new-con img {
		width: 100%;
		height: 175px;
		float: left;
	}
	
	.new-con a {
		color: #000;
	}
	
	.new-con p {
		width: 100%;
		height: 40px;
		text-align: left;
		padding-left: 20px;
		line-height: 40px;
		float: left;
		color: #000000;
		font-weight: bold;
		font-size: 14px;
	}
	
	.new-con span {
		width: 100%;
		float: left;
		padding-left: 20px;
		line-height: 25px;
		font-size: 14px;
	}
	
	.new-but {
		width: 100%;
		height: 90px;
		float: left;
		line-height: 90px;
		text-align: center;
	}
	
	.new-but button {
		width: 135px;
		height: 40px;
		background-color: #FFFFFF;
		border: 1px solid #00AEFF;
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
		margin-top: 8px;
	}
	
	.main-right p button {
		background-color: #fff;
		border: 1px solid #000;
		float: right;
		margin-right: 10px;
		margin-top: 2px;
		padding: 2px;
	}
	
	.tit {
		height: 80px;
		margin-left: 20px;
		font-size: 14px;
		line-height: 25px;
	}
	
	.dian {
		height: 70px;
		margin-left: 20px;
		font-size: 14px;
		line-height: 25px;
	}
	
	.dian a {
		color: #0000CD;
		height: 80px;
	}
	
	.dian img {
		width: 16px;
		height: 18px;
		margin-left: 10px;
	}
	
	a {
		text-decoration: none;
	}
</style>