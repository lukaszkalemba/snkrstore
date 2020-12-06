import styled from 'styled-components';

export const Heading = styled.h1`
  color: darkcyan;
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fonts.size.l};
  }
`;
