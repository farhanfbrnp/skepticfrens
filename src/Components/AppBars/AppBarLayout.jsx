import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  Center,
  Stack,
  NumberInput,
  Heading,
} from "@chakra-ui/react";
import { FaTwitter, FaWallet } from "react-icons/fa";
import openseaImg from "../../Assets/opensea.png";
import etherscan from "../../Assets/etherscan.webp";
import AppImage from "../AppComponents/AppImage";

function AppBarLayout() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count === 5) {
      return null;
    }
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) return setCount(count - 1);
  };

  return (
    <Box bgColor="gray.800" h={"auto"} height="auto">
      <Flex flexDirection={"row"} justify={"space-between"} mb={10}>
        <Box>
          <HStack mt={1} mr={2} ml={2}>
            <Button colorScheme="whiteAlpha" variant={"ghost"}>
              <Icon
                as={FaTwitter}
                color="white"
                variant="ghost"
                fontSize="2.3em"
              />
            </Button>
            <Button colorScheme="whiteAlpha" variant={"ghost"}>
              <Image src={openseaImg} boxSize="2.3em" />
            </Button>
            <Button colorScheme="whiteAlpha" variant={"ghost"}>
              <Image src={etherscan} boxSize="2.3em" />
            </Button>
          </HStack>
        </Box>
      </Flex>
      <Box>
        <Center>
          <Heading
            fontSize="3.75em"
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            mb={3}
            fontWeight="light"
          >
            How skeptics are you?
          </Heading>
        </Center>
      </Box>
      <Box mb={3}>
        <Center>
          <Text
            fontSize="1.5em"
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            fontWeight="bold"
          >
            more than fifty skeptical words
          </Text>
        </Center>
      </Box>
      <Box>
        <AppImage />
      </Box>
      <Box mt="5em">
        <Center>
          <Text
            fontSize="1.5em"
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            fontWeight="bold"
          >
            Bunch of
          </Text>
        </Center>
      </Box>
      <Box>
        <Center>
          <Text
            fontSize="3em"
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            fontWeight="bold"
          >
            skepticfrens...
          </Text>
        </Center>
      </Box>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justify={"space-around"}
        align="center"
        mt={10}
      >
        <Box mb={5}>
          <Image
            borderRadius="15px"
            w="600px"
            h="600px"
            src="https://storage.googleapis.com/ethskeptics.appspot.com/display/skepticAnimation.gif"
          ></Image>
        </Box>
        <Box>
          <Center>
            <Box>
              <Stack align="center">
                <Box align="center" mb={5}>
                  <Text
                    fontSize="3em"
                    lineHeight={1.33}
                    fontFamily="Gochi Hand, cursive"
                    color="white"
                    fontStyle="italic"
                    fontWeight="bold"
                    mb={5}
                  >
                    Become skeptic now!!!
                  </Text>
                  <Text
                    fontSize="4em"
                    lineHeight={1.33}
                    fontFamily="Gochi Hand, cursive"
                    color="white"
                    fontStyle="italic"
                    fontWeight="bold"
                  >
                    /10000 skeptic
                  </Text>
                </Box>
                <Box>
                  <HStack mb={5}>
                    <Button
                      fontStyle="italic"
                      fontSize="1.5em"
                      lineHeight={1.33}
                      fontFamily="Gochi Hand, cursive"
                      fontWeight="bold"
                      colorScheme="red"
                      p={5}
                      onClick={() => handleDecrement()}
                      disabled={count === 0}
                    >
                      -
                    </Button>
                    <NumberInput
                      borderRadius={5}
                      px='3.5em'
                      py={2}
                      bgColor="white"
                    >
                      {count}
                    </NumberInput>
                    <Button
                      fontStyle="italic"
                      fontSize="1.5em"
                      lineHeight={1.33}
                      fontFamily="Gochi Hand, cursive"
                      fontWeight="bold"
                      colorScheme="green"
                      onClick={() => handleIncrement()}
                      disabled={count === 5}
                      p={5}
                    >
                      +
                    </Button>
                  </HStack>
                </Box>
                <Box
                  p='3em'
                  bgColor="yellow.300"
                  borderRadius={20}
                  shadow="dark-lg"
                  align="center"
                  mt={10}
                >
                  <Text
                    fontFamily="Gochi Hand, cursive"
                    color={"black"}
                    fontSize='1.5em'
                    fontWeight='bold'
                  >
                    Free 2 skeptics
                  </Text>
                  <Text
                    fontFamily="Gochi Hand, cursive"
                    color={"black"}
                    fontSize='1.5em'
                    fontWeight="bold"
                  >
                    Additional ETH 0.005
                  </Text>
                  <Text
                    fontFamily="Gochi Hand, cursive"
                    color={"black"}
                    fontSize='1.5em'
                    fontWeight="bold"
                  >
                    Max Mint/wallet 8 skeptics
                  </Text>
                  <Text
                    fontFamily="Gochi Hand, cursive"
                    color={"black"}
                    fontSize='1.5em'
                    fontWeight="bold"
                  >
                    Max Mint/trx 4 skeptics
                  </Text>
                </Box>
                <Box>
                  <Button
                    lineHeight={1.33}
                    fontFamily="Gochi Hand, cursive"
                    fontStyle="italic"
                    fontWeight="bold"
                    color="black"
                    mt={5}
                    colorScheme="green"
                  >
                    <Icon as={FaWallet} mr={2} />
                    Connect
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Center>
        </Box>
      </Flex>
      <Box mt="5em">
        <Center>
          <Text
            fontSize="1.5em"
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            fontWeight="bold"
          >
            Create your skeptic geng...
          </Text>
        </Center>
      </Box>
      <Box>
        <Center>
          <Box align="center">
            <HStack align="center">
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
            </HStack>
            <HStack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
              <Stack>
                <Image
                  w="250px"
                  src="https://storage.googleapis.com/ethskeptics.appspot.com/display/GIF,%20you%20are%20not%20skeptical%20enough%20kek!.gif"
                />
                <Text
                  fontSize="1.2em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  you are not skeptic enough
                </Text>
                <Button
                  fontSize="1.5em"
                  lineHeight={1.33}
                  fontFamily="Gochi Hand, cursive"
                  color="white"
                  fontStyle="italic"
                  colorScheme="green"
                >
                  Buy on opensea
                </Button>
              </Stack>
            </HStack>
          </Box>
        </Center>
      </Box>
      <Box align="center" mt={10} mb={5}>
        <Center>
          <Text
            fontSize="2em"
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            colorScheme="green"
            fontWeight="bold"
          >
            Your skepticfrens, will have... ahhh, forget it
          </Text>
        </Center>
      </Box>
    </Box>
  );
}

export default AppBarLayout;
