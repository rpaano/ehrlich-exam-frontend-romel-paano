export const setToken = (token: string) => {
  const setupToken = useToken()
  const cookieToken = useCookie('token')
  cookieToken.value = token
  setupToken.value = token
}