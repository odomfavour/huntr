<template>
<div class="job-display">
    <div class="col-3" v-for="(job, index) in jobs" :key="index">
        <div class="card">
        <div class="job-role">
            <p>{{job.title}}</p>
        </div>
        <div class="job-location">
            <p>{{job.location}}</p>
            <small>{{job.published_at.for_humans}}</small>
        </div>
        <div class="company-detail">
            <img :src="job.company.avatar" alt="company-logo">
            <p>{{job.company.name}}</p>
        </div>
        <div class="application-btn">
            <button class="apply-button" @click="apply">Apply Now</button>
        </div>
    </div>
    </div>
    
</div>
  
</template>

<script>
import axios from 'axios';
import firebase from "firebase";
export default {
    data() {
        return {
            jobs: [],
            URI: 'https://vuejobs.com/api/jobs',
            isLoggedIn: false,
        }
    }, 
    created() {
        // let URI = 'https://vuejobs.com/api/jobs'
        console.log(this.URI)
        axios.get(this.URI)
            .then((response) => {
                this.jobs = response.data
                console.log(this.jobs)
                })
            .catch(error => console.log(error))
    },
    methods: {
        apply() {
            firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.isLoggedIn = true;
                this.$router.push('/dashboard')
            }else {
                this.isLoggedIn = false;
                this.$router.push('/login')
            }
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
    $primary: #f261b4;
    $white: #fff;
    $green: #16c484;
    $font-weights: (
    "regular": 400,
    "medium": 500,
    "bold": 900,
    );

    .job-display {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
        margin-top: 30px;
        padding: 0 40px;
    }

    .col-3 {
        margin-bottom: 30px;
    }

    .card {
        background: $white;
        padding: 20px;
        height: 300px;
        position: relative;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

        .job-role {
            font-weight: map-get($map: $font-weights, $key: bold );
        }

        .job-location {
            position: absolute;
            top: 100px;

            small {
                color: $primary;
                font-weight: map-get($map: $font-weights, $key: medium );
            }
        }

        .company-detail {
            position: absolute;
            top: 180px;

            img {
                width: 2.2em;
            }
        }

        .application-btn {
            
            

            .apply-button {
                display: block;
                width: 87%;
                position: absolute;
                bottom: 20px;
                margin: 0 auto;
                padding: 10px;
                background: $green;
                color: $white;
                border: 1px solid $green;
            }
        }
    }

     @media(max-width: 900px) {
        .job-display {
            grid-template-columns:  repeat(2, 1fr);
            padding: 0 10px;
        }
    }
    @media(max-width: 400px) {
        .job-display {
            grid-template-columns:  repeat(1, 1fr);
            padding: 0 10px;
        }
    }
</style>