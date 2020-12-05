const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  phone: customMediaQuery(321),
  tablet: customMediaQuery(768),
  laptop: customMediaQuery(1025),
  desktop: customMediaQuery(1680),
};
