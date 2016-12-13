<template>
    <div class="text">
        <textarea placeholder="按 Shift + Enter 发送" v-model="content" @keyup="submit"></textarea>
    </div>
</template>
<style scoped lang="less">
.text {
    height: 180px;
    padding: 10px;
    textarea {
        height: 100%;
        width: 100%;
        font-size: 14px;
        resize: none;
        border: none;
    }
}
</style>
<script>
import { sendmessage } from '../action.js'
    export default{
        data(){
            return{
                msg: "hello vue",
                content: ""
            }
        },
        vuex: {
            actions: {
                sendmessage
            }
        },
        methods: {
            submit (e) {
                if(e.shiftKey && e.keyCode == 13 && this.content !== "") {
                    const now = new Date().toLocaleTimeString("zh-Hans-CN", {hour12: false});
                    let newmsg = {
                        time: now,
                        content: this.content,
                        type: "send"
                    }
                    this.sendmessage(newmsg);
                    this.content = "";
                }
            }
        }
    }
</script>
