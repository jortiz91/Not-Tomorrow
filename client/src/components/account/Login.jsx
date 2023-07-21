import { useState } from 'react'

import { Box, TextField, Button, styled, Typography } from '@mui/material'

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`
const Image = styled('img')({
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0'
})

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  > button,
  & > p {
    margin-top: 20px;
  }
`
const LoginButton = styled(Button)`
  text-transform: none;
  background-color: green;
  color: white;
  height: 49px;
  border-radius: 2px;
`
const SignupButton = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  height: 49px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text = styled(Typography)`
  color: #878787;
  font-size: 15px;
`

const Login = () => {
  const imageURL =
    'https://mail.google.com/mail/u/0?ui=2&ik=ce82ce5eb2&attid=0.1&permmsgid=msg-f:1772014826130424747&th=18977618883ac3ab&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9snVO7my-GsLtXSmjvCYCRbuDbVKEbLG_vm0IH0stINbdOJt0HOHc_HYs7WukG5d4INW5pZ4_vBg42wgOqwvFNSyqsaKd8Rtf4FsfRnOUiJ54-4WQ1nd3JwOA&disp=emb&realattid=ii_lkc9ofn20'

  const [account, toggleAccount] = useState('login')
  const toggleSignup = () => {
    toggleAccount('Signup')
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup')
  }
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === 'login' ? (
          <Wrapper>
            <TextField variant="standard" label="Enter username" />
            <TextField variant="standard" label="Enter Password" />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{ textAlign: 'center' }}>Or</Text>
            <SignupButton onClick={() => toggleSignup()}>
              Create an account
            </SignupButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" label="Enter Name" />
            <TextField variant="standard" label="Enter Username" />
            <TextField variant="standard" label="Enter Password" />

            <SignupButton>Signup</SignupButton>
            <Text style={{ textAlign: 'center' }}>Or</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  )
}
export default Login
