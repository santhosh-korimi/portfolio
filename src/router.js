import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AutoSuggestDemoPage, DatePickerDemoPage, DevCardPage, HomePage, OtpFormPage, ProjectsPage, ResumePage, TagInputDemo } from "./pages";


export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
        <Route path="/projects/otp-form" exact>
          <OtpFormPage />
        </Route>
        <Route path="/projects/datepicker" exact>
          <DatePickerDemoPage />
        </Route>
        <Route path="/resume" exact>
          <ResumePage />
        </Route>
        <Route path="/projects/taginput" exact>
          <TagInputDemo />
        </Route>
        <Route path="/projects/autosuggest" exact>
          <AutoSuggestDemoPage />
        </Route>
        <Route path="/developer-card" exact>
          <DevCardPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App