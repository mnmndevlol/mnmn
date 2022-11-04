import styled from "@emotion/styled";
const LogoBlock = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 27px;

  /* 가운데 정렬 */
  display: flex;
  justify-content: center;
  /* align(세로정렬) */
`;

const Logo = () => {
  return <LogoBlock class="logo">mnmnlol</LogoBlock>;
};

export default Logo;
