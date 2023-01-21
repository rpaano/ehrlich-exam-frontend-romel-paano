<script setup lang="ts">

const { apiURL, githubLoginRedirect } = useRuntimeConfig()

const welcomeMessage = ref<string>("Welcome to the weather forecast web application. Please use your Github account to user the application view the weather in your city.")
const buttonClasses: string[] = ['border', 'py-2', 'px-4', 'border-r-4', 'border-b-4', 'border-black', 'hover:bg-gray-400', "sm:py-4"]
const paragrahplasses: string[] = ["sm:py-4", "mb-12"]

definePageMeta({
})
</script>

<template>
  <section class="flex">
    <div class="sm:mx-auto w-[500px] h-[200px] mt-24 mx-10">
      <Paragraph :text="welcomeMessage" :class-name="paragrahplasses" />
      <NuxtLink :href="`${apiURL}${githubLoginRedirect}`" :class="buttonClasses" >Login</NuxtLink>
    </div>
  </section>
</template>
