import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import imgUrl from "../../assets/logo.png";

export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Stack
        w="70%"
        alignItems="center"
        flexGrow="1"
        spacing={2}
        textAlign="center"
        justifyContent="space-evenly"
      >
        <Flex w="50%">
          <img src={imgUrl} alt="My Smart Menu Logo" />
        </Flex>
        <Text fontSize="3xl">{t("home.title")}</Text>
        <Text fontSize="lg">{t("home.text")}</Text>
        <Text color="blueviolet">{t("home.tryNow")}</Text>
      </Stack>
    </React.Fragment>
  );
};
