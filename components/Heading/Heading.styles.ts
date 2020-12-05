import styled from 'styled-components';

export const Heading = styled.h1`
  color: darkcyan;

  ${({ theme }) => theme.media.laptop} {
    color: darkmagenta;
  }
`;
