import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={"10px"}
        spacing={10}
      >
        {isLoading && skeletons.map((el) => <GameCardSkeleton key={el} />)}
        {games.map((el) => (
          <GameCard key={el.id} game={el} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
