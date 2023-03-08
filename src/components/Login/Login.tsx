/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import React, { useContext } from 'react'
import Motion from '../shared/Motion/Motion'
import { Navigate, useNavigate } from 'react-router-dom'
import LoginContext from '../../context/LoginContext'
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Box,
  Button,
} from '@chakra-ui/react'

const Login = (): JSX.Element => {
  const {
    error,
    loggedIn,
    validationMessage,
    err,
    email,
    textPasswordType,
    handleEmailChange,
    handlePasswordChange,
    password,
    eyeWatchIcon,
  } = useContext(LoginContext)
  if (loggedIn === true) {
    return <Navigate to="/dashboard" />
  }
  const emailDotIndex = +email.indexOf('.') + 1
  const emailIndex = email[emailDotIndex]
  const navigate = useNavigate()

  const handleClick = (): void => {
    if (email === '' || password === '') {
      navigate('/login')
    } else {
      navigate('/dashboard/overview')
    }
  }

  return (
    <Motion>
      <Box className="login-body">
        <Box className="login-card">
          <Box className="login-box">
            {/* @ts-ignore */}
            <Heading className="login-heading">Welcome back</Heading>
            <Box className="login-text">
              <Text className="login-firstText">
                Enter your email address or password to sign in to your account.
              </Text>
              <Text className="login-secondText">
                Enter your email address or password
              </Text>
            </Box>

            <FormControl as="form">
              {email === '' ? (
                <FormLabel htmlFor="email">{validationMessage}</FormLabel>
              ) : null}

              {email !== '' && password !== '' ? null : (
                <FormLabel className="login-email-error">{error}</FormLabel>
              )}
              {email === '' ||
              (email.includes('@') &&
                email.includes('.') &&
                email.includes(emailIndex) &&
                email.trim().length > 12) ? null : (
                <Box className="login-email-error">Email is invalid</Box>
                )}
              <FormLabel className="visibility-hidden" htmlFor="email">
                Email address
              </FormLabel>
              <Input
                className="login-input"
                type="email"
                onChange={handleEmailChange}
                placeholder="email or phone number"
                value={email}
                id="email"
              />
              <FormLabel className="visibility-hidden" htmlFor="password">
                Password
              </FormLabel>
              <Box className="login-email-box">
                <Input
                  className="login-input"
                  onChange={handlePasswordChange}
                  value={password}
                  type={textPasswordType}
                  placeholder="password"
                  id="password"
                />
                {eyeWatchIcon}
              </Box>
              <Box onClick={handleClick}>
                {err !== '' ? (
                  <FormLabel sx={{ color: 'brand.300' }}>
                    Bad Request. Try again
                  </FormLabel>
                ) : null}
                <Button
                  type="submit"
                  width="100%"
                  mt="4"
                  bg="#d9d9d9"
                  color="#000"
                  h="44px"
                  fontFamily="Poppins"
                  _hover={{ bg: 'brand.50', color: '#fff' }}>
                  Login
                </Button>
              </Box>
              <Text className="login-footer">
                THE PHARMACY NETWORK (TPN) is Powered By DrugStoc.
              </Text>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Motion>
  )
}

export default Login