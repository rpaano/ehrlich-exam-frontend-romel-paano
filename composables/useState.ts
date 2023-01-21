import { User } from "~~/data"

export const useToken = () => useState<string>('token', () => "")
export const useLogoutButton = () => useState<boolean>('logout-button', () => false)
export const useUser = () => useState<any>('user', () => {})
