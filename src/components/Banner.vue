<template>
    <div class="banner">
        <div class="banner-content">
          <div class="main-container">
            <div class="img-container">
              <img class="img" src="banner-1.jpg" alt="Banner">
              <div class="img-content">
                <h3>Man's</h3>
              </div>
            </div>
        </div>
        <div>
            <div class="img-container">
              <img class="img" src="banner-2.jpg" alt="Banner">
              <div class="img-content">
                <h3>Woman's</h3>
              </div>
            </div>
        </div>
        <div>
            <div class="img-container">
              <img class="img" src="banner-3.jpg" alt="Banner">
              <div class="img-content">
                <h3>Kid's</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',
}
</script>

<style lang="scss" scoped>
.banner-content {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 92px);
}
.img-container  {
  position: relative;
  height: 50%;
}
.img-container .img-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 4px;
  padding: 16px 32px;
  text-align: center;
}
.img {
  height: 100%;
  width: 100%;
}
</style>