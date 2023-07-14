import styled from 'styled-components';

export const FormWrapperModal = styled.div`
  background-color: rgba(0, 0, 0, 18%);
  position: absolute;
  height: 100vh;
  width: 100vw;
  padding: 70px 20px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledForm = styled.form`
  max-width: 770px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 50px;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);

  @media screen and (min-width: 678px) {
    padding: 40px 80px;
  }
`;

export const StyledInputFieldDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledFieldDiv = styled.div`
  width: 100%;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  gap: 9px;

  @media screen and (min-width: 678px) {
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1200px) {
    width: calc(50% - 40px);
  }
`;

export const StyledButtonDiv = styled.div`
  width: 100%;
  max-width: 770px;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;
`;
