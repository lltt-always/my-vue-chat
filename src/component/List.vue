<template>
    <div class="list">
        <ul>
            <li v-for="session in sessions"
                class="session"
                :class="{ active: session.id === currentsessionid}"
                @click="changesessionid(session.id)">
                <img :src="session.contact.img" />
                <span>{{ session.contact.name }}</span>
            <li>
        </ul>
    </div>
</template>
<style scoped lang="less">
.session {
    padding: 12px 15px;
    border-bottom: 1px solid #292C33;
    list-style: none;

    &:hover {
        background-color: rgba(255, 255, 255, 0.03);
    }
    &.active {
        background-color: rgba(255, 255, 255, 0.1);
    }
    img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
    }
    span {
        color: #fff;
        margin-left: 15px;
    }
}
</style>
<script>
import { changesessionid } from '../action.js'
    export default{
        data(){
            return{
/*                sessions: this.$store.state.sessions
*/            }
        },
        vuex: {
            getters: {
                currentsessionid: (state) => {
                    return state.currentSessionId
                },
                sessions: (state) => {
                    function search (session) {
                        return session.contact.name.indexOf(state.filterkey) != -1;
                    };
                    function filtersessions (sessions) {
                        return sessions.filter(search)
                    }
                    return filtersessions(state.sessions)
                }
            },
            actions: {
                changesessionid
            }
        }
    }
</script>
