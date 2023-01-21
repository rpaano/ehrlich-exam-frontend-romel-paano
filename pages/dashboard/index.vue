<template>
  <section class="flex">
    <div class="sm:mx-auto w-[500px] h-[200px] mt-24 mx-10">
      <Paragraph :text="user.name" class=" text-center"/>
      <div class="flex mt-4">
        <NuxtLink target="_blank" :href="user.github_link" class="text-center w-full" >{{ user.github_link }}</NuxtLink>
      </div>
      <div>
        <input type="text" >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import auth from '~~/middleware/auth';

const user = useUser()

definePageMeta({
  middleware: [auth]
})
</script>