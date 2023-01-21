<template>
  <nav class="flex border-b-2 pb-4 mx-10 min-w-mx pt-4 justify-between min-w-fit">
    <div class="flex">
      <img src="@/assets/images/cloud.jpeg" class="w-[100px] h-[50px]" alt="">
      <h1 class=" text-2xl capitalize pt-2 pl-2"
        :class="[{'max-[484px]:hidden': isAuthenticated}]">
        weather forecast
      </h1>
    </div>
    <div>
      <Button v-if="isAuthenticated" text="Logout" :class-names="buttonClasses"></Button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const buttonClasses: string[] = ['border', 'py-1', 'px-4', 'border-r-4', 'border-b-4', 'border-black', 'hover:bg-gray-400']
const isAuthenticated = ref<boolean>(!false)
</script>