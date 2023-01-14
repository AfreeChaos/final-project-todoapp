<template>
  <section>
    <div class="menu">
        <img src="../assets/lista-de-quehaceres.png" alt="" style="width: 124px; margin-top: 80px; margin-bottom: 80px;">
        <ul class="nav">
            <router-link to="/home" class="linkselect">HOME</router-link>
            <router-link to="/home" class="link">MEMBERS</router-link>
            <router-link to="/home" class="link">CALENDAR</router-link>
            <router-link to="/home" class="link">SETTINGS</router-link>
            <hr class="link">
            <p class="link">MY BOARDS</p>
            <router-link to="/home" class="link">TASKS</router-link>
        </ul>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
section {
    display: flex;
}
.menu {
    width: 320px;
    background-color: #FAECDA;
    border-radius: 0 32px 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nav {
    display: flex;
    flex-direction: column;
    padding: 24px;
    margin-bottom: 24px;
}
hr {
    height: 2px;
    background-color: black;
}
.linkselect {
    color: #4A749B;
    margin-bottom: 24px;
    font-weight: 500;
}
.link {
    margin-bottom: 24px;
    font-weight: 300;
}
</style>