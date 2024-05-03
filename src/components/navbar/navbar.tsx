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

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import imgUrl from "../../assets/logo.png";
import { languages } from "../../i18n";

export const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  const { i18n } = useTranslation();

  const switchLanguage = (nextLocale: string) => {
    i18n.changeLanguage(nextLocale.toLowerCase());
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
                      {i18n.language.toUpperCase()}
                    </MenuButton>
                    <MenuList>
                      {languages.map((cur) => (
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
