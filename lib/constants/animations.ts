export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
