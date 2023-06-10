import { Button, Menu, MenuButton, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import SortSelectorChildren from "./SortSelectorChildren";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-date", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (el) => el.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <SortSelectorChildren>
        {sortOrders.map((el) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(el.value);
            }}
            key={el.value}
            value={el.value}
          >
            {el.label}
          </MenuItem>
        ))}
      </SortSelectorChildren>
    </Menu>
  );
};

export default SortSelector;
