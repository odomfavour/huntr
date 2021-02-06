<template>
  <div class="home">
    <section class="hero-section">
      <img src="../assets/top.png" alt="dev" class="top-image">
      <nav>
        <div class="container">
          <div class="inner-case">
            <div class="app-name">Huntr</div>
            <!-- {{isLoggedIn}} -->
            <div class="middle-links">
              <router-link to="/">Find Jobs</router-link>
              <router-link to="/about">Post Jobs</router-link>
            </div>
            <div class="header-buttons">
              <div class="" v-if="!isLoggedIn">
              <router-link to="/login" class="btn white-btn">Log In</router-link>
              <router-link to="/register" class="btn active-btn">Sign Up</router-link>
              </div>
              <div class="" v-else>
                <button class="btn active-btn" @click="signOut">Log out</button>
              </div>
            </div>
            <div class="mobile-menu" @click="isMobile = true">
              <img src="../assets/mobile-menu.svg" alt="mobile menu">
            </div>
          </div>
          </div>
      </nav>
      <transition
      name="slide-fade"
      >
      <div class="mobile-nav" v-if="isMobile">
        <div class="mobile-menu-close" @click="isMobile = false">
          <i class="fa fa-times fa-3x"></i>
        </div>
        <div class="links">
          
          <router-link to="#">Find Jobs</router-link>
          <router-link to="#">Post Jobs</router-link>
        
          <router-link to="/login" class="btn white-btn">Log In</router-link>
          <router-link to="/register" class="btn active-btn">Sign Up</router-link>
          
        </div>
      </div>
      </transition>
      <div class="hero-text"> 
        <img src="../assets/side.png" alt="side" class="side-image">
        <div class="inner-info">
          <h3>Get Started</h3>
          <h1>Find Your Dream Job</h1>
          <p>We will boost your skills and profile, provide you with personalised career guidance and match you with the right opportunities, so that you can be the Best and the Brightest</p>
        </div>
      </div>
       <div class="search-section">
          <div class="container">
            <form action="">
              <input type="text" placeholder="Job title or Keyword">
              <button class="btn active-btn">Search</button>
            </form>
          </div>
          
        </div>
    </section>
    <section class="latest-job">
      <div class="container">
        <div class="section-title">
          <h1>Latest Jobs</h1>
        </div>
        <job-card></job-card>
      </div>
    </section>
    <section class="job-category">
      <div class="container">
        <div class="section-title">
          <h1>Job Category</h1>
        </div>
        <JobCategory/>
      </div>
    </section>
    <section class="about-section">
      <div class="container">
        <div class="about-holder">
          <div class="about-image">
            <img src="../assets/about.png" alt="">
          </div>
          <div class="about-text">
            <h1>We will help you get your dream job easy</h1>
            <p>We connect tech talents with the right job and have helped a lot of people (and counting) gain access to tech jobs across the World. We Assess We help techies assess their skill-level or talent based on their ability to solve problems, learning speed, and strength of character.</p>
          </div>
        </div>
      </div>
      
    </section>
    <section class="footer">
      <div class="container">
        <Footer/>
      </div>
    </section>
  </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import JobCard from '@/components/JobCard.vue'
import JobCategory from '@/components/JobCategory.vue'
import Footer from '@/components/Footer.vue'

import firebase from "firebase";

export default {
  name: 'Home',
  components: {
    JobCard,
    JobCategory,
    Footer
  },
  data(){
    return {
    isLoggedIn: false,
    isMobile: false
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
      }
    })
  },
  methods: {
    async signOut() {
      console.log('jjj')
      try {
        console.log('jjj')
        const data = await firebase.auth().signOut();
        console.log(data)
        // this.$router.replace({name: "Login"})
      } catch (error) {
        console.log(error)
      }
      
    }
  }
}
</script>

<style lang="scss">

$primary: #f261b4;
$white: #fff;
$font-weights: (
  "regular": 400,
  "medium": 500,
  "bold": 900,
);

 .btn {
    text-decoration: none;
    border-radius: 3px;
    border: 1px solid;
    font-size: .8em;
    padding: 1em 2em;
    cursor: pointer;
  }

  .white-btn {
    background: $white;
    border-color: $white;
    color: $primary;
  }

  .active-btn {
    background: $primary;
    color: $white;
    border-color: $primary;
  }
  .hero-section {
  // background: url('./assets/top.png') no-repeat;
  // background-position: top;
  min-height: 100vh;

  .top-image {
    position: absolute;
    right: 0;
    z-index: -1;
    top: -2em;
    width: 50%;
  }

  .app-name {
    font-size: 1.6em;
    font-weight: 900;
    color: $primary;
  }

  nav {
    padding: 20px 0;
  }

  .hero-text {
    width: 50%;
    padding-top: 30px;

    .side-image {
      width: 8em;
    }

    h3 {
      color: #f261b4;
    text-transform: uppercase;
    }

    h1 {
      font-size: 2.8em;
      font-weight: map-get($map: $font-weights, $key: bold );
    }

    .inner-info {
      padding-left: 60px;

      p {
        width: 70%;
        line-height: 1.8;
      }
    }
  }
}




.container {
  width: 90%;
  margin: 0 auto;
}
.inner-case {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .app-name {
    color: $primary;
  }

  .middle-links a {
    text-decoration: none;
    font-size: 18px;
    margin-left: 20px;
  }

  .btn {
     margin-left: 20px;
  }
}

.search-section {
  margin-top: 50px;

  input {
    padding: 12px 10px;
    width: 30%;
    border: 1px solid #ccc;
  }
}

.latest-job, .job-category {
  margin-top: 80px;

  h1 {
    font-size: 2em;
  }
}

.about-section {
  margin-top: 80px;

  .about-holder {
    display: flex;
    justify-content: space-evenly;
  }

  .about-image {
    width: 40%;
    margin-left: 20px;
    position: relative;

    img {
      width: 100%;
    }

    &::after {
      z-index: -1;
      content: "";
      right: 1em;
      bottom: 1em;
      width: 100%;
      height: 100%;
      border: .1em solid #f261b4;
      position: absolute;
    }
  }

  .about-text {
    width: 45%;
    h1 {
      font-size: 2.5em;
      color: #212121;
    }

    p {
      color: #707070;
      margin-top: 24px;
      line-height: 1.6em;
    }
  }
}

.footer {
  margin-top: 80px;
  padding-bottom: 40px;

  h1 {
    color: $primary
  }
  li {
    list-style: none;
    margin-bottom: 7px;
  }
  a {
    text-decoration: none;
  }
}

.mobile-menu  {
  display: none;
}

@media(max-width: 900px) {

  .search-section input {
    width: 70%;
  }

  .mobile-menu {
    img {
      width: 2.2em;
    }
  }
  .about-holder {
    flex-direction: column;

    .about-image {
      width: 100%;
      margin: 0 10px;
    }

    .about-text {
      width: 100%;

      h1 {
        font-size: 30px;
        margin-top: 20px;
      }
    }
  }
}

@media(max-width: 900px) {

  .hero-section .top-image {
    width: 80%;
  }

  .inner-case .middle-links, .inner-case .header-buttons {
    display: none;
  }
  .hero-section .hero-text {
    width: 100%;
   
    // text-align: center;

    .inner-info {
      text-align: center;
       padding: 0 20px;

      h1 {
        font-size: 28px;
      }

      p {
        width: 100%
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media(max-width: 400px) {
  .mobile-menu {
    display: block;
  }

  // mobile nav
.mobile-nav {
  height: 100vh;
  background: #ccc;
  z-index: 22;
  
  position: absolute;
  top: 0;
  width: 100%;
  // transform: rotate(0deg);
  transition: all 2s ease .2s;
  .mobile-menu-close {
    display: flex;
    justify-content: flex-end;
    padding: 10px 30px;
    img {
      width: 3em;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 100px 30px 0px 30px;
    text-align: center;

    a {
      text-decoration: none;
      margin-bottom: 20px;
    }
  }
}
}
</style>