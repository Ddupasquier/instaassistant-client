import { Button, Input, Textarea } from "@nextui-org/react";
function NextUI() {
  const Component = () => <Button>Click me</Button>;

  return (
    <div>
      <Component />
      <Input placeholder="Next UI" />
      <Textarea placeholder="This is a text area" />
    </div>
  );
}

export default NextUI;
