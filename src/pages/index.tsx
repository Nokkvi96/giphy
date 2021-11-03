import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { useDebouncedValue } from "rooks";

import { Box, Text, Stack } from "@components/system";

import { theme } from "@theme/theme";
import { BaseLayout } from "@components/BaseLayout";
import { SearchBox } from "@components/atoms";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const [debouncedQuery, immediatelyUpdateDebouncedValue] = useDebouncedValue(
    query,
    500
  );

  // const fetchGifs = async () =>
  //   await (
  //     await fetch(
  //       `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${debouncedQuery}`
  //     )
  //   ).json();

  const { data, status } = useQuery(["todos", debouncedQuery], async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${debouncedQuery}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  useEffect(() => {
    console.log(debouncedQuery);
    console.log(data);
    console.log(status);
  }, [debouncedQuery, status, data]);

  return (
    <BaseLayout>
      <Head>
        <title>Giphy Leit</title>
        <meta name="description" content="Search for your favorite gifs!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack gap={[4, null, 6]} direction="column" mb={[4, null, 6]}>
        <Box bg="primary50" mt={4} p={2} borderRadius={10}>
          <SearchBox
            label="Leitaðu að gifi"
            placeholder="Leitaðu að gifi"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></SearchBox>
        </Box>
        <Box bg="white">
          <Stack gap={[4, null, 6]} direction="column" mb={[4, null, 6]}>
            <Text>{status}</Text>
            {data?.data.map((d: any) => (
              <Text key={d.id}>{d.url}</Text>
            ))}
          </Stack>
        </Box>
      </Stack>
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseLayout>
  );
};

export default Home;
