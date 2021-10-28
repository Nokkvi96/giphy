import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import {
  Box,
  Card,
  Contain,
  Flex,
  Heading,
  Text,
  Paragraph,
  Stack,
} from "@components/system";
import { Button } from "@components/atoms";
import { BaseLayout } from "@components/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Giphy Leit</title>
        <meta name="description" content="Search for your favorite gifs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column" height="100%">
        <Box my="auto">
          <Contain>
            <Flex
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Heading as="h2" mb="s">
                You are Lost!
              </Heading>
              <Text textAlign="center" mb="m">
                404
              </Text>
              <Button variant="primary" size="large">
                Press Here!
              </Button>
              <Card
                backgroundColor="white"
                boxShadow="medium"
                p="xxl"
                alignContent="center"
                justifyContent="center"
                display="flex"
                flexDirection="column"
              >
                <Text color="primary" m="xxxs">
                  HEHEHEHEH
                </Text>
                <Paragraph color="primary" m="xxxs">
                  HEHEHEHEHheheheehhe
                </Paragraph>
              </Card>
            </Flex>
          </Contain>
        </Box>
      </Flex>
      <Stack gap={["m", null, "l"]} direction="column" mb={["l", null, "xl"]}>
        <Text color="primary">HEHEHEHEHheheheehhe</Text>
        <Text color="primary">HEHEHEHEHheheheehhe</Text>
        <Text color="primary">HEHEHEHEHheheheehhe</Text>
      </Stack>
      <Text color="primary">HEHEHEHEHheheheehhe</Text>
    </BaseLayout>
  );
};

export default Home;
