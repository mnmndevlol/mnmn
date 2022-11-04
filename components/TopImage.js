import styled from "@emotion/styled";
const TopImageBlock = styled.div`
  /* position: absolute; 한 애의 기준이 된다 */
  position: relative;

  margin-bottom: 31px;
  /* background-color: aquamarine; */

  .profile-image {
    position: absolute;
    left: 266px;
    top: 47px;
  }
`;

const TopImage = () => {
  return (
    <TopImageBlock>
      <img src="./images/Rectangle-20.png" />
      <img className="profile-image" src="./images/profile.png" />
    </TopImageBlock>
  );
};

export default TopImage;
