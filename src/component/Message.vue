<template>
    <div class="message">
        <div v-for="msg in session.messages">
            <p class="msgtime">
                <span>{{ msg.time }}</span>
            </p>
            <div class="msgcontent" :class="{ sendmsg: msg.type === 'send' }">
                <img :src="session.contact.img" v-if="msg.type === 'receive'"/>
                <span :class="{textr: msg.type === 'receive', texts: msg.type === 'send'}">{{ msg.content }}</span>
                <img :src="userimg" v-if="msg.type === 'send'"/>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    .message {
        padding: 10px 15px;
        height: 420px;
        background-color: #eee;
        border-bottom: solid 1px #ddd;
        .msgtime {
            text-align: center;
            margin: 7px 0;
            span {
                background-color: #dcdcdc;
                font-size: 12px;
                color: #ffffff;
                padding: 5px 18px;
            }
        }
        .msgcontent {
            img {
                width: 30px;
                height: 30px;
                vertical-align: middle;
                margin: 0 10px;
            }
            .textr {
                background-color: #ffffff;
                display: inline-block;
                position: relative;
                padding: 5px;
                border-radius: 4px;
                &:before {
                    content: "";
                    border: 6px solid transparent;
                    position: absolute;
                    right: 100%;
                    border-right-color: #ffffff;
                }
            }
            .texts {
                background-color: #b2e281;
                display: inline-block;
                position: relative;
                padding: 5px;
                border-radius: 4px;
                &:before {
                    content: "";
                    border: 6px solid transparent;
                    position: absolute;
                    left: 100%;
                    border-left-color: #b2e281;
                }
            }
        }
        .sendmsg {
            text-align: right;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                userimg: this.$store.state.user.img
            }
        },
        vuex: {
            getters: {
                session: (state) => {
                    var i = state.sessions.length;
                    while (i--) {
                        if (state.sessions[i].id == state.currentSessionId) {
                            return state.sessions[i];
                            break;
                        }
                    }
                }
            }
        }
    }
</script>
