import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

export const StyledTableWrapperDiv = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 40px 0 20px 0;
  overflow-x: auto;
  margin: auto;
`;

export const StyledHeaderDiv = styled.div`
  width: 1200px;
  font-weight: 500;

  display: grid;
  grid-template-columns: repeat(2, 1fr) 1.5fr 0.5fr 2fr;
  border-bottom: 2px solid #dbdbdb;

  span {
    padding: calc(0.75em - 1px);
  }
`;

export const StyledEmailSpan = styled.div`
  padding: calc(0.75em - 1px);
  border-radius: 0.375em;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${(props) => props.theme.palette.accent};
  cursor: pointer;

  &.incorrect {
    color: ${(props) => props.theme.palette.danger.dark};
  }

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.palette.dark};
  }
`;

export const StyledListDiv = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 1.5fr 0.5fr 2fr;
  gap: 5px;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;

  span {
    padding: calc(0.75em - 1px);
    border-radius: 0.375em;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .editable {
    background-color: ${(props) => props.theme.palette.default.light};
    outline: none;
    border: 1px solid ${(props) => props.theme.palette.default.main};
    color: ${(props) => props.theme.palette.dark};
    text-decoration: none;

    &:focus {
      box-shadow: 0px 0px 1px 3px ${(props) => props.theme.palette.link.light};
      border: 1px solid ${(props) => props.theme.palette.accent};
    }
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  padding: 0 30px;
  position: relative;
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0.5em 0.75em;
  padding-top: 20px;

  button {
    min-width: 2em;
    padding: 0.2em 0.6em;
    border: ${(props) => `1px solid ${props.theme.palette.default.main}`};
    border-radius: 0.375em;

    background-color: ${(props) => props.theme.palette.light};

    font-size: 0.9em;
    line-height: 1.4;
    color: ${(props) => props.theme.palette.dark};
    cursor: pointer;

    &:hover {
      background-color: ${(props) =>
        props.color
          ? props.theme.palette[props.color].main
          : props.theme.palette.default.main};
      color: ${(props) => props.theme.palette.light};
    }
  }
  button.selected {
    background-color: ${(props) =>
      props.color
        ? props.theme.palette[props.color].main
        : props.theme.palette.default.main};
    color: ${(props) => props.theme.palette.light};
  }
`;

export const StyledMessage = styled.div`
  background-color: rgba(0, 0, 0, 18%);
  position: absolute;
  height: 100vh;
  width: 100vw;
  padding: 70px 20px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  p {
    width: 90%;
    max-width: 570px;
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
  }
`;

export const StyledNoUsersMessage = styled.p`
  margin-top: 10px;
  text-align: center;
`;

export const StyledNotificationAlert = styled.p`
  position: absolute;
  top: -120%;
  left: 30%;

  background-color: ${(props) => props.theme.palette.white};
  padding: 10px;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);

  .fa-triangle-exclamation {
    color: ${(props) => props.theme.palette.danger.main};
  }
`;
