const slideUp = {
  name: "Slide Up",
  variants: {
    initial: {
      opacity: 0,
      transform: "translateY(5vh)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    exit: {
      opacity: 0,
      transform: "translateY(-5vh)",
    },
  },
  transition: {
    duration: 0.3,
    delayChildren: 0.5,
  },
};

const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-100%",
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      left: "100%",
      scale: 0.6,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const fadeBack = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const rotateY = {
  name: "Rotate Y",
  variants: {
    initial: {
      rotateY: 90,
    },
    animate: {
      rotateY: 0,
    },
    exit: {
      rotateY: 90,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const rotateX = {
  name: "Rotate X",
  variants: {
    initial: {
      rotateZ: 90,
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      rotateZ: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      rotateZ: 90,
      scale: 0.6,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const rotateZ = {
  name: "Rotate Z",
  variants: {
    initial: {
      opacity: 0,
      rotateZ: 360,
    },
    animate: {
      opacity: 1,
      rotateZ: 0,
    },
    exit: {
      opacity: 0,
      rotateZ: 360,
    },
  },
  transition: {
    duration: 0.7,
  },
};

export const animlib = [
  slideUp,
  slideRight,
  fadeBack,
  rotateX,
  rotateY,
  rotateZ,
];
