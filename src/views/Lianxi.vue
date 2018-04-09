<template>
	<div class="lianxi">
		<div class="top">
			<div class="con">
				首页 ＞ 联系我们
			</div>
		</div>
		<div class="box">
			<div class="content-left">
				<div class="h5"><span></span>楼市动态/ NEW APARTMENT</div>
				<div class="h5">
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
				<div class="zys-t">
					我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？云建站可以满足您的所有需求。我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现。
				</div>
			 <p>邮箱：info@realestate.com</p>
			 <p>地址：上海市静安区南京西路时代大厦</p>
			</div>
			<div class="zys-con-rig">
				<div class="zys-con-rig2">
				<input type="text" placeholder="称呼"/>
				<input type="text" placeholder="邮箱"/>
				<input type="text" placeholder="电话"/>
				<input style="height:80px;" type="datetime" placeholder="内容"/>
				<input type="text" placeholder="验证码"/>
				<img src="../assets/yzm.png" alt="" /> <br />
				<button>提交</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
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
	
	.box {
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
		padding-bottom: 50px;
	}
	
	.content-left {
		width: 60%;
		float: left;
		overflow: hidden;
	}
	
	.h5 {
		float: left;
		width: 100%;
		height: 80px;
		overflow: hidden;
		line-height: 80px;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.h5 span {
		width: 15px;
		height: 15px;
		background-color: #000;
		margin-right: 10px;
		display: inline-block;
	}
	
	.dian {
		float: left;
		font-size: 14px;
		line-height: 30px;
		margin-right: 30px;
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
	.zys-t{
		float: left;
		margin-top: 30px;
		font-size: 12px;
		padding-bottom: 20px;
		line-height: 25px;
	}
	.content-left p{
		line-height: 30px;
	}
	.zys-con-rig{
		float: right;
		width: 35%;
		background-color: #dbdbdb;
		overflow: hidden;
		margin-top: 30px;
		padding-bottom: 50px;
	}
	.zys-con-rig2{
		width: 80%;
		margin: 0 auto;
	}
	.zys-con-rig2 input{
		width: 320px;
		height: 40px;
		float: left;
		border: none;
		background-color: #dbdbdb;
		border-bottom: 1px solid #666666;
		outline: none;
	}
	.zys-con-rig2 img{
		width: 100px;
		height: 40px;
		margin-top: 10px;
	}
	.zys-con-rig2 button{
		width: 100px;
		height: 30px;
		background-color: #000;
		border: none;
		color: #fff;
		padding: 5px;
		margin-top: 10px;
	}
</style>