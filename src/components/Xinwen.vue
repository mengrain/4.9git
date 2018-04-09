<template>
	<div>
		<div class="zys-tit" v-for="i in state">
			<router-link :to="'/detail2/'+i.id">
			<img :src="i.img" />
			<div class="zys-tit-left">
				<p>{{i.name}}</p>
				<a>发布日期：{{i.times}}</a>
				<span>{{i.text}}</span>
			</div>
            </router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				state: []
			}
		},
		created() {
			this.$http.post('http://localhost:3000/txt', { fenlei: this.$route.params.fenlei }, { emulateJSON: true }).then(e => this.state = e.body)
		},
		
	}
</script>

<style>

</style>