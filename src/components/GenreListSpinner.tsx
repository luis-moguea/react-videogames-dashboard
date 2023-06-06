import { List, ListItem, Spinner } from "@chakra-ui/react";

const GenreListSpinner = () => {
  return (
    <List>
      <ListItem paddingY="8px">
        <Spinner />
      </ListItem>
    </List>
  );
};

export default GenreListSpinner;
