<template>
	<div class="Detail">
		<div class="top">
			<div class="con">
				全新楼盘 ＞ {{state.name}}
			</div>
		</div>
		<div class="content">
			<div class="content2">
				<!--图片-->
				<div class="con-img">
					<img src="../assets/con-1.png" alt="" />
				</div>
				<!--右侧-->
				<div class="con-right">
					<p>| 项目名称project name</p>
					<span>参考价：<a>¥ 35,000.00</a></span>
					<div class="tt">产品简介：支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件（突出介绍产品的特点，不要超过一百个字）</div>
					<button>在线咨询</button>
					<div class="con-img-img"><img src="../assets/ewm.jpg" alt="" /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	 export default {
        name:"Detail",
        data(){
            return {
                state:{}
            }
        },
        created(){
            this.$http.post("http://localhost:3000/detail",{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.state=e.body[0])
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
	}
	
	.con {
		width: 95%;
		margin: 0 auto;
	}
	
	.content {
		width: 100%;
		padding-bottom: 100px;
	}
	
	.content2 {
		width: 95%;
		margin: 0 auto;
		background-color: #F7F7F7;
		margin-top: 50px;
		overflow: hidden;
		padding-bottom: 20px;
	}
	
	.con-img {
		width: 460px;
		height: 345px;
		float: left;
		margin: 40px 0 20px 100px;
	}
	
	.con-img img {
		height: 345px;
	}
	
	.con-right {
		width: 50%;
		float: right;
		overflow: hidden;
	}
	
	.con-right p {
		float: left;
		width: 100%;
		height: 100px;
		line-height: 100px;
		font-weight: bold;
	}
	
	.con-right span {
		width: 100%;
		display: inline-block;
		line-height: 30px;
	}
	
	.con-right span a {
		font-size: 22px;
		color: #CC3333;
	}
	.tt{
		width: 85%;
		line-height: 25px;
		font-size: 14px;
	}
	.con-right button{
		float: left;
		width: 160px;
		height: 45px;
		background-color: #000;
		border: none;
		color: #fff;
		margin-top: 10px;
		margin-bottom: 20px;
	}
	.con-img-img{
		width: 100%;
		float: left;
	}
	.con-img-img img{
		width: 120px;
		height: 120px;
	}
</style>