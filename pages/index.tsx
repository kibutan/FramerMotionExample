import { Box, Container } from "@chakra-ui/react";
import FramerMotionExample from "./components/FramerMotionExample";
import FramerMotionIntroduction from "./components/FramerMotionIntroduction";
import ContainerMotion from "./components/ContainerMotion";

export default function IndexPage() {
  return (
    <>
      {/* <MyComponent /> */}
      {/* <ContainerMotion /> */}
      <Box backgroundColor="red.100">Hoge</Box>
      {/* <FramerMotionIntroduction /> */}
      <FramerMotionExample />
    </>
  );
}
