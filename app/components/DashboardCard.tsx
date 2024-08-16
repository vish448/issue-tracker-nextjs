
import { Box, Flex, Avatar, Card, Text } from "@radix-ui/themes";
import React from "react";

export default function DashboardCard (
  { title, value }: { title: String, value: number | String }) 
  {
  return (
    <>
      <Box maxWidth="240px">
        <Card>
          <Flex gap="5" align="center" justify="center">
            <Box>
              <Text as="div" size="5" weight="bold">
                {title}
              </Text>
              <Text as="div" size="5" color="gray" align="center">
                {value || 0}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
    </>
  );
};
