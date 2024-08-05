import "./default.css";

interface DefaultProps {}
const Default = ({ ...props }: DefaultProps) => {
  return <div {...props}>Default system component to copy and past</div>;
};

export default Default;
