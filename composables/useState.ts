export const useToken = () => useState<string>('token', () => "")
export const useLogoutButton = () => useState<boolean>('logout-button', () => false)
