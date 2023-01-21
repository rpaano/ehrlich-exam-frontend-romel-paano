<script setup lang="ts">
const welcomeMessage = ref<string>("Welcome to the weather forecast web application. Please use your Github account to user the application view the weather in your city.")
const buttonClasses: string[] = ['mt-12', 'border', 'py-2', 'px-4', 'border-r-4', 'border-b-4', 'border-black', 'hover:bg-gray-400', "sm:py-4"]
const paragrahplasses: string[] = ["sm:py-4"]


const gotoLogin = () => {
  navigateTo('auth/login')
}

</script>

<template>
  <section class="flex justify-cener ">
    <div class="sm:mx-auto w-[500px] h-[200px] mt-24 mx-10">
      <Paragraph :text="welcomeMessage" :class-name="paragrahplasses" />
      <Button text="Login" @click="() => gotoLogin()" :class-names="buttonClasses" />
    </div>
  </section>
</template>
