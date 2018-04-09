<template>
	<div class="box">
		<div class="zys-tit" v-for="i in state">
			<div class="p">{{i.tit}}</div>
			<div class="pp">{{i.con}}</div>
             </div>
		<div class="new-con" v-for="i in state">
			<!--组件-->			
			<router-link :to="'/detail/'+i.id">
				<img :src="i.img" />
				<p>{{i.name}}</p>
				<span>地区：{{i.address}}</span>
				<span>户型：{{i.house}} </span>
				<span>价格：{{i.price}}</span>
				
			</router-link>
		</div>
		<div class="new-but">
				<button>浏览更多新楼盘</button>
			 </div>
	</div>
</template>

<script>
	export default {
		props: {
			a: String
		},
		data() {
			return {
				state: [],				
			}
		},
		created() {
			this.$http.post('http://localhost:3000', { fenlei: this.a }, { emulateJSON: true }).then(e => this.state = e.body)
		}
	}
</script>

<style>
</style>