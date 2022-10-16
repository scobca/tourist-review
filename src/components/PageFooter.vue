<template>
    <footer class="footer">
        <div class="footer__container container">
            <span class="copyright">
                &copy; 2022 - 2022 www.tourist-ru.web.app - All Rights Reserved.
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "PageFooter"
}
</script>

<style scoped>
    .footer {
        background: #ededed;
        width: 100%;
    }
    
    .footer__container {
        padding: 16px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .copyright {
        font-size: 12px;
        color: #858585;
        text-align: center;
    }

</style>