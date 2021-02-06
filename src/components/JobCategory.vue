<template>
  <div class="job-categories">
      <div class="col-4" v-for="(card, index) in 3" :key="index">
          <div class="card">
               <div class="card-content">
                   <h3 class="category-name">Design</h3>
                   <p><span>150</span> Job Vacancy</p>
               </div>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .job-categories {
        display: grid;
        grid-template-columns:  repeat(3, 1fr);
        grid-column-gap: 40px;
        padding: 0 40px;
        margin-top: 30px;

         .card {
            background: #fff;
            margin-bottom: 30px;
            padding: 20px;
            height: 200px;
            position: relative;
            display: flex;
             justify-content: center;
             align-items: center;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
         }

         .card-content {
             text-align: center;

             p {
                 margin-top: 20px;
             }
         }
    }

    @media(max-width: 900px) {
        .job-categories {
            grid-template-columns:  repeat(2, 1fr);
            padding: 0 10px;
        }
    }
    @media(max-width: 400px) {
        .job-categories {
            grid-template-columns:  repeat(1, 1fr);
             padding: 0 10px;
        }
    }
</style>