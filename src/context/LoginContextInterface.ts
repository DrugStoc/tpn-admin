interface LoginContextInterface {
  email: string
  password: string
  error: string
  err: string
  showTextPassword: boolean
  textPasswordType: string
  loggedIn: boolean | undefined
  validationMessage: string
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement> | any) => Promise<void>
  handleLogoutClick: () => void
  showPassword: () => void
  eyeWatchIcon: JSX.Element
  dayHr: string
  day: string
  dateNum: string
  month: string
  pmAM: string
  timer: string
  daytimer: any
  dayTimer: any
  dayTime: any
  showPasswordIcon: boolean | undefined
  handleFocus: () => void
  handleBlur: () => void
}

export type { LoginContextInterface }
