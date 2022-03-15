import * as React from "react";
import { Box, Container } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";

export default function ContainerMotion() {
  const list = { hidden: { opacity: 1 } };
  const item = { hidden: { x: -10, opacity: 1 } };

  return (
    <Container h="100vh" d="flex" alignItems="center" justifyContent="center">
      <motion.div
        layout
        animate={{
          scale: [2, 1, 3, 0.5],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        drag="y"
        dragConstraints={{ top: -100, bottom: 100 }}
      >
        <Box width="100px" height="100px" bgColor="gray.100" color="tomato">
          hoge
        </Box>
      </motion.div>
    </Container>
  );
}
