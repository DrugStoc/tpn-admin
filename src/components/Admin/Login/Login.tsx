import React, { useContext, useState } from 'react'
import { HandleChangeFunc } from './LoginInterface'
import Motion from '../../shared/Motion/Motion'
import { Navigate, useNavigate } from 'react-router-dom'
import LoginContext from '../../../context/LoginContext'
import {
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'

const Login = (): JSX.Element => {
  const { error, loggedIn, validationMessage, err } = useContext(LoginContext)
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

  const handleClick = (): void => {
    if (email === '' || password === '') {
      navigate('/admin/login')
    } else {
      navigate('/')
    }
  }

  const cardStyles = useBreakpointValue({
    md: {
      width: '70%',
      height: '90vh',
      borderRadius: '0',
      boxShadow: 'none',
    },
    sm: {
      height: '100vh',
      width: '100%',
      borderRadius: '0',
    },
  })

  const cardLogin = {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    boxShadow: '2px 8px 35px rgba(0, 0, 0, 0.05) !important',
    borderRadius: '10px !important',
    padding: '40px 60px',
    backgroundColor: '#fff',
  }

  const fontSize = useBreakpointValue({ base: '14px', md: '16px' })

  return (
    <Motion>
      <Box className="login-body">
        <Box sx={{ cardStyles, ...cardLogin }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Heading
              color="brand.50"
              fontSize="30px"
              justifyContent="flex-start"
              fontWeight="700"
              fontFamily="Poppins"
              mb="4"
              textAlign="left"
              w="90%"
              alignItems="flex-start">
              Welcome back
            </Heading>
            <Box display="block" w="90%">
              <Text
                color="brand.100"
                mb="4"
                fontWeight="500"
                lineHeight="1.7"
                alignItems="flex-start">
                Enter your email address or password to sign in to your account.
              </Text>
              <Text
                color="brand.100"
                fontWeight="500"
                lineHeight="1.7"
                mt="4"
                display="block"
                alignItems="flex-start">
                Enter your email address or password
              </Text>
            </Box>

            <FormControl w="90%">
              {email === '' ? (
                <FormLabel htmlFor="email">{validationMessage}</FormLabel>
              ) : null}
              {email === '' ||
              (email.includes('@') &&
                email.includes('.') &&
                email.includes(emailIndex) &&
                email.trim().length > 12) ? null : (
                <Box color="brand.300" w="90%" position="relative" top={6}>
                  Email is invalid
                </Box>
                )}
              <FormLabel htmlFor="email" visibility="hidden">
                Email address
              </FormLabel>
              <Input
                type="email"
                onChange={handleEmailChange}
                placeholder="email or phone number"
                value={email}
                id="email"
                bg="brand.200"
                fontFamily="Poppins"
                display="block"
                borderRadius="4px"
                border="1px solid #f7f8f9"
                height="44px"
                textIndent="15px"
                outline="none"
                padding="8px"
                mb="2"
                fontSize={fontSize}
              />

              <FormLabel htmlFor="password" visibility="hidden">
                Password
              </FormLabel>
              <Box position="relative" mb={7} mt={-3}>
                <Input
                  onChange={handlePasswordChange}
                  value={password}
                  type={textPasswordType}
                  placeholder="password"
                  id="password"
                  bg="brand.200"
                  fontFamily="Poppins"
                  display="block"
                  borderRadius="4px"
                  border="1px solid #f7f8f9"
                  height="44px"
                  textIndent="15px"
                  outline="none"
                  padding="8px"
                  mb="2"
                  fontSize={fontSize}
                />
                <Box onClick={showPassword}>
                  {showTextPassword ? (
                    <img
                      style={{ position: 'absolute', top: 12, right: 20 }}
                      src="https://res.cloudinary.com/bizstak/image/upload/v1678128269/opened-eye_cfytw0.svg"
                      width={24}
                      height={24}
                      alt="eye opened"
                    />
                  ) : (
                    <img
                      style={{ position: 'absolute', top: 12, right: 20 }}
                      src="https://res.cloudinary.com/bizstak/image/upload/v1678128224/closed-eye_giryen.svg"
                      width={24}
                      height={24}
                      alt="eye closed"
                    />
                  )}
                </Box>
              </Box>
              <Box onClick={handleClick}>
                {email !== '' && password !== '' ? null : (
                  <label>{error}</label>
                )}
                {err !== '' ? (
                  <FormLabel>Bad Request. Try again</FormLabel>
                ) : null}
                <Button
                  type="submit"
                  width="100%"
                  mt="4"
                  bg="#d9d9d9"
                  color="#000"
                  h="44px"
                  _hover={{ bg: 'brand.50', color: '#fff' }}
                  fontFamily="Poppins">
                  Login
                </Button>
              </Box>
              <Text
                mt="4"
                fontSize="10px"
                textAlign="center">
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
