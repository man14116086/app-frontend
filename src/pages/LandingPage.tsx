import { Flex, theme } from "@chakra-ui/core"
import React, { useState } from "react"
import Landing from "../components/landing"
import SignIn from "../components/landing/SignIn"
import SignUp from "../components/landing/SignUp"
import { LandingPageMode } from "../types"

export interface LandingPageProps { }

export default function LandingPage() {
  const [mode, setMode] = useState<LandingPageMode>(LandingPageMode.LANDING)

  const handleMode = (mode: LandingPageMode) => {
    setMode(mode)
  }

  const Component = ((mode: LandingPageMode) => {
    switch (mode) {
      case LandingPageMode.SIGN_IN:
        return SignIn
      case LandingPageMode.SIGN_UP:
        return SignUp
      default:
        return Landing
    }
  })(mode)

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg={theme.colors.purple[50]}
      direction="column"
      width="100%"
    >
      <Component handleMode={handleMode} />
    </Flex>
  )
}
// export default function LandingPage(props: LandingPageProps) {
//   return <Flex>LANDING PAGE</Flex>
// }
