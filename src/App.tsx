import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import EditorPage from "./pages/EditorPage"
import FeedsPage from "./pages/FeedsPage"
import LandingPage from "./pages/LandingPage"
import NotificationPage from "./pages/NotificationPage"
import ProfilePage from "./pages/ProfilePage"
import ReadFeedPage from "./pages/ReadFeedPage"

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/feeds" component={FeedsPage} />
        <Route exact path="/feeds/:slug" component={ReadFeedPage} />
        <Route exact path="/notifications" component={NotificationPage} />
        <Route exact path="/profiles/:username" component={ProfilePage} />
        <Route exact path="/editor" component={EditorPage} />
      </Switch>
    </BrowserRouter>
  )
}
