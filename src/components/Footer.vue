<template>
  <div class="footer-content">
      <div class="footer-child">
          <h1>Huntr</h1>
          <div class="social-icons">
              <ul>
                  <li><i class="fab fa-twitter"></i></li>
                  <li><i class="fab fa-medium-m"></i></li>
                  <li><i class="fab fa-facebook-f"></i></li>
                  <li><i class="fab fa-instagram"></i></li>
              </ul>
          </div>
      </div>
      <div class="footer-child">
          <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Feature</a></li>
              <li><a href="">About Us</a></li>
          </ul>
      </div>
      <div class="footer-child">
          <ul>
              <li><a href="">Career</a></li>
              <li><a href="">Community</a></li>
              <li><a href="">Privacy and Policy</a></li>
          </ul>
      </div>
      <div class="footer-child">
          <ul>
              <li><a href="">Sign In</a></li>
              <li><a href="">Register</a></li>
              <li><a href="">Know More</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .footer-content {
        display: flex;
        justify-content: space-around;

        .social-icons {
            margin-top: 30px;
            ul {
            display: flex;
            li {
                margin-right: 20px;
            }
        }

        }
        
        
        i {
            color: #000;
            font-size: 30px;
        }
    }

    @media(max-width: 900px) {
        .footer-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }
</style>