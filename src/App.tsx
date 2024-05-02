import { Button, CloseButton, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Input } from "./components";
import { Dish } from "./types";

const dishes: Dish[] = [
  {
    name: "Bacalhau à Brás",
  },
  {
    name: "Francesinha",
  },
  {
    name: "Caldo Verde",
  },
  {
    name: "Polvo à Lagareiro",
  },
  {
    name: "Cozido à Portuguesa",
  },
  {
    name: "Arroz de Pato",
  },
  {
    name: "Feijoada à Transmontana",
  },
  {
    name: "Alheira de Mirandela",
  },
  {
    name: "Sardinhas Assadas",
  },
  {
    name: "Pastéis de Nata",
  },
];

const App: React.FC = () => {
  const [availableDishes, setAvailableDishes] = React.useState<Dish[]>(dishes);
  const [selectedDishes, setSelectedDishes] = React.useState<Dish[]>([]);

  const handleSelectDish = (dish: Dish) =>
    setSelectedDishes((prev) => {
      const alreadyExists = prev.find((x) => x.name === dish.name);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, dish];
    });

  const handleOnRemoveDish = (index: number) =>
    setSelectedDishes((prev) => prev.filter((_, i) => i !== index));

  const handleOnSaveNewDish = (dish: string) =>
    setAvailableDishes((prev) => {
      const alreadyExists = prev.find((x) => x.name === dish);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, { name: dish }];
    });

  return (
    <Flex w="100%" justifyContent="space-around" textAlign="center">
      <Flex flexDirection="column" gap="1rem" flexBasis="40%">
        <Heading as="h1" size="xl">
          Pratos Disponíveis
        </Heading>
        <Flex
          alignItems="baseline"
          gap="1rem"
          wrap="wrap"
          justifyContent="center"
        >
          {availableDishes.map((dish, index) => {
            return (
              <Flex key={`available-dish-${index}`}>
                <Button onClick={() => handleSelectDish(dish)}>
                  {dish.name}
                </Button>
              </Flex>
            );
          })}
          <Flex>
            <Input onSave={handleOnSaveNewDish} />
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="2rem" flexBasis="40%">
        <Heading as="h1" size="xl">
          Pratos Selecionados
        </Heading>
        <Flex
          alignItems="baseline"
          gap="1rem"
          wrap="wrap"
          justifyContent="center"
        >
          {selectedDishes.map((dish, index) => {
            return (
              <Flex
                key={`selected-dish-${index}`}
                display="flex"
                flexDirection="row"
              >
                {dish.name}{" "}
                <CloseButton
                  size="sm"
                  onClick={() => handleOnRemoveDish(index)}
                />
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
