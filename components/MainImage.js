import styled from "@emotion/styled";

const MainImageBlock = styled.div`
  margin-bottom: 47px;
`;

const MainImage = () => {
  return (
    <MainImageBlock class="main-image">
      <img src="/images/main-image.png" />
    </MainImageBlock>
  );
};

export default MainImage;
