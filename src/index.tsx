import {
  ColorModeProvider,
  CSSReset,
  theme,
  ThemeProvider,
} from "@chakra-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ColorModeProvider value="light">
      <CSSReset />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ColorModeProvider>
  </ThemeProvider>,
  document.getElementById("root")
)
