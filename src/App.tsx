import { Box, Button, CloseButton, Heading } from "@chakra-ui/react";
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
    <Box w="100%">
      <Box display="flex" flexDirection="row" justifyContent="space-around">
        <Box display="flex" flexDirection="column" gap="1rem">
          <Heading as="h1" size="2xl">
            Pratos Disponíveis
          </Heading>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="baseline"
            gap="1rem"
          >
            {availableDishes.map((dish, index) => {
              return (
                <Box key={`available-dish-${index}`}>
                  <Button onClick={() => handleSelectDish(dish)}>
                    {dish.name}
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Input onSave={handleOnSaveNewDish} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem">
          <Heading as="h1" size="2xl">
            Pratos Selecionados
          </Heading>
          <Box display="flex" flexDirection="column" alignItems="baseline">
            {selectedDishes.map((dish, index) => {
              return (
                <Box
                  key={`selected-dish-${index}`}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                >
                  {dish.name}{" "}
                  <CloseButton
                    size="sm"
                    onClick={() => handleOnRemoveDish(index)}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
