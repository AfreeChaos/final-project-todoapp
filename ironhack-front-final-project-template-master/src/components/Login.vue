<script setup>
  import { ref } from 'vue'
  import { supabase } from '../api/supabase'
  import router from '../router';

  const loading = ref(false);
  const email = ref('');
  const password = ref('')

  const handleLogin = async () => {
    try {
      loading.value = true
      await supabase.auth.signIn({
        email: email.value,
        password: password.value,
      })
      router.push({path: '/home'})
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading.value = false
    }
  }
</script>

<template>
    <section>
        <img src="../assets/to-do.png" alt="" style="height:280px; width:280px; position: absolute; display: inline-block; top: 90px;">
        <div class="container1">
            <form @submit.prevent="handleLogin">
                <div>
                    <p class="description">Esto es un texto random.</p>
                    <div class="user">
                        <p style="padding-bottom: 8px">User</p>
                        <input class="inputField" type="email" placeholder="Type your email..." v-model="email" />
                    </div>      
                    <div class="user">
                        <p style="padding-bottom: 8px">Password</p>
                        <input class="inputField" type="password" placeholder="Type your password..." v-model="password" />
                    </div>
                    <div class="button">
                        <input
                        type="submit"
                        class="login-button"
                        :value="loading ? 'Loading...' : 'LOG IN'"
                        :disabled="loading"
                        />
                    </div>
                    <div class="no-account">
                        <p style="padding-right: 32px">Don’t have an account yet?</p>
                        <router-link to="/signup" class="link">Sign up</router-link>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap');
section {
    font-family: 'Quicksand';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 228px;
}
.container1{
    width: 502px;
    height: 568px;
    border: 2px solid black;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.description {
    font-size: 24px;
    text-align: center;
}
.user {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    padding: 12px 0 12px 0;
}
.inputField {
    height: 40px;
    border: black 1px solid;
    font-size: 16px;
    font-weight: 200;
    border-radius: 8px;
    padding-left: 8px;
}
.button {
    display: flex;
    justify-content: center;
}
.login-button {
    width: 162px;
    height: 56px;
    font-size: 20px;
    font-weight: 500;
    background-color: #FA604A;
    border-radius: 16px;
    border: 2px solid black;
    margin: 20px 0 32px 0;
}
.no-account {
    display: flex;
    flex-direction: row;
}
.link {
    font-weight: 600;
    text-decoration:underline;
}
</style>