<script>
    import Text from './component/Text'
    import Message from './component/Message'
    import List from './component/List'
    import Card from './component/Card'

    export default {
        components: {
            Text, Message, List, Card
        }
    }

</script>

<template>
<div id="app">
    <div id="sidebar">
        <card></card>
        <list></list>
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
