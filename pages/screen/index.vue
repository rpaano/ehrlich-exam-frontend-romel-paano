<template>
  <section class="flex">
    <div class="sm:mx-auto w-[500px] h-[200px] mt-24 mx-10">
      <Paragraph :text="user.name" class=" text-center" />
      <div class="flex mt-4">
        <NuxtLink target="_blank" :href="user.github_link" class="text-center w-full">{{ user.github_link }}</NuxtLink>
      </div>
      <form @submit.prevent="sudmit">
        <div class="flex mt-10 justify-center">
          <input type="text" class="iconsearch border border-black w-[250px] rounded-3xl px-10 py-2" placeholder="City" v-model="cityInput">
        </div>
        <div class="flex mt-4 justify-center">
          <input type="submit" value="Display Weather"
            class="w-[150px] border border-b-4 border-r-4 border-black px-4 py-1 cursor-pointer">
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import auth from '~~/middleware/auth'

const user = useUser()
const cityInput = ref()
const { push } = useRouter()
const city = useCity()

const sudmit = async () => {
  city.value = cityInput.value
  await navigateTo("/screen/weather")
}

definePageMeta({
  middleware: [auth]
})
</script>

<style scoped>
.icon-search {
  position: relative;
}

.icon-search::before {
  content: '';
  background: url('@/assets/images/icons/search.svg') no-repeat 5% center / contain;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>