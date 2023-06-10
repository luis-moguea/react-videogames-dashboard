import { Game } from "../hooks/useGames";
import { Image, Card, CardBody, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        cursor={"pointer"}
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody marginTop="-10px">
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((el) => el.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
