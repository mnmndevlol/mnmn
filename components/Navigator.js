import Link from "next/link";

const Navigator = () => {
  return (
    <div class="nav">
      <Link href="/">HOME</Link> |<Link href="about">ABOUT</Link> |
      <Link href="board">BOARD</Link> |<Link href="article">ARTICLE</Link> |
      <Link href="subscription">SUBSCRIPTION</Link> |
      <Link href="mypage">MYPAGE </Link> |<Link href="logout">LOGOUT</Link>
    </div>
  );
};

export default Navigator;
