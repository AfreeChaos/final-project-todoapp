<template>
    <section>
        <div>
            <div class="section1">
                <nav class="menu">
                    <img src="../assets/lista-de-quehaceres.png" alt=""
                        style="width: 124px; margin-top: 80px; margin-bottom: 80px;">
                    <ul class="nav">
                        <router-link to="/home" class="link">HOME</router-link>
                        <router-link to="/home" class="link">MEMBERS</router-link>
                        <router-link to="/home" class="link">CALENDAR</router-link>
                        <router-link to="/home" class="link">SETTINGS</router-link>
                        <hr class="link">
                        <p class="link">MY BOARDS</p>
                        <router-link to="/tasks" class="linkselect">To-Do Project | Tasks</router-link>
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
                                <img src="../assets/profile-pic1.avif" alt=""
                                    style="width: 40px; border-radius: 50%; margin-left: 16px;">
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="title1">My Boards</h1>
                        <h2 class="title2">To-Do Project | Tasks</h2>
                        <hr style="background-color: #DDDCE0; height: 1px; margin: 16px;">
                    </div>
                    <div class="search-bar">
                        <form @submit.prevent="submitTask" class="form-inline">
                            <input v-model="title" class="search-form" type="search" placeholder="Search..."
                                aria-label="Search">
                            <button class="search-btn" type="submit">Go</button>
                        </form>
                        <div>
                            <img src="../assets/profile-pic1.avif" alt=""
                                style="width: 40px; border-radius: 50%; margin-left: 16px;">
                        </div>
                    </div>
                    <p v-for="task in taskStore.tasks" :key="task.id">
                        {{ task.title }}
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { useTaskStore } from '../store/task'
import { useUserStore } from '../store/user'
import { ref } from 'vue';
const taskStore = useTaskStore()
taskStore.fetchTasks();
const userStore = useUserStore()
const userId = userStore.user.id;
const title = ref("")
const submitTask = () => {
    console.log(userId);
    try {
        taskStore.createTask(title.value, userId)
        console.log(title.value);
    } catch (error) {
        console.log(error.message);
    }
}
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
</style>