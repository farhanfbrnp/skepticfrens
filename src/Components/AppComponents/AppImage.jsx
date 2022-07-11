import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Image, Button, Center } from "@chakra-ui/react";

function AppImage() {
  const [image, setImage] = useState(true);

  const handleImageChance = () => {
    const maxNumber = 5;
    const randomNumber = Math.floor((Math.random() * maxNumber + 1))
    const Image =
      `https://storage.googleapis.com/ethskeptics.appspot.com/display/3101-${randomNumber}.png`;
    setImage(Image)
    console.log(randomNumber)
    };

  useEffect(() => {
    handleImageChance([]);

    return () => {};
  }, []);

  return (
    <Box>
      <Center>
        <Flex align="center" flexDirection="row">
          <Box>
            <Box>
              <Text
                fontSize="1.5em"
                lineHeight={1.33}
                fontFamily="Gochi Hand, cursive"
                color="white"
                fontStyle="italic"
                transform="rotate(-20deg)"
                fontWeight="bold"
                pb={5}
              >
                This is your
              </Text>
              <Text
                fontSize="1.5em"
                lineHeight={1.33}
                fontFamily="Gochi Hand, cursive"
                color="white"
                fontStyle="italic"
                transform="rotate(-20deg)"
                fontWeight="bold"
                mt={-5}
              >
                skepticfrens
              </Text>
              <Image
                mt={10}
                boxSize={{ base: "3em", lg: "15em" }}
                src="https://storage.googleapis.com/ethskeptics.appspot.com/display/1.png"
              ></Image>
            </Box>
          </Box>
          <Box>
            <Center>
              <Image
                borderRadius="15px"
                boxSize={{ base: "15em", lg: "31em" }}
                src={image}
              ></Image>
            </Center>
          </Box>
          <Box>
            <Image
              mb={10}
              boxSize={{ base: "3em", lg: "15em" }}
              src="https://storage.googleapis.com/ethskeptics.appspot.com/display/2.png"
            ></Image>
            <Text
              fontSize="1.5em"
              lineHeight={1.33}
              fontFamily="Gochi Hand, cursive"
              color="white"
              fontStyle="italic"
              transform="rotate(-20deg)"
              fontWeight="bold"
            >
              Choose your most
            </Text>
            <Text
              fontSize="1.5em"
              lineHeight={1.33}
              fontFamily="Gochi Hand, cursive"
              color="white"
              fontStyle="italic"
              transform="rotate(-20deg)"
              fontWeight="bold"
            >
              skeptical words
            </Text>
          </Box>
        </Flex>
      </Center>
      <Box mt={5}>
        <Center>
          <Button
            colorScheme="whatsapp"
            fontSize="1.5em"
            p={6}
            lineHeight={1.33}
            fontFamily="Gochi Hand, cursive"
            color="white"
            fontStyle="italic"
            onClick={() => handleImageChance()}
          >
            More skepticwords
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default AppImage;
