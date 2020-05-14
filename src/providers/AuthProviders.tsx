import React, { useEffect, useState } from "react"
import { fakeGetMeService, fakeSignInAndSignUpService } from "../faker"

const UNIQUE_KEY = "current_user"

export const AuthContext = React.createContext<IAuthContext>({
  singedUser: null,
  signIn: (user: ISignIn) => Promise.resolve(false),
  signUp: (user: ISingUp) => Promise.resolve(false),
  signOut: () => Promise.resolve(false),
})

export default function AuthProvider({ children }: any) {
  const [singedUser, setSignedUser] = useState<IUser | null>(null)

  const getMe = async (token: string | null) => {
    if (!token) return setSignedUser(null)
    const user = await fakeGetMeService(token)
    setSignedUser(user)
  }

  useEffect(() => {
    getMe(localStorage.getItem(UNIQUE_KEY))
  }, [])

  const signIn = async (user: ISignIn): Promise<boolean> => {
    try {
      const _user = await fakeSignInAndSignUpService(user)
      if (!_user) return Promise.resolve(false)

      setSignedUser(_user)
      // TODO: Next replace with cookies
      localStorage.setItem(UNIQUE_KEY, "MY_TOKEN")

      return Promise.resolve(true)
    } catch (error) {
      return Promise.resolve(false)
    }
  }

  const signUp = async (user: ISingUp): Promise<boolean> => {
    try {
      const _user = await fakeSignInAndSignUpService(user)
      if (!_user) return Promise.resolve(false)

      setSignedUser(_user)
      // TODO: Next replace with cookies
      localStorage.setItem(UNIQUE_KEY, "MY_TOKEN")

      return Promise.resolve(true)
    } catch (error) {
      return Promise.resolve(false)
    }
  }

  const signOut = async (): Promise<boolean> => {
    setSignedUser(null)
    return Promise.resolve(true)
  }

  return (
    <AuthContext.Provider
      value={{
        singedUser,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export interface ISingUp {
  email: string
  name: string
  password: string
}

export interface ISignIn {
  email: string
  password: string
}

export interface IUser {
  name: string
  username: string
  avatar: string
}

export interface IAuthContext {
  singedUser: IUser | null
  signIn: (user: ISignIn) => Promise<boolean>
  signUp: (user: ISingUp) => Promise<boolean>
  signOut: () => Promise<boolean>
}