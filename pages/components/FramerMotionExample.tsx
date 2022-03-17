import { Box, color, Container } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

type Props = {
  color?: string;
};

const MyButton: React.VFC<Props> = ({ color = "white" }) => {
  return (
    <Box
      width="100px"
      height="100px"
      backgroundColor={color}
      borderRadius="30"
    />
  );
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const ScaleOnceBox = () => {
  return (
    <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }}>
      <MyButton />
    </motion.div>
  );
};

export const InfiniteSpinBox = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <MyButton color={"red.100"} />
    </motion.div>
  );
};

export const ClickableBOX = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <MyButton color={"blue.100"}></MyButton>
    </motion.button>
  );
};

export const DraggableBox = () => (
  <Box
    width="200px"
    height="200px"
    backgroundColor="green.100"
    borderRadius="30"
  >
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 150,
        bottom: 150,
      }}
    >
      <MyButton color={"green.100"}></MyButton>
    </motion.div>
  </Box>
);

export const MotionValueExample = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  return (
    <motion.div style={{ background }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
      >
        <Box width="100px" height="100px" />
      </motion.div>
    </motion.div>
  );
};

export default function FramerMotionExample() {
  return (
    <Container>
      <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
        <ScaleOnceBox />
      </Container>

      <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
        <InfiniteSpinBox />
      </Container>

      <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
        <ClickableBOX />
      </Container>

      <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
        <DraggableBox />
      </Container>

      <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
        <MotionValueExample />
      </Container>

      <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          duration="3"
        >
          <MyButton color="blue.200" />
          <MyButton color="red.200" />
          <MyButton color="green.200" />
        </motion.div>
      </Container>
    </Container>
  );
}
