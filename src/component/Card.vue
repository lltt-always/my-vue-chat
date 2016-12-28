<template>
    <div class="card">
        <div class="user">
            <img :src="user.img" />
            <span>{{ user.username }}</span>
        </div>
        <div class="searchbar">
            <input placeholder="search user..." v-model="keyword" @keyup="searchUser"/>
        </div>
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
import { changefilterkey } from '../action.js'
    export default{
        data(){
            return{
                user: this.$store.state.user,
                /*The use of the this.$store is not available when using Vuex and vue-router. This may be an issue with vue-router rather than Vuex.*/
                keyword: ''
            }
        },
        vuex: {
            actions: {
                changefilterkey
            }
        },
        /*computed: {
            user () {
                return store.state.user
            }
        },*/
        methods: {
            searchUser (e) {
                if(e.keyCode) {
                    this.changefilterkey(this.keyword);
                }
            }
        }
    }
</script>
