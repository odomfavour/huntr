<template>
  <div class="login-section">
      <div class="dev-image">
          <img src="../assets/dev.jpg" alt="">
      </div>
      <div class="login-form">
          <div class="form-holder">
              <div class="heading">
                  <router-link to="/">Huntr</router-link>
                  <!-- {{$route.path}} -->
                  <h3>Need a job? 
                      <span v-if="$route.path == '/login'">Login</span>
                      <span v-else>Register</span>
                      </h3>
              </div>

            <slot>

            </slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.login-section {
    display: flex;

    .dev-image {
        img {
           width: 100%;
           object-fit: cover;
           height: 100vh;

           
        }
    width: 50%;
    position: relative;

    &::after {
               content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                background-image: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.6),rgba(0,0,0,.94));
                top: 0;
                left: 0
           }
    }

    .login-form {
        width: 50%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        .form-holder {
            width: 60%;

            input[type="email"], input[type="password"], input[type="text"] {
                width: 100%;
                padding: 20px;
                border-radius: 5px;
                background-color: #f8f8f8;
                outline: none;
                color: #707070;
                border: none;
                margin-bottom: 15px;
            }

            input[type="submit"] {
                width: 100%;
                padding: 15px;
                background: #000;
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-bottom: 20px;
            }

            p {
                text-align: center;
            }
        }
    }
}

.heading {
    text-align: center;

    a {
        text-decoration: none;
        color: palevioletred;
        font-size: 1.6em;
        font-weight: 900;
    }
    h3 {
        margin: 15px 0;
    }
}

@media(max-width: 900px) {
    .dev-image {
        display: none;
    }

    .login-section .login-form {
        width: 100%;

        .form-holder {
            width: 80%;
        }
    }
}
</style>