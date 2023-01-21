import { ID, Login } from '@/data'

const Login = () => {
  const { apiURL, apiBase } = useRuntimeConfig()
  // const { data: user, refresh } = useAsyncData("login", () => $fetch("/api"))

  const login = async (cred: Login) => {
    return await $fetch(`${apiURL}${apiBase}/login`, {
      method: "POST",
      body: {
        ...cred
      },
    })
  }

  const register = async () => {
    await $fetch(`${apiURL}${apiBase}/register`, {
      method: "POST",
    })
  }

  const logout = async () => {
    await $fetch(`${apiURL}${apiBase}/logout`, {
      method: "DELETE",
    })
  }

  const refreshToken = async () => {
    await $fetch(`${apiURL}${apiBase}/refresh`, {
      method: "PUT",
    })
  }

  return { login, register, logout, refreshToken }
}

export default Login