<template>
	<div>
		<div class="top">
			<div class="con">
				首页 ＞ {{zys}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				state: [],
				zys: "",
			}
		},
		watch: {
			state: function() {},
			'$route' () {
				if(this.$route.params.fenlei == 1) {
					this.zys = "全新楼盘"
				}
				if(this.$route.params.fenlei == 2) {
					this.zys = "二手楼盘"
				}
				if(this.$route.params.fenlei == 3) {
					this.zys = "全新商铺"
				}
				this.$http.post('http://localhost:3000', { fenlei: this.$route.params.fenlei }, { emulateJSON: true }).then(e => this.state = e.body)
			}
		},
		created() {
			if(this.$route.params.fenlei == 1) {
				this.zys = "全新楼盘"
			}
			if(this.$route.params.fenlei == 2) {
				this.zys = "二手楼盘"
			}
			if(this.$route.params.fenlei == 3) {
				this.zys = "全新商铺"
			}
			this.$http.post('http://localhost:3000', { fenlei: this.$route.params.fenlei }, { emulateJSON: true }).then(e => this.state = e.body)
		}
	}
</script>

<style>

</style>