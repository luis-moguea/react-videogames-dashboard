import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSpinner from "./GenreListSpinner";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  const loadingSpinners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <List>
      {isLoading && loadingSpinners.map((el) => <GenreListSpinner key={el} />)}
      {data.map((el) => (
        <ListItem paddingY="5px" key={el.id}>
          <HStack>
            <Image
              cursor="pointer"
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(el.image_background)}
            />
            <Text fontSize="lg">{el.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
