<template>
    <section>
        <div>
            <div class="section1">
                <nav class="menu">
                    <img src="../assets/to-do.png" alt=""
                        style="width: 180px; margin-top: 40px; margin-bottom: 40px;">
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
                        <hr style="background-color: #FCE0D5; height: 1px; margin: 16px; border: none;">
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
                    <p class="tasks" v-for="task in taskStore.tasks" :key="task.id">
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
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap');
.section1 {
    display: flex;
    flex-direction: row;
    font-family: 'Quicksand';
}

.menu {
    width: 260px;
    height: 100vh;
    background-color: #fcf3ef;
    border-right: 1px solid #FCE0D5;
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
    height: 1px;
    background-color: #FCE0D5;
    border: none;
}

.linkselect {
    color: #FA604A;
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
    border: 1.5px #FA604A solid;
    border-radius: 8px;
    color: #FA604A;
    font-weight: 500;
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
.tasks {
    margin: 24px;
}
</style>