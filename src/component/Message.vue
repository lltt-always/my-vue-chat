<template>
    <div class="message">
        <div v-for="msg in session.messages">
            <p class="msgtime">
                <span>{{ msg.time }}</span>
            </p>
            <div class="msgcontent" :class="{ sendmsg: msg.type === 'send' }">
                <img :src="session.contact.img" v-if="msg.type === 'receive'"/>
                <span>{{ msg.content }}</span>
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
            span {
                background-color: #ffffff;
                padding: 5px;
                border-radius: 2px;
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
