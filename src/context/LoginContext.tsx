import React, {
  useState,
  createContext,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react'
import { LoginContextInterface } from './LoginContextInterface'

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
  dayHr: '',
  day: '',
  dateNum: '',
  month: '',
  pmAM: '',
  timer: '',
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
  const { pathname } = window.location
  const pathArr = pathname.split('/')
  const initialUpperCase = pathArr.map((path: string) => {
    let firstWord: string = path[0]
    if (firstWord !== undefined) {
      firstWord = firstWord.toUpperCase()
    } else {
      firstWord = ''
    }
    return `${firstWord}${path.slice(1)}`
  })
  const title = initialUpperCase.join('')

  useEffect(() => {
    if (title === '') {
      document.title = 'DrugStoc TPN Admin | Home'
    } else {
      document.title = `${title} | DrugStoc TPN Admin`
    }
  }, [pathname])

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

      const response = await fetch(`/api/v2/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credential),
      })

      if (response.status === 400 || response.status === 404) {
        setErr('Bad Request. Try again')
      }

      if (!response.ok) {
        throw new Error('Authentication failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)

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
    setLoggedIn(false)
    window.location.assign('/login')
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

  const date = new Date()
  const datetoString = date.toString()
  const datetoArr = datetoString.split(' ')
  datetoArr.splice(5)
  const time = datetoArr[datetoArr.length - 1]
  const timetoArr = time.split(':')
  const hr = +timetoArr[0]

  let dayHr: undefined | string
  if (hr > 0 && hr < 12) {
    dayHr = 'Morning'
  } else if (hr >= 12 && hr < 17) {
    dayHr = 'Afternoon'
  } else if (hr >= 17 && hr <= 20) {
    dayHr = 'Evening'
  } else {
    dayHr = 'Night'
  }

  const dateString: string = date.toDateString()
  const dateArr: string[] = dateString.split(' ')
  const dateLocale = date.toLocaleString()
  const day: string = dateArr[0]
  const dateNum: string = dateArr[2]
  const month: string = dateArr[1]
  const dateLocaleArr = dateLocale.split(' ')
  const timeLocale = dateLocaleArr[1]
  const pmAM = dateLocale.split(' ')[2]
  const timeLocaleArr = timeLocale.split(':')
  timeLocaleArr.splice(2)
  timeLocaleArr.join('')
  const timer = timeLocaleArr.join(':')

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
        dayHr,
        day,
        dateNum,
        month,
        pmAM,
        timer,
      }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContext
export { LoginProvider }
