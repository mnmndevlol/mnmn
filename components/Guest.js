const Guest = () => {
  return (
    <div class="paper-wrap">
      <div class="paper-title">한줄 방명록</div>

      <div class="paper">
        <div class="text">제목은 여기에 들어가 있습니다.</div>
        <div class="info">
          <div class="author">by Admin</div>
          <div class="date">2021.12.25</div>
        </div>
      </div>

      <div class="paper">
        <div class="text">제목은 여기에 들어가 있습니다.</div>
        <div class="info">
          <div class="author">by Admin</div>
          <div class="date">2021.12.25</div>
        </div>
      </div>

      <div class="paper">
        <div class="text">제목은 여기에 들어가 있습니다.</div>
        <div class="info">
          <div class="author">by Admin</div>
          <div class="date">2021.12.25</div>
        </div>
      </div>

      <div class="pagenation">
        <button> 1</button>
        <button> 2</button>
        <button> 3</button>
        <button> 4</button>
        <button> 5</button>
        <button> 6</button>
        <button> 7</button>
        <button> 8</button>
        <button> 9</button>
        <button> ...</button>
      </div>
      <div class="form">
        <input placeholder="이름" class="name-form"></input>
        <input
          class="text-form"
          placeholder="30자 이내로 작성 하실 수 있습니다."
        ></input>
        <button class="submit-button">작성</button>
      </div>
    </div>
  );
};

export default Guest;
