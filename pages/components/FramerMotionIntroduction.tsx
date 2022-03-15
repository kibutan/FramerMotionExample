import {
  motion,
  MotionProps,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Box } from "@chakra-ui/react";
export default function FramerMotionIntroduction() {
  const list = { hidden: { opacity: 0 } };
  const item = { hidden: { x: -10, opacity: 0 } };

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <Box
        height="100vh"
        justifyContent="100px"
        alignItems="center"
        textAlign="center"
      >
        <motion.div animate={{ x: 100 }} transition={{ duration: 0.8 }}>
          MoveRight100px
        </motion.div>

        <motion.div drag="x" dragConstraints={{ left: -100, right: 100 }}>
          DraggableXDirectionBetween+-100px
        </motion.div>
        <motion.div drag="y" dragConstraints={{ top: -10, bottom: 10 }}>
          DraggableYDirectionBetween+-10px
        </motion.div>

        <motion.ul animate="visible" variants={list}>
          <motion.li variants={item}>list1</motion.li>
          <motion.li variants={item}>list2</motion.li>
          <motion.li variants={item}>list3</motion.li>
        </motion.ul>
        <motion.div drag="x" style={{ x, opacity }}>
          Motion Values
        </motion.div>
      </Box>
      <motion.path style={{ pathLength: scrollYProgress }}>
        Scrolled
      </motion.path>
    </>
  );
}
