import styled from "@emotion/styled";
import Link from "next/link";
const NavigatorBlock = styled.div`
  margin-bottom: 70px;
  .link {
    padding: 0 10px;
    /* height: 5px; */
    /* line-height: 0.8; */
    border-right: 1px solid black;
    &:last-child {
      border: none;
    }
  }
`;
const Navigator = () => {
  return (
    <NavigatorBlock className="nav">
      <Link className="link" href="/">
        HOME
      </Link>
      <Link className="link" href="about">
        ABOUT
      </Link>
      <Link className="link" href="board">
        BOARD
      </Link>
      <Link className="link" href="article">
        ARTICLE
      </Link>
      <Link className="link" href="subscription">
        SUBSCRIPTION
      </Link>
      <Link className="link" href="mypage">
        MYPAGE
      </Link>
      <Link className="link" href="logout">
        LOGOUT
      </Link>
    </NavigatorBlock>
  );
};

export default Navigator;
