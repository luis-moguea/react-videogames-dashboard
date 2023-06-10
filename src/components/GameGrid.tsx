import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      padding={"10px"}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((el) => (
          <GameCardContainer key={el}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((el) => (
        <GameCardContainer key={el.id}>
          <GameCard game={el} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
