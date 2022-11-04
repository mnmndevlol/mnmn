import styled from "@emotion/styled";
const ListWrapperBlock = styled.div`
  margin-bottom: 30px;

  .create-info {
    display: flex;
  }
  .author {
    color: #e05e15;
    font-size: 12px;
  }

  .createDate {
    color: #696969;
    font-size: 12px;
  }
  .postImage {
    margin-bottom: 13px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .content {
    font-size: 12px;
    margin-bottom: 28px;
  }

  .readmore {
    font-size: 12px;
    background: #4e95d7;
    border-radius: 5px;
  }
`;

const ListWrapper = ({ title, content, date, author, imageUrl }) => {
  return (
    <ListWrapperBlock class="listWrapper">
      <div class="create-info">
        <div class="author">{author}</div>
        <div class="createDate">{date}</div>
      </div>
      <div class="postImage">
        <img src={imageUrl} />
      </div>
      <div class="title">{title}</div>
      <div class="content">{content}</div>
      <button class="readmore">더보기 ...</button>
    </ListWrapperBlock>
  );
};

export default ListWrapper;
