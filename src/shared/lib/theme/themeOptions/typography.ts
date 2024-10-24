export const typography = {
  // 15 regu (basic)
  base: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18 / 15,
  },

  // 13 regu + (подсказка)
  caption: {
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 15 / 13,
  },

  // 15 regu wide + (для текста в абзаце)
  paragraph: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 20 / 15,
  },

  // 15 semi + (мини заголовок)
  textHeading: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 18 / 15,
  },

  pageHeading: {
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 48 / 40,
  },

  pageHeadingMobile: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 28 / 26,
  },

  sectionHeading: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: 28 / 26,
  },

  secondaryHeading: {
    fontSize: 22,
    lineHeight: 24 / 22,
    fontWeight: 700,
  },
} as const;
