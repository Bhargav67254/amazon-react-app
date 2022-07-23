import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import { useStateValue } from "./components/Stateprovider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
    });
  }, [user, dispatch]);
  return (
    <Router>
      {!user ? (
        <LoginPage />
      ) : (
        <Container>
          <Header />
          <Wrapper>
            <Switch>
              <Route exact path={"/cart"}>
                <CheckoutPage />
              </Route>
              <Route exact path={"/"}>
                <HomePage />
              </Route>
            </Switch>
          </Wrapper>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  max-width: 1330px;
  overflow-x: hidden;
`;
