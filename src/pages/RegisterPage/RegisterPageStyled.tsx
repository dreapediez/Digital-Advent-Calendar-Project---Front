import styled from "styled-components";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleColors from "../../styles/mainStyleColors";

const RegisterPageStyled = styled.div`
  .form__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  .form-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 20px 0;
    gap: 15px;

    .form-footer__link-anchor {
      text-decoration: none;
      font-weight: ${mainStyleFonts.mainFontBold};
      color: ${mainStyleColors.secondaryColor};
      margin-left: 5px;
    }
  }
`;

export default RegisterPageStyled;
