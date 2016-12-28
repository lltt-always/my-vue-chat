<script>
    import Text from './component/Text'
    import Message from './component/Message'
    import Card from './component/Card'
    import Menu from './component/Menu'
    import store from './store'

    export default {
        store: store,
        components: {
            Text, Message, Card, Menu
        }
    }

</script>

<template>
<div id="app">
    <router-view></router-view>
    <div id="sidebar">
        <card></card>
        <menu></menu>
    </div>
    <div id="container">
        <message></message>
        <text></text>
    </div>
</div>
</template>

<style lang="less" scoped>
    #app {
        border-radius: 3px;
        height: 600px;
        width: 800px;
        margin: 20px auto;
        overflow: hidden;
    }
    #sidebar {
        width: 200px;
        float: left;
        background-color: #2e3238;
        height: 100%;
    }
    #container {
        width: 600px;
        height: 100%;
        float: left;
        background-color: #fff;
    }
</style>
