<template>
    <div class="card">
        <div class="user">
            <img :src="user.img" />
            <span>{{ user.username }}</span>
        </div>
        <div class="searchbar">
            <input placeholder="search user..."/>
        </div>
        <div v-if="abc.leng">ok</div>
        <div v-else>no</div>
    </div>
</template>
<style scoped lang="less">
    .card {
        padding: 12px;
        border-bottom: solid 1px #24272C;
    }
    .user img {
        vertical-align: middle;
        width: 40px;
        height: 40px;
    }
    .user span {
        margin-left: 15px;
        color: #fff;
    }
    .searchbar {
        margin-top: 10px;
        input {
            width: 100%;
            display: block;
            background-color: #26292E;
            border: solid 1px #3a3a3a;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            color: #ffffff;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                user: this.$store.state.user,
                abc: [1,2]
            }
        }
    }
</script>
