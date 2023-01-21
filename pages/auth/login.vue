<template>
  <div>
    <form @submit.prevent="() => submit()">
      <label for="email">Email</label>
      <input name="email" type="email" v-model="emailCompute" />
      <label for="password">Password</label>
      <input name="password" type="password" v-model="passwordCompute"/>
      <input type="submit" value="Submit">
    </form>
  </div>

</template>

<script setup lang="ts">
const email = ref<string>("")
const password = ref<string>("")
const { login } = useAuth()

const emailCompute = computed({
  get() {
    return email.value
  },
  set(value) {
    // Add validation

    email.value = value
  }
})

const passwordCompute = computed({
  get() {
    return password.value
  },
  set(value) {
    // Add validation

    password.value = value
  }
})

const submit = () => {
  console.log(login({email: email.value, password: password.value}))
}
</script>