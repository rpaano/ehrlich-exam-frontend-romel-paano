export default defineNuxtRouteMiddleware((to, from) => {
  const { push } = useRouter()
  const cookieToken = useCookie('token')

  if( typeof cookieToken.value === 'undefined' ) {
    cookieToken.value = ""
  }

  if(cookieToken.value === "") {
    push('/')
  }
  useLogoutButton().value = true
})