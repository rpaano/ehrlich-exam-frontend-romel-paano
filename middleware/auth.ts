import { User } from "~~/data"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { push } = useRouter()
  const cookieToken = useCookie('token')

  if( typeof cookieToken.value === 'undefined' ) {
    cookieToken.value = ""
  }

  if(cookieToken.value === "") {
    push('/')
  }

  const { login } = useAuth()
  const { user } = <any> await login()
  useUser().value = user

  useLogoutButton().value = true
})