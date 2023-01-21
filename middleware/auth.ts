export default defineNuxtRouteMiddleware((to, from) => {
  const { push } = useRouter()
  const cookieToken = useCookie('token')

  if(!cookieToken.value) {
    push('/')
  }

  push(to)
})