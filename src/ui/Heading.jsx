import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) => {
    return (
      props.as === 'h1' &&
      css`
        font-size: 3rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        padding-left: 20px;
      `
    );
  }}

  ${(props) => {
    return (
      props.as === 'h2' &&
      css`
        font-size: 24px;
        font-weight: 400;
      `
    );
  }}

  ${(props) => {
    return (
      props.as === 'h3' &&
      css`
        font-size: 16px;
        font-weight: 200;
      `
    );
  }}
`;

export default Heading;
