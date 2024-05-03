import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { menuTypes } from "../../constants";

export const MenuSelection: React.FC = () => {
  const { t } = useTranslation();

  const [active, setActive] = React.useState<string>();

  return (
    <React.Fragment>
      <Stack
        alignItems="center"
        flexGrow="1"
        spacing={2}
        textAlign="center"
        justifyContent="space-evenly"
      >
        <Text fontSize="3xl">{t("menuSelection.title")}</Text>
        <Flex flexWrap="wrap" w="100%" justifyContent="center" gap="10px">
          {menuTypes.map((type) => (
            <Button
              display="flex"
              borderRadius="unset"
              padding="50px"
              onClick={() => setActive(type)}
              colorScheme={active === type ? "facebook" : undefined}
            >
              {t(`menuSelection.${type}`)}
            </Button>
          ))}
        </Flex>
      </Stack>
    </React.Fragment>
  );
};
