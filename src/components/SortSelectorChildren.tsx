import { MenuList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SortSelectorChildren = ({ children }: Props) => {
  return <MenuList>{children}</MenuList>;
};

export default SortSelectorChildren;
