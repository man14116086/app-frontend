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
import React, { useCallback, useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProviders"
import { LandingPageMode } from "../../types"

interface SignInProps {
  handleMode: (mode: LandingPageMode) => void
}

export default function SignIn({ handleMode }: SignInProps) {
  const { signIn } = useContext(AuthContext)
  const history = useHistory()

  const handleSignIn = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // @ts-ignore
      const { email, password } = e.currentTarget.elements
      const ok = await signIn({
        email: email.value,
        password: password.value,
      })

      if (ok) return history.replace("/feeds")

      // TODO: SIGN IN - ERROR HANDLING
    },
    [signIn, history]
  )

  return (
    <Box
      as="form"
      p="8"
      boxShadow="lg"
      width={["85%", "400px"]}
      bg="white"
      onSubmit={handleSignIn}
    >
      <Heading textAlign="center">Sign In</Heading>
      <Stack spacing={2} mt="6">
        <FormControl>
          <FormLabel htmlFor="email">Email or username</FormLabel>
          <Input isRequired type="text" id="email" name="email" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            isRequired
            name="password"
            type="password"
            id="password"
            aria-describedby="password-helper-text"
          />
        </FormControl>

        <Button
          _focus={{ outline: "none" }}
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
            onClick={() => handleMode(LandingPageMode.SIGN_UP)}
          >
            Sign Up
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}