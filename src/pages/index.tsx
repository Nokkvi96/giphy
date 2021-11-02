import type { NextPage } from "next";
import Head from "next/head";
import { lighten } from "polished";

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
import { theme } from "@theme/theme";
import { BaseLayout } from "@components/BaseLayout";
import { SearchBox, Label } from "@components/atoms";

const { colors } = theme;
const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Head>
        <title>Giphy Leit</title>
        <meta name="description" content="Search for your favorite gifs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack gap={[4, null, 6]} direction="column" mb={[4, null, 6]}>
        <Box bg={lighten(0.36, colors.primary)} mt={4} p={2} borderRadius={10}>
          <SearchBox
            label="Leitaðu að gifi"
            placeholder="Leitaðu að gifi"
            onChange={() => console.log("test")}
          ></SearchBox>
        </Box>
        <Box bg="black">
          <Text>hehe</Text>
        </Box>
      </Stack>
    </BaseLayout>
  );
};

export default Home;
