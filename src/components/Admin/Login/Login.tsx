/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */

import { useContext, useState } from 'react'
import { HandleChangeFunc } from './LoginInterface'
import Motion from '../../shared/Motion/Motion'
// import './Login.css'
// import Card from '../../shared/Card/Card'
// import Button from '../../shared/Button/Button'
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
  Card,
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

  const cardStyles = useBreakpointValue({
    base: {},
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

  const add = {
    // marginInline: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
    boxShadow: '2px 8px 35px rgba(0, 0, 0, 0.05) !important',
    borderRadius: '10px !important',
    padding: '40px 60px',
  }

  return (
    <Motion>
      <Box className="login-body">
        {/* @ts-ignore */}
        <Card sx={{ cardStyles, ...add }}>
          <Heading
            color="brand.50"
            // className="heading"
            fontSize="30px"
            display="flex"
            justifyContent="flex-start"
            fontWeight="700"
            fontFamily="Poppins"
            mb="4"
            textAlign="left"
            alignItems="flex-start">
            Welcome back
          </Heading>
          <Box display="block">
            <Text
              color="brand.100"
              // className="firstText"
              mb="4"
              fontWeight="500"
              lineHeight="1.7"
              alignItems="flex-start">
              Enter your email address or password to sign in to your account.
            </Text>
            <Text
              color="brand.100"
              // className="secondText"
              fontWeight="500"
              lineHeight="1.7"
              mt="4"
              display="block"
              alignItems="flex-start">
              Enter your email address or password
            </Text>
          </Box>

          <FormControl
            w="90%" /* onSubmit={handleSubmit} */
            /* className="formControl" */
          >
            {email === '' ? (
              <FormLabel htmlFor="email">{validationMessage}</FormLabel>
            ) : null}
            {email === '' ||
            (email.includes('@') &&
              email.includes('.') &&
              email.includes(emailIndex) &&
              email.trim().length > 12) ? null : (
              <Box color="brand.300" w="90%">
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
              fontSize="16px"
              mb="2"
            />

            <FormLabel htmlFor="password" visibility="hidden">
              Password
            </FormLabel>
            <Box className="password" position="relative">
              <Input
                onChange={handlePasswordChange}
                value={password}
                type={textPasswordType}
                placeholder="password"
                id="password"
                bgColor="brand.200"
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
              {email !== '' && password !== '' ? null : <label>{error}</label>}
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
                _hover={{ bg: 'brand.600', color: 'black' }}
                fontFamily="Poppins">
                Login
              </Button>
              {/* </Button>
              <Button
                text="Login"
                buttonWidth="100%"
                buttonHeight="44px"
                linkText={undefined}
              /> */}
            </Box>
            <Text
              // className="lastText"
              mt="4"
              fontSize="10px"
              textAlign="center">
              THE PHARMACY NETWORK (TPN) is Powered By DrugStoc.
            </Text>
          </FormControl>
        </Card>
      </Box>
    </Motion>
  )
}

export default Login
