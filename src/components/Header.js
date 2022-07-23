import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  function Signout() {
    auth.signOut().then(() => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
    });
  }
  return (
    <Container>
      <HeaderLeft>
        <Link to={"/"}>
          <img src="2.png" alt="" />
        </Link>
        <SearchBar>
          <input type="text" placeholder="Search" />
          <Search />
        </SearchBar>
      </HeaderLeft>
      <HeaderRight>
        <Wrap onClick={Signout} style={{ cursor: "pointer" }}>
          <span>Hello</span>
          <p>Sign Out</p>
        </Wrap>
        <Wrap>
          <span>Returns</span>
          <p>& Orders</p>
        </Wrap>
        <Wrapper to={"/cart"}>
          <Shopping />
          <p>{basket?.length}</p>
        </Wrapper>
      </HeaderRight>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #131921;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;
  width: 100%;
  position: sticky !important;
  top: 0;
  z-index: 100;
  overflow-y: hidden;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  img {
    width: 100px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 40px;
  width: 90%;
  input {
    outline: none;
    padding: 8px;
    width: 90%;
    background-color: whitesmoke;
    border: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
const Search = styled(SearchIcon)`
  color: white;
  background-color: #cd9042;
  font-size: 31px !important;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  text-decoration: none;
  text-align: center;
`;
const Wrap = styled.div`
  display: flex;
  margin: 0px 15px;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 10px;
    color: whitesmoke;
  }
  p {
    color: whitesmoke;
    font-size: 13px;
  }
  @media screen and (max-width: 360px) {
    p {
      font-size: 10px;
    }
  }
`;
const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: whitesmoke;
  text-decoration: none;
  span {
    color: whitesmoke;
    margin-right: 10px;
  }
`;
const Shopping = styled(ShoppingCartIcon)`
  color: white;
  margin: 0px 10px;
`;
