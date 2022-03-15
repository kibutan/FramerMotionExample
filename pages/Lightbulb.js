import { Box, Button, Center, VStack, keyframes } from "@chakra-ui/react";
import { LightBulb } from "./svgs/lightBulb";

const spin = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg)}
  `;

export default function Transition() {
  const spinAnimation = `${spin} infinite 2s linear`;
  return (
    <Center>
      <VStack spacing={20}>
        <Box>hoge</Box>
      </VStack>
    </Center>
  );
}
