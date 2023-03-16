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
  const afterLastDot = email.lastIndexOf('.') + 2
  const navigate = useNavigate()
  const handleClick = (): void => {
    if (email === '' || password === '') {
      navigate('/login')
    } else {
      navigate('/admin/overview')
    }
  }
  const supportsAutoComplete = 'autofill' in document.createElement('input')
  const autoCompleteValue = supportsAutoComplete ? 'new-password' : 'off'
  const checkEmail =
    email.includes('@') &&
    email.includes('.') &&
    email.includes(email[afterLastDot]) &&
    email.trim().length >= 12
  const checkEmailPassword = checkEmail && password !== ''

  if (loggedIn === true) {
    return <Navigate to="/dashboard" />
  }

  return (
    <Motion>
      <Box className="login-body">
        <Box className="login-card">
          <Box className="login-box">
            {/* @ts-ignore */}
            <Heading className="login-heading" fontFamily="defaultFontFamily">
              Welcome back
            </Heading>
            <Box className="login-text">
              <Text className="login-firstText">
                Enter your email address and password to sign in to your
                account.
              </Text>
              <Text className="login-secondText">
                Enter your email address and password
              </Text>
            </Box>

            <FormControl as="form">
              <FormLabel htmlFor="email" color="brand.300">
                {email.length !== 0 && !checkEmail
                  ? 'Email is invalid'
                  : email === ''
                    ? validationMessage
                    : error}
              </FormLabel>
              <Input
                className="login-input"
                type="email"
                onChange={handleEmailChange}
                placeholder="email or phone number"
                value={email}
                autoComplete={autoCompleteValue}
                id="email"
                mb={7}
              />
              {password === '' ? (
                <FormLabel
                  htmlFor="password"
                  color="brand.300"
                  style={{
                    visibility: password === '' ? 'visible' : 'hidden',
                    position: 'relative',
                    bottom: 10,
                  }}>
                  {validationMessage.replace('Email', 'Password')}
                </FormLabel>
              ) : null}
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
              <Box onClick={checkEmailPassword ? handleClick : undefined}>
                {err !== '' ? (
                  <FormLabel sx={{ color: 'brand.300' }}>
                    Bad Request. Try again
                  </FormLabel>
                ) : null}
                <Button
                  type="submit"
                  w="full"
                  bgColor={checkEmailPassword ? 'brand.50' : 'brand.500'}
                  color={checkEmailPassword ? 'brand.600' : 'brand.400'}
                  cursor={checkEmailPassword ? 'pointer' : 'not-allowed'}
                  h="44px"
                  fontFamily="defaultFontFamily"
                  _hover={{
                    opacity: checkEmailPassword ? undefined : 0.5,
                    bgColor: checkEmailPassword ? 'brand.900' : undefined,
                  }}>
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
