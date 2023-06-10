import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSpinner from "./GenreListSpinner";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  const loadingSpinners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          loadingSpinners.map((el) => <GenreListSpinner key={el} />)}
        {data.map((el) => (
          <ListItem paddingY="5px" key={el.id}>
            <HStack>
              <Image
                objectFit="cover"
                cursor="pointer"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(el.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={el.id === selectedGenre?.id ? "bold" : ""}
                onClick={() => onSelectGenre(el)}
                variant="link"
                fontSize="lg"
              >
                {el.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
