import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
