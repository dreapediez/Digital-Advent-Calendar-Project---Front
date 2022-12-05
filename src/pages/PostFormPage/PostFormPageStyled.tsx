import styled from "styled-components";

const PostFormPageStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .input {
    &__text {
      margin: 10px;
    }
    &__box {
    }
  }

  .form__button {
    margin-top: 15px;
  }
`;

export default PostFormPageStyled;