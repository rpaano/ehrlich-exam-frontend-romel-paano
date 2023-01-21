<template>
  <nav class="flex border-b-2 pb-4 mx-10 min-w-mx pt-4 justify-between min-w-fit">
    <div class="flex">
      <img src="@/assets/images/cloud.jpeg" class="w-[100px] h-[50px]" alt="">
      <h1 class=" text-2xl capitalize pt-2 pl-2"
        :class="[{'max-[508px]:hidden': isAuthenticated}]">
        weather forecast
      </h1>
    </div>
    <div>
      <Logout v-if="isAuthenticated"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isAuthenticated = useLogoutButton()
</script>