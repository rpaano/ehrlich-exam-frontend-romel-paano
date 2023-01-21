<template>
  <button class=" capitalize" :class="classNames">
    {{ text }}
  </button>
</template>

<script setup lang="ts">

interface ButtonProps {
  text: string
  classNames?: string[]
}

const { text, classNames } = defineProps<ButtonProps>()
</script>