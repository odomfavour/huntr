<template>
  <div>
      <Auth>
          <form action="" @submit.prevent="loginUser">
              <transition name="bounce">
                <input type="email" v-model="formData.email" placeholder="Email Address">
              </transition>
              <transition
 enter-active-class="animate__animated animate__fadeInDown"
 leave-active-class="animate__animated animate__fadeOutUp"
>
                <input type="password" v-model="formData.password" placeholder="password">
              </transition>
                <input type="submit" value="Login">
                <p>Don't have an account? <router-link to="/register">Sign Up</router-link></p>
            </form>
      </Auth>
  </div>
</template>

<script>
import Auth from '@/components/Auth.vue';
import firebase from "firebase/app";
// import "firebase/auth";
export default {
    components: {
        Auth
    },
    data() {
        return {
            formData: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        loginUser() {
            try {
                const user = firebase.auth().signInWithEmailAndPassword( this.formData.email,this.formData.password);
                console.log(user)
                this.$router.push("/dashboard")
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
