<script setup lang="ts">
const buttonClasses: string[] = [
  'border', 'py-1', 'px-4', 'border-r-4',
  'border-b-4', 'border-black', 'hover:bg-gray-400'
]

const userLogout = () => {
  alert("here")
}

</script>

<template>
  <Button text="Logout" :class-names="buttonClasses" @click="() => userLogout()"></Button>
</template>