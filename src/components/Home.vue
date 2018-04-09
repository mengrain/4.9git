<template>
  <div class="main">
  	<div class="new">
        <div class="new-con" v-for="j in state" >
          <router-link :to="'/detail/'+j.id">
          <img :src="j.img"/>
          <p>{{j.name}}</p>         
          <span>地区：{{j.address}}</span>
          <span>户型：{{j.house}} </span>   
          <span>价格：{{j.price}}</span>    
          </router-link>
    		</div>
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
		watch: {
			state: function() {},
			'$route' () {
				this.$http.post('http://localhost:3000', { fenlei: this.$route.params.fenlei }, { emulateJSON: true }).then(e => this.state = e.body)
			}
		},
		created() {
		this.$http.post('http://localhost:3000', { fenlei: this.$route.params.fenlei }, { emulateJSON: true }).then(e => this.state = e.body)
		}
	}
</script>

<style scoped>
	
	.new{
		overflow: hidden;
	}
	.new p span{
		font-size: 25px;
		font-weight: bold;
	}
</style>
