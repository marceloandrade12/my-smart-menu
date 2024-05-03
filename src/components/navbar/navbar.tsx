"use client";

import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { useNavigate } from "react-router-dom";
import imgUrl from "../../assets/logo.png";

export const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  const locales = ["PT", "EN"];
  const [locale, setLocale] = React.useState(locales[0]);
  const switchLanguage = (nextLocale: string) => {
    setLocale(nextLocale);
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* <Box>Logo</Box> */}
          <Box w="60px">
            <img
              src={imgUrl}
              alt="My Smart Menu Logo"
              onClick={() => navigate("/")}
            />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant="ghost"
                      isActive={isOpen}
                    >
                      {locale.toUpperCase()}
                    </MenuButton>
                    <MenuList>
                      {locales.map((cur) => (
                        <MenuItem key={cur} onClick={() => switchLanguage(cur)}>
                          {cur.toUpperCase()}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
