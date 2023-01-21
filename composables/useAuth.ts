import { ID, Login } from '@/data'

const Login = () => {
  const { apiURL, apiBase } = useRuntimeConfig()

  const login = async (cred: Login) => {
    return await $fetch(`${apiURL}${apiBase}/login`, {
      method: "POST",
      body: {
        ...cred
      },
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

  return { login, logout, refreshToken }
}

export default Login