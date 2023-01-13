<script setup>
  import { ref } from 'vue'
  import { useUserStore } from '../store/user'

  const loading = ref(false)
  const email = ref('')
  const password = ref('')

  const handleSignUp = async () => {
    try {
      loading.value = true
        await useUserStore().signUp (
        email.value,
        password.value
      )
    //   if (error) throw error
      alert('Check your email for the login link!')
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
        <img src="../assets/lista-de-quehaceres.png" alt="" style="height:162px; width:162px; position: absolute; display: block; top: 147px;">
        <div class="container1">
            <form @submit.prevent="handleSignUp">
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
                        :value="loading ? 'Loading' : 'LOG IN'"
                        :disabled="loading"
                        />
                    </div>
                    <div class="no-account">
                        <p style="padding-right: 32px">Do you already have an account?</p>
                        <router-link to="/login" class="link">Log in</router-link>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 228px;
}
.container1{
    width: 534px;
    height: 568px;
    border-radius: 32px;
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.description {
    font-size: 24px;
}
.user {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    padding: 12px 0 12px 0;
}
.inputField {
    height: 32px;
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
    color: white;
    font-weight: 500;
    background-color: hsl(0, 99%, 67%);
    border-radius: 16px;
    margin: 20px 0 32px 0;
}
.no-account {
    display: flex;
    flex-direction: row;
}
.link {
    color: #4A749B;
}
</style>