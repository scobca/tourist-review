<template>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,500;1,300&display=swap');
* {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
    background: black;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    font-family: 'IBM Plex Serif', serif;
    color: white;
    border-top: #FFE240 1px solid;
    border-bottom: #FFE240 1px solid;
    font-size: 2rem;
    padding-bottom: 0.5em;
}

.header > h1 {
    font-weight: 200;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
    margin-bottom: 4em;

    font-family: "IBM Plex Serif", serif;
    color: white;
    font-size: 2rem;
}

.menu > .button {
    border: #FFE240 1px solid;
    border-radius: 5px;
    width: 200px;
    text-align: center;
    padding-bottom: 7px;
    font-weight: 200;
}

.discriprion {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 2em;

    font-family: "IBM Plex Serif", serif;
    color: white;
    font-size: 1rem;
}

.discriprion > .h_wi, h2 {
    width: 40%;
    margin-bottom: 1em;
    font-weight: 200;
}

.discriprion > .h_wwc, h2 {
    width: 40%;
    margin-bottom: 1em;
    font-weight: 200;
}

.h_wwc > h2, .h_wi > h2 {
    border-bottom: #FFE240 1px solid;
    padding-bottom: 1em;
}
</style>
