<template>
	<div class="banner">
		<ul :style="{'width':dataTable.length*800+'px','margin-left':thisPage*-800+'px'}">
			<li v-for="(i,index) in dataTable">
				<img :src="i" :alt="'第'+(index+1)+'张图片'">
			</li>
		</ul>
		<ol>
			<li v-for="(i,index) in dataTable" :class="index==thisPage?'color':''" @click="thisPage=index"></li>
		</ol>
		<button class="left" @click="info('into')"><</button><button class="right" @click="info('add')">></button>
	</div>
</template>
<script>
export default {
	data(){
		return {
			thisPage:0,
		}
	},
	props:['dataTable'],
	methods:{
		info(type){
			if(type=='add'){
				this.thisPage++;
			}else{
				this.thisPage--;
			}
			if(this.thisPage<0){
				this.thisPage=this.dataTable.length-1;
			}else if(this.thisPage>=this.dataTable.length){
				this.thisPage=0;
			}
		}
	}
}
</script>
<style>
	.banner{
		width: 800px;margin: 0 auto;overflow: hidden;
		height: 400px;position: relative;
	}
	ul{
		height: 100%;transition:0.5s all;
	}
	li{
		width: 800px;float: left;height: 100%;
	}
	img{width: 90%;height: 100%;}
	ol{
		position: absolute;
		bottom: 0;left: 0;list-style: none;
	}
	ol li{width: 20px;height: 20px;margin-right: 20px;border-radius: 50%;background: #000;}
	ol li.color{background: #ccc;}
	.left{
		position: absolute;top: 40%;left: 0;width: 20px;height: 40px;background: #fff;color:#000;display: inline-block;
	}
	.right{
		position: absolute;top: 40%;right: 0;width: 20px;height: 40px;background: #fff;color:#000;display: inline-block;
	}

</style>