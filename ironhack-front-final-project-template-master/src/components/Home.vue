<template>
  <section>
    <div>    
        <div class="section1">
            <nav class="menu">
                <img src="../assets/lista-de-quehaceres.png" alt="" style="width: 124px; margin-top: 80px; margin-bottom: 80px;">
                <ul class="nav">
                    <router-link to="/home" class="linkselect">HOME</router-link>
                    <router-link to="/home" class="link">MEMBERS</router-link>
                    <router-link to="/home" class="link">CALENDAR</router-link>
                    <router-link to="/home" class="link">SETTINGS</router-link>
                    <hr class="link">
                    <p class="link">MY BOARDS</p>
                    <router-link to="/home" class="link">To-Do Project | Tasks</router-link>
                </ul>
            </nav>
            <div>
                <div>
                    <div class="search-bar">
                        <form class="form-inline">
                            <input class="search-form" type="search" placeholder="Search..." aria-label="Search">
                            <button class="search-btn" type="submit">Search</button>
                        </form>
                        <div>
                            <img src="../assets/profile-pic1.avif" alt="" style="width: 40px; border-radius: 50%; margin-left: 16px;">
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="title1">Private space</h1>
                    <hr style="background-color: #DDDCE0; height: 1px; margin: 16px;">
                </div>
                <div>
                    <h2 class="title2">My boards</h2>
                    <div class="boards">
                        <img src="../assets/wallpaper.jpeg" alt="">
                        <div class="title3">
                            <router-link to="/home" class="link">To-Do Project | Tasks</router-link>
                            <img src="../assets/gold-star.png" alt="" style="width: 16px; height: 16px;">
                        </div>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </section>
</template>

<script setup>

</script>

<style scoped>
.section1 {
    display: flex;
    flex-direction: row;
}
.menu {
    width: 280px;
    height: 100vh;
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
.search-bar {
    width: 100vh;
    margin: 24px;
    display: flex;
    justify-content: space-between;
}
.search-form {
    height: 40px;
    width: 320px;
    border: 1px #DDDCE0 solid;
    border-radius: 8px;
    padding: 20px;
    margin-right: 8px;
    font-weight: 300;
}
.search-btn {
    width: 100px;
    height: 40px;
    border: 1px #4A749B solid;
    border-radius: 8px;
    color: #4A749B;
    font-weight: 300;
}
.title1 {
    margin: 24px;
    font-size: 24px;
    font-weight: 600;
}
.title2 {
    margin: 24px;
    font-size: 20px;
    font-weight: 600;
}
.boards {
    margin: 24px;
    width: 320px;
}
.title3 {
    display: flex;
    align-content: center;
    margin: 16px 16px 16px 0;
    justify-content: space-between;
}
</style>