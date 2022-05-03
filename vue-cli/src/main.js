import Vue from 'vue'
import App from './App.vue' //SPA 컴포넌트 

Vue.config.productionTip = false

new Vue({
  //app이라는 컴포넌트 파일
  render: h => h(App),
}).$mount('#app')

//컴포넌트 내용을 다른 파일로 불러와서 h(App)으로 집어넣고 render를 했다. 