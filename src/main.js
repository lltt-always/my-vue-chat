// polyfill
import 'babel-polyfill';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.config.devtools = true;


Vue.use(VueRouter);
var router = new VueRouter();
router.map({
	'/': {
		component: function ( resolve ) {
			require(['./component/List'], resolve)
		}
	},
	'/contact': {
		component: function ( resolve ) {
            require(['./component/List'], resolve)
        }
	},
	'/setting': {
		component: function( resolve ) {
			require(['./component/Setting'], resolve)
		}
	}
})

/*new Vue({
    el: 'body',
    components: { App },
    store: store,
});*/ 
//只使用vuex的实例化方法

router.start(Vue.extend(App),'#app')