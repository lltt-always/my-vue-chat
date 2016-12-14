/**
 * Vuex
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const now = new Date().toLocaleTimeString("zh-Hans-CN", {hour12: false})

const state = {
    user: {
        img: '../dist/images/1.jpg',
        username: 'office'
    },
    sessions: [{
        id: 1,
        contact: {
            name: 'Marry',
            img: '../dist/images/2.png'
        },
        messages: [{
            time: now,
            content: 'aaaaaaaa',
            type: 'receive'
        },{
            time: now,
            content: 'bbbbbbb',
            type: 'receive'
        }]
    },{
        id: 2,
        contact: {
            name: 'Lily',
            img: '../dist/images/3.jpg'
        },
        messages: [{
            time: now,
            content: 'cccccc',
            type: 'receive'
        },{
            time: now,
            content: 'ddddddd',
            type: 'receive'
        }]
    }],
        currentSessionId: 1,
        filterkey: ''
}

const mutations = {
    CHANGE_CURR_SESSION_ID (state, payload) {
        state.currentSessionId = payload
    },
    SEND_MESSAGE (state, payload) {
        var i = state.sessions.length;
        while (i--) {
            if (state.sessions[i].id == state.currentSessionId) {
                state.sessions[i].messages.push(payload);
                break;
            }
        }
    },
    CHANGE_FILTERKEY (state, payload) {
        state.filterkey = payload;
    }
}

const store = new Vuex.Store ({
    state,
    mutations
})

export default store