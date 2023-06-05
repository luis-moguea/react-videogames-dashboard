import { Game } from "../hooks/useGames";
import { Image, Card, CardBody, Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image cursor={"pointer"} src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((el) => el.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
