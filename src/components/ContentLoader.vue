<template>
    <div class="loader">
        <img src="@/assets/img/logo.svg" alt="" class="welcome__illustration">
        <img src="@/assets/img/logo.svg" alt="" data-aos="fade-up" data-aos-duration="700" class="welcome__illustration">
    </div>
</template>

<script>
export default {
    name: "ContentLoader"
}
</script>

<style scoped>

.welcome__illustration {
    position: absolute;
    user-select: none;
    -webkit-user-drag: none;
}

.welcome__illustration:nth-child(1) {
    width: 75px;
    z-index: 10;
    transform: translate(40%, 10%);
    margin-left: 65px;
    animation: balloons1 2s infinite alternate ease-in-out;
}

.welcome__illustration:nth-child(2) {
    width: 100px;
    margin-right: 35px;
    animation: balloons2 2s infinite alternate ease-in-out;
}

@keyframes balloons1 {
    from {
        transform: translateY(25%);
    }
    to {
        transform: translateY(20%);
    }
}

@keyframes balloons2 {
    from {
        transform: translateY(10%);
    }
    to {
        transform: translateY(20%);
    }
}

.loader {
    z-index: 10000;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
}

</style>