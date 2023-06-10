import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", width: "25px" },
    4: { src: thumbsUp, alt: "recommended", width: "25px" },
    5: { src: bullsEye, alt: "exceptional", width: "35px" },
  };

  return <Image paddingTop="7px" {...emojiMap[rating]} />;
};

export default Emoji;
