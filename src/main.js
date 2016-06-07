import Vue from 'vue'
import pingpongx from './pingpongx.vue'
import homepage from './views/homepage.vue'
import accountmeg from './views/accountmeg.vue'
import withcase from './views/withcase.vue'
import incomemag from './views/incomemag.vue'
import notice from './views/notice.vue'
import addaccout from './views/addaccout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = './src/data';
Vue.http.options.emulateJSON = true;
var router = new VueRouter({
	hashbang: false
});

router.map({
    '/homepage': {
        component: homepage
    },
    '/accountmeg': {
        component: accountmeg
    },
    '/withcase': {
        component: withcase
    },
    '/incomemag': {
        component: incomemag
    },
    '/notice': {
        component: notice
    },
    '/addaccout': {
        component: addaccout
    }
})
router.redirect({
  '*': '/homepage'
})

router.start(pingpongx, '#app')