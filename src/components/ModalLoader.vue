<template>
    <div class="overlay">
        <div class="loader">
            <img src="@/assets/img/logo.svg" alt="" class="welcome__illustration">
            <img src="@/assets/img/logo.svg" alt="" data-aos="fade-up" data-aos-duration="700" class="welcome__illustration">
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalLoader"
}
</script>

<style scoped>

.overlay {
    position: fixed;
    inset: 0;
    backdrop-filter: brightness(30%);
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