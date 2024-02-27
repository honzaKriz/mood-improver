import { Button } from '@rneui/themed';

type CustomButtonProps = {
  text: string;
  buttonStyle: {};
  onPress?: () => void;
};

export default function CustomButton({
  text,
  buttonStyle,
  onPress,
}: CustomButtonProps) {
  return (
    <Button title={text} buttonStyle={buttonStyle} onPress={onPress}></Button>
  );
}
