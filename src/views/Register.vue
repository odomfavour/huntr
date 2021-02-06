<template>
  <div>
      <Auth>
          <form action="" @submit.prevent="createUser">
                <input type="text" v-model="formData.name" placeholder="Name">
                <input type="email" v-model="formData.email" placeholder="Email Address">
                <input type="password" v-model="formData.password" placeholder="password">
                <input type="submit" value="Register">
                <p>Already have an account? <router-link to="/login">Login</router-link></p>
            </form>
      </Auth>
  </div>
</template>

<script>
import firebase from "firebase";
import Auth from '@/components/Auth.vue'
export default {
    components: {
        Auth
    },
     data() {
        return {
            formData: {
                email: "",
                password: "",
                name: ""
            }
        }
    },
    methods: {
        async createUser() {
            try {
                const user = firebase.auth().createUserWithEmailAndPassword( this.formData.email,this.formData.password);
                console.log(user)
                this.$router.replace({name: "Dashboard"})
                this.formData =""
            } catch (error) {
                console.log(error)
            }
            
            // alert(this.formData.email)
        }
    }
}
</script>

