<template>
    <page-header/>
    <router-view/>
    <page-footer/>
</template>

<script>

import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
export default {
    components: {PageFooter, PageHeader}
}
</script>

<style>

@font-face {
    font-family: 'IBM Plex Serif';
    font-weight: normal;
    src: local("sans-serif"),
    url('@/assets/fonts/IBM_Plex_Serif/IBMPlexSerif-Regular.ttf');
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    font-family: 'IBM Plex Serif', sans-serif;
    line-height: 1;
    color: #222;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

#app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}

:root {
    --accent: #FF6464;
    --accent-dark: #F56060;
}

* {
    box-sizing: border-box;
}

.container {
    max-width: 1920px;
    height: 100%;
    padding: 16px;
    margin: 0 auto;
}

h1 {
    font-size: 26px;
}

h2 {
    font-size: 18px;
}

button {
    border: none;
    background: transparent;
    cursor: pointer;
}

.btn {
    display: inline-block;
    border-radius: 12px;
    height: 48px;
    padding: 12px 16px;
    font-size: 18px;
    background: var(--accent);
    color: white;
}

.btn:hover {
    background: var(--accent-dark);
    color: white;
}

input {
    border: none;
    border-radius: 8px;
    height: 40px;
    padding: 8px 16px;
    font-size: 18px;
}

input[type='submit'] {
    cursor: pointer;
}

router-link,
a {
    text-decoration: none;
    color: inherit;
}

router-link:hover,
a:hover {
    color: var(--accent)
}

@media screen and (max-width: 1920px) {
    .container {
        max-width: 1620px;
    }
}

</style>
