<template>
	<div class="menu">
		<div class="routerview">
			<router-view></router-view>
		</div>
		<div class="menu-li">
			<a v-link="{ path: '/contact' }" title="联系人"><img src="../../dist/images/contact.png"/></a>
			<a v-link="{ path: '/setting' }" title="设置"><img src="../../dist/images/setting.png"/></a>
		<div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped lang="less">
	.menu {
		height: 495px;
		.menu-li {
			height: 30px;
			line-height: 30px;
			padding: 5px 15px;
			a {
			color: #fff;
			text-decoration: none;
			display: inline-block;
			padding: 0 10px 0 0;
				img {
					height: 30px;
					width: 30px;
				} 
			}
		}
		.routerview {
			height: 100%;
			margin-bottom: -40px;
		}
		
	}
</style>