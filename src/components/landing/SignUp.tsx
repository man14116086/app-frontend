import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/core"
import React, { useCallback, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProviders"
import { LandingPageMode } from "../../types"

interface SignUpProps {
  handleMode: (mode: LandingPageMode) => void
}

export default function SignUp({ handleMode }: SignUpProps) {
  const history = useHistory()
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")

  const handleSignUp = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      if (password !== verifyPassword) return

      const ok = await signUp({
        email,
        password,
        name,
      })

      if (ok) return history.replace("/feeds")

      // TODO: SIGN UP - ERROR HANDLING
    },
    [name, email, password, verifyPassword, history, signUp]
  )

  // CONDITION
  const isDisabled =
    name.length === 0 || email.length === 0 || password.length === 0

  const verifyFalied =
    verifyPassword.length >= password.length && password !== verifyPassword

  return (
    <Box
      as="form"
      p="8"
      boxShadow="lg"
      width={["85%", "400px"]}
      bg="white"
      onSubmit={handleSignUp}
    >
      <Heading textAlign="center">Sign Up</Heading>
      <Stack spacing={2} mt="6">
        <FormControl>
          <FormLabel htmlFor="Full Name">Full Name</FormLabel>
          <Input
            isRequired
            type="text"
            id="Full Name"
            autoComplete="none"
            placeholder={"Your Full Name..."}
            value={name}
            onChange={({ target }: any) => setName(target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email or username</FormLabel>
          <Input
            isRequired
            type="email"
            id="email"
            placeholder="Your email..."
            value={email}
            onChange={({ target }: any) => setEmail(target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            isRequired
            type="password"
            id="password"
            placeholder="Your password..."
            value={password}
            onChange={({ target }: any) => setPassword(target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="verifyPassword">Verify Password</FormLabel>
          <Input
            isRequired
            errorBorderColor="red.400"
            id="verifyPassword"
            type="password"
            placeholder="Verify your password"
            value={verifyPassword}
            isInvalid={verifyFalied}
            onChange={({ target }: any) => setVerifyPassword(target.value)}
          />
        </FormControl>

        <Button
          _focus={{ outline: "none" }}
          isDisabled={isDisabled || verifyFalied}
          type="submit"
          mt="4"
          variant="solid"
          variantColor={"purple"}
        >
          Submit
        </Button>

        <Flex justifyContent="space-between" mt="4">
          <Button
            _focus={{ outline: "none" }}
            leftIcon={"arrow-back"}
            variant="ghost"
            variantColor="purple"
            onClick={() => handleMode(LandingPageMode.LANDING)}
          >
            Back
          </Button>
          <Button
            _focus={{ outline: "none" }}
            rightIcon="arrow-forward"
            variant="ghost"
            variantColor="purple"
            onClick={() => handleMode(LandingPageMode.SIGN_IN)}
          >
            Or Sign In
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}