
<script setup lang="ts">
import auth from '~~/middleware/auth'

const user = useUser()
const { go: goRoute } = useRouter()
const { WEATHER_APP_SECRET } = useRuntimeConfig()

const back = () => {
  goRoute(-1)
}

function formatDate(date: any) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [month, day, year].join('/');
}

const { data: weather, error } = useAsyncData("city-weather", async () => {
  let responce

  try {
    responce = <any>await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mandaue`, {
      params: {
        units: "imperial",
        appid: WEATHER_APP_SECRET,
      }
    })
  } catch (error) {

  }

  return responce
})

function sample() {
  console.log(weather.value.weather[0].description);

}


definePageMeta({
  middleware: [auth]
})
</script>


<template>
  <section class="flex">
    <div class="md:mx-auto w-[700px] h-[200px] mt-24 mx-10">
      <table class="table-auto text-left w-full border-y-4 border-black">
        <thead class="">
          <tr class="bg-gray-400 ">
            <th class="border-black border-x-4 pl-4">Date</th>
            <th class="border-black border-x-4 pl-4"></th>
            <th class="border-black border-x-4 pl-4 max-[788px]:hidden"></th>
            <th class="border-black border-x-4 pl-4  max-[750px]:hidden"></th>
            <th class="border-black border-x-4 pl-4 max-[772px]:hidden"></th>
            <th class="border-black border-x-4 pl-4 max-[788px]:hidden"></th>
          </tr>
        </thead>
        <thead>
          <tr class="bg-gray-200">
            <th class="border-black border-x-4 px-4">mm/dd/yyyy</th>
            <th class="border-black border-x-4 px-4">Temp(F)</th>
            <th class="border-black border-x-4 px-4 max-[788px]:hidden">Description</th>
            <th class="border-black border-x-4 px-4 max-[750px]:hidden">Main</th>
            <th class="border-black border-x-4 px-4 max-[772px]:hidden">Pressure</th>
            <th class="border-black border-x-4 px-4 max-[788px]:hidden">Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr class="last-child:bg-gray-200">
            <td class="border-black border-x-4 px-4 ">{{ formatDate(new Date) }}</td>
            <td class="border-black border-x-4 px-4">{{ weather.main.temp }}</td>
            <td class="border-black border-x-4 px-4 max-[788px]:hidden">{{ weather.weather[0].description }}</td>
            <td class="border-black border-x-4 px-4 max-[750px]:hidden">{{ weather.weather[0].main }}</td>
            <td class="border-black border-x-4 px-4 max-[772px]:hidden">{{ weather.main.pressure }}</td>
            <td class="border-black border-x-4 px-4 max-[788px]:hidden">{{ weather.main.humidity }}</td>
          </tr>
        </tbody>
      </table>

      <div class="w-full flex justify-end">
        <Button text="back" class="  mt-8 border border-r-4 border-b-4 border-black px-3 py-1" @click="() => back()" />
      </div>
    </div>

  </section>
</template>

<style scoped>

</style>