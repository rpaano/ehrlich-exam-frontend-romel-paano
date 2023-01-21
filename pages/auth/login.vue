<script setup lang="ts">
const { query: routeQuery } = useRoute()

const email = routeQuery.email
const token = routeQuery.token
const type = routeQuery.type

const { login } = useAuth()

</script>

<template>
</template>