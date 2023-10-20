import { Button } from "react-native";

type CustomButtonProps = {
  text: string;
};

export default function CustomButton({ text }: CustomButtonProps) {
  return <Button title={text}></Button>;
}
