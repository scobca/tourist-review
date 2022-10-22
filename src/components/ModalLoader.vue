<template>
    <div class="overlay">
        <!--        <div class="loader">-->
        <!--            <img src="@/assets/img/logo.svg" alt="" class="welcome__illustration">-->
        <!--            <img src="@/assets/img/logo.svg" alt="" data-aos="fade-up" data-aos-duration="700" class="welcome__illustration">-->
        <!--        </div>-->
        <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalLoader"
}
</script>

<style scoped>

.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;

  -webkit-animation: sk-rotate 2.0s infinite linear;
  animation: sk-rotate 2.0s infinite linear;
}

.dot1, .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: white;
  border-radius: 100%;

  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.overlay {
    position: fixed;
    inset: 0;
    backdrop-filter: brightness(50%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcome__illustration {
    position: absolute;
    user-select: none;
    -webkit-user-drag: none;
}

.loader__text {
    position: absolute;
    bottom: 0;
}

.welcome__illustration:nth-child(1) {
    width: 60px;
    z-index: 10;
    transform: translate(20%, 10%);
    margin-left: 65px;
    animation: balloons1 2s infinite alternate ease-in-out;
}

.welcome__illustration:nth-child(2) {
    width: 80px;
    margin-right: 35px;
    transform: translate(-5%, 0);
    animation: balloons2 2s infinite alternate ease-in-out;
}

@keyframes balloons1 {
    from {
        transform: translateY(20%);
    }
    to {
        transform: translateY(15%);
    }
}

@keyframes balloons2 {
    from {
        transform: translateY(-5%);
    }
    to {
        transform: translateY(10%);
    }
}

.loader {
    z-index: 10000;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    width: 180px;
    aspect-ratio: 1;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
}

</style>