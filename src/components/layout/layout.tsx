import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../App";
import { Navbar } from "../navbar";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const currentScreenIndex = routes.findIndex((x) => x === pathname);

  const back = React.useCallback((): void => {
    if (currentScreenIndex > 0) {
      navigate(routes[currentScreenIndex - 1]);
    }
  }, [currentScreenIndex, navigate]);

  const next = React.useCallback((): void => {
    if (currentScreenIndex < routes.length - 1) {
      navigate(routes[currentScreenIndex + 1]);
    }
  }, [currentScreenIndex, navigate]);

  return (
    <React.Fragment>
      <Flex flexDirection="column" h="100dvh">
        <Navbar />
        <Flex
          flexGrow="1"
          justifyContent="center"
          flexDirection="column"
          padding="1rem"
        >
          {currentScreenIndex > 0 && (
            <ArrowBackIcon boxSize={8} onClick={back} cursor="pointer" />
          )}
          <Flex alignItems="center" flexDirection="column" flexGrow="1">
            <Outlet />
            {children}
          </Flex>
        </Flex>
        {currentScreenIndex < routes.length - 1 && (
          <Flex justifyContent="center" marginBottom="2rem">
            <Button
              rightIcon={<ArrowForwardIcon />}
              variant="outline"
              onClick={next}
            >
              {t("continue")}
            </Button>
          </Flex>
        )}
      </Flex>
    </React.Fragment>
  );
};
