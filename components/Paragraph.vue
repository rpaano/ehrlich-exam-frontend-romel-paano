<script setup lang="ts">
interface ParagraphProps {
  text: string,
  className?: string[]
}

const { text, className} = defineProps<ParagraphProps>()

</script>

<template>
  <p class="" :class="className">{{ text }}</p>
</template>