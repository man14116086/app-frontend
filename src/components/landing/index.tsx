import { Button, Flex, Heading, theme } from '@chakra-ui/core'
import React from "react"
import { LandingPageMode } from "../../types"
import { ReactComponent as LandingSvg } from "./svg/landing_svg.svg"

export interface LandingProps {
  handleMode: (mode: LandingPageMode) => void
}

export default function Landing({ handleMode }: LandingProps) {
  return (
    <Flex
      as="section"
      flex="1"
      width="100%"
      alignItems="center"
      px={["8", "16"]}
      direction={["column", "row"]}
      justifyContent={["center", "space-between"]}
    >
      <Flex
        direction={["column"]}
        order={[2, 1]}
        alignItems={["center", "flex-start"]}
      >
        <Heading size={"2xl"} color={theme.colors.purple[900]}>
          Talkwithcode
        </Heading>
        <Heading
          ml={[0, 3]}
          fontSize={"md"}
          color={theme.colors.purple[900]}
          opacity={0.84}
        >
          Learning by teaching other.
        </Heading>
        <Flex ml={[0, 3]} mt="4" flex="1">
          <Button
            onClick={() => handleMode(LandingPageMode.SIGN_UP)}
            size="md"
            variant="solid"
            variantColor="purple"
          >
            Sign Up
          </Button>
          <Button
            onClick={() => handleMode(LandingPageMode.SIGN_IN)}
            ml="3"
            variant="outline"
            variantColor="purple"
          >
            Sign In
          </Button>
        </Flex>
      </Flex>
      <Flex w={["100%", "60%"]} as="section" mb="8" order={[1, 2]}>
        <LandingSvg />
      </Flex>
    </Flex>
  )
}