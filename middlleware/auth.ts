export default defineNuxtRouteMiddleware((to, from) => {

  const token: string|null = typeof window !== 'undefined' ? localStorage.getItem("token") : null

  if(token === null) {
    return navigateTo('/')
  }

  
})