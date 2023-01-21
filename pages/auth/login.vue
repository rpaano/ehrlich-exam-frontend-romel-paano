<script setup lang="ts">
import { setToken } from '~~/store/AuthState';

const { query: routeQuery } = useRoute()

setToken(<string>routeQuery.token)

navigateTo('/screen')
</script>

<template>
</template>