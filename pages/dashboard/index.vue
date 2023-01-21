<template>
  <div>
    dashboard
  </div>
</template>

<script setup lang="ts">

import auth from '~~/middleware/auth';


definePageMeta({
  middleware: [auth]
})
</script>