/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */

import { useContext, useState } from 'react'
import { HandleChangeFunc } from './LoginInterface'
import Motion from '../../shared/Motion/Motion'
import './Login.css'
import Card from '../../shared/Card/Card'
import Button from '../../shared/Button/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import LoginContext from '../../../context/LoginContext'
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react'

const Login = (): JSX.Element => {
  const { error, loggedIn, validationMessage, err /* handleSubmit */ } =
    useContext(LoginContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState<string>('')
  const [showTextPassword, setShowTextPassword] = useState<boolean>(false)
  const [textPasswordType, setTextPasswordType] = useState<string>('password')

  if (loggedIn === true) {
    return <Navigate to="/admin/login" />
  }

  const handleEmailChange: HandleChangeFunc = (e) => setEmail(e.target.value)
  const handlePasswordChange: HandleChangeFunc = (e) =>
    setPassword(e.target.value)

  const emailDotIndex = +email.indexOf('.') + 1
  const emailIndex = email[emailDotIndex]

  const showPassword = (): void => {
    if (!showTextPassword) {
      setShowTextPassword(true)
      setTextPasswordType('text')
    } else {
      setShowTextPassword(false)
      setTextPasswordType('password')
    }
  }

  const navigate = useNavigate()

  // testing purpose
  const handleClick = (): void => {
    if (email === '' || password === '') {
      navigate('/admin/login')
    } else {
      navigate('/')
    }
  }

  return (
    <Motion>
      <Box className="login-body">
        <Card className="card">
          {/* @ts-ignore */}
          <Heading className="heading">Welcome back</Heading>
          <Text className="firstText">
            Enter your email address or password to sign in to your account.
          </Text>
          <Text className="secondText">
            Enter your email address or password
          </Text>

          <FormControl className="formControl" /* onSubmit={handleSubmit} */>
            {email === '' ? (
              <FormLabel htmlFor="email">{validationMessage}</FormLabel>
            ) : null}
            {email === '' ||
            (email.includes('@') &&
              email.includes('.') &&
              email.includes(emailIndex) &&
              email.trim().length > 12) ? null : (
              <Box className={'errorCheck'}>Email is invalid</Box>
            )}
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              onChange={handleEmailChange}
              placeholder="email or phone number"
              value={email}
              id="email"
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <Box className="password">
              <Input
                onChange={handlePasswordChange}
                value={password}
                type={textPasswordType}
                placeholder="password"
                id="password"
              />
              <Box onClick={showPassword}>
                {showTextPassword ? (
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1678128269/opened-eye_cfytw0.svg"
                    width={24}
                    height={24}
                    alt="eye opened"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/bizstak/image/upload/v1678128224/closed-eye_giryen.svg"
                    width={24}
                    height={24}
                    alt="eye closed"
                  />
                )}
              </Box>
            </Box>
            <Box onClick={handleClick}>
              {email !== '' && password !== '' ? null : <label>{error}</label>}
              {err !== '' ? <FormLabel>Bad Request. Try again</FormLabel> : null}
              <Button
                text="Login"
                buttonWidth="100%"
                buttonHeight="44px"
                linkText={undefined}
              />
            </Box>
            <Text className="lastText">
              THE PHARMACY NETWORK (TPN) is Powered By DrugStoc.
            </Text>
          </FormControl>
        </Card>
      </Box>
    </Motion>
  )
}

export default Login
