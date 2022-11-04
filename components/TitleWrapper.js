import styled from "@emotion/styled";
const TitleWrapperBlock = styled.div`
  /* background-color: blueviolet; */
  width: 100%;
  height: 80px;

  display: flex;

  gap: 10px;
  margin-bottom: 44px;

  .info {
    display: flex;
    gap: 5px;
  }

  .text-area {
    display: flex;
    flex-direction: column;

    justify-content: center;

    gap: 10px;
  }

  .image-area {
    margin-bottom: 90px;
  }
`;

const TitleWrapper = () => {
  return (
    <TitleWrapperBlock class="title-wrapeer">
      <div class="profile-image">
        <img src="images/Ellipse-1.png" />
      </div>
      <div class="text-area">
        <div class="title">제목은 여기 들어가 있습니다</div>
        <div class="info">
          <div class="author">by amdin</div>
          <div class="date">2021.12.25</div>
        </div>
      </div>
    </TitleWrapperBlock>
  );
};

export default TitleWrapper;
