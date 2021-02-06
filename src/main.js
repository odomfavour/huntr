import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";
import 'animate.css';

// Vue.transition('fade', {
//   enterClass:"fadeInUp",
//   leaveClass:"fadeOutLeft"
// });

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCLbFkWdsa5H9luDMYnWN96GPnT9yTBias",
  authDomain: "vue-job-huntr.firebaseapp.com",
  projectId: "vue-job-huntr",
  storageBucket: "vue-job-huntr.appspot.com",
  messagingSenderId: "200257097967",
  appId: "1:200257097967:web:b86fc9770a967ad3a94b1a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
