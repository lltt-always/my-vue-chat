/**
 * Created by litong on 2016/12/6.
 */
export const changesessionid = ({ dispatch }, payload) => dispatch('CHANGE_CURR_SESSION_ID', payload);
export const sendmessage = ({ dispatch }, payload) => dispatch('SEND_MESSAGE', payload);