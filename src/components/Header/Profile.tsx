import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcos César Domingues</Text>
        <Text color="gray.300" fontSize="small">
          dfenixweb@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Marcos Domingues"
        src="https://avatars.githubusercontent.com/u/100210771?v=4"
      />
    </Flex>
  );
}
