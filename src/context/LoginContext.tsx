import React, {
  useState,
  createContext,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react'
import { LoginContextInterface } from './LoginContextInterface'
import { BASE_URL_V2 as V2 } from '../config/baseURL'

const LoginContext = createContext<LoginContextInterface>({
  email: '',
  password: '',
  error: '',
  err: '',
  showTextPassword: false,
  textPasswordType: 'password',
  loggedIn: undefined,
  validationMessage: '',
  handleEmailChange: () => {},
  handlePasswordChange: () => {},
  handleSubmit: async () => {},
  handleLogoutClick: () => {},
  showPassword: () => {},
  eyeWatchIcon: <></>,
  showPasswordIcon: false,
  handleFocus: () => {},
  handleBlur: () => {},
})

const LoginProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [showTextPassword, setShowTextPassword] = useState<boolean>(false)
  const [textPasswordType, setTextPasswordType] = useState<string>('password')
  const [loggedIn, setLoggedIn] = useState<boolean | undefined>(false)
  const [validationMessage, setValidationMessage] = useState<string>('')
  const [err, setErr] = useState('')
  const [showPasswordIcon, setShowPasswordIcon] = useState<boolean>(false)
  const handleFocus = (): void => setShowPasswordIcon(true)
  const handleBlur = (): void => setShowTextPassword(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token != null) {
      setLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    if (err !== '') {
      const timeoutId = setTimeout(() => {
        setErr('')
      }, 5000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [err])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  const showPassword = (): void => {
    if (!showTextPassword) {
      setShowTextPassword(true)
      setTextPasswordType('text')
    } else {
      setShowTextPassword(false)
      setTextPasswordType('password')
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      const credential = {
        email,
        password,
      }

      if (
        (document.querySelectorAll('input')[0].value === '' &&
          email.trim().length === 0) ||
        (document.querySelectorAll('input')[1].value === '' &&
          password.trim().length === 0) ||
        (!email.includes('@') && !email.includes('.'))
      ) {
        if (document.querySelectorAll('input')[0].value === '') {
          setValidationMessage('Email is required')
        } else if (document.querySelectorAll('input')[1].value === '') {
          setValidationMessage('Password is required')
        }
      }

      const response = await fetch(`${V2}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credential),
      })

      if (
        response.status === 400 ||
        response.status === 401 ||
        response.status === 403
      ) {
        setErr('Bad Request. Try again')
      }

      if (!response.ok) {
        throw new Error('Authentication failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)
      localStorage.setItem('chakra-ui-color-mode', 'light')

      if (data.token === undefined) {
        setLoggedIn(undefined)
      } else {
        setLoggedIn(true)
      }
    } catch (event) {
      if (email.trim().length > 0) {
        setError('Email or Password is Incorrect')
      }
    }
  }

  const handleLogoutClick = (): void => {
    localStorage.removeItem('token')
    localStorage.removeItem('lastName')
    setLoggedIn(false)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (window.history?.pushState) {
      window.history.pushState(null, '', '/login')
    } else {
      window.location.assign('/login')
    }
  }

  const eyeWatchIcon = (
    <div onClick={showPassword}>
      {showTextPassword ? (
        <img
          className="login-input-show-hide-img"
          src="https://res.cloudinary.com/bizstak/image/upload/v1678128269/opened-eye_cfytw0.svg"
          width={24}
          height={24}
          alt="eye opened"
        />
      ) : (
        <img
          className="login-input-show-hide-img"
          src="https://res.cloudinary.com/bizstak/image/upload/v1678128224/closed-eye_giryen.svg"
          width={24}
          height={24}
          alt="eye closed"
        />
      )}
    </div>
  )

  return (
    <LoginContext.Provider
      value={{
        email,
        password,
        error,
        err,
        showTextPassword,
        textPasswordType,
        loggedIn,
        validationMessage,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
        handleLogoutClick,
        showPassword,
        eyeWatchIcon,
        showPasswordIcon,
        handleFocus,
        handleBlur,
      }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext
export { LoginProvider }
