import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Props = {
  name: string;
  image?: string;
};

export function TableAvatar({ name, image = '' }: Props) {
  function getNameWithSpace() {
    const splitName = name.toLowerCase().split(' ');

    const initialNames = splitName
      .slice(0, 3)
      .map((word) => word[0])
      .join('');

    return initialNames.toLocaleUpperCase();
  }

  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{getNameWithSpace()}</AvatarFallback>
    </Avatar>
  );
}
