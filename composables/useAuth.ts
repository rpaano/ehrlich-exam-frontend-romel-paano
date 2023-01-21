import { ID, Login } from '@/data'

const Authentication = () => {
  const { apiURL, apiBase, authType } = useRuntimeConfig()

  const login = async (cred: Login) => {
    return await $fetch(`${apiURL}${apiBase}/login`, {
      method: "POST",
      body: {
        ...cred
      },
    })
  }

  const logout = async () => {
    const data: any = await $fetch(`${apiURL}${apiBase}/logout`, {
      headers: {
        Authorization: `${authType} ${useCookie('token').value}`,
        Accept: 'application/json',
      },
      method: "DELETE",
    })

    if(data.status = "success") {
      useCookie('token').value = null
    }

    useLogoutButton().value = false

    return data
  }

  const refreshToken = async () => {
    await $fetch(`${apiURL}${apiBase}/refresh`, {
      method: "PUT",
    })
  }

  return { login, logout, refreshToken }
}

export default Authentication