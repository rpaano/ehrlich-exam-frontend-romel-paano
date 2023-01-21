<script setup lang="ts">
const { logout } = useAuth()
const router = useRouter()

const buttonClasses: string[] = [
  'border', 'py-1', 'px-4', 'border-r-4',
  'border-b-4', 'border-black', 'hover:bg-gray-400'
]

const userLogout = () => {
  logout()
  router.push({ path: "/" });
}
</script>

<template>
  <Button text="Logout" :class-names="buttonClasses" @click="() => userLogout()"></Button>
</template>