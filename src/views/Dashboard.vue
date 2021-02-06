<template>
  <div>
      <div class="container">
        <div class="section-title">
          <h1>Latest Jobs</h1>
        </div>
        <JobCard/>
      </div>
  </div>
</template>

<script>
import JobCard from '@/components/JobCard.vue'
export default {
    components: {
        JobCard
    }
}
</script>

<style>

</style>