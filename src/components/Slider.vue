<template>
    <div class="banner-cards h-sm-25 py-4">
      <div class="row h-100">
        <div class="col-md-4 h-100 mb-4 mb-md-0" v-for="i in 3" :key="i">
          <div class="card-item w-100 px-4 py-4 shadow">
            <p class="d-flex align-items-center fw-bold fs-7 fs-lg-6 mb-1">
              <span class="material-icons text-secondary fs-1">
                people_outline
              </span>
              <span class="ps-2 text-dark-blue"
                >The quick fox jumps over the lazy dog</span
              >
            </p>
            <p class="text-muted fs-7 mb-0">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'SliderComponent'
}
</script>

<style>
    .banner-cards:hover {
        background: rgba(225, 0, 0, 0);
    }
</style>