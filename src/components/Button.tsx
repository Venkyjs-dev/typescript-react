type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = ({ handleClick }: ButtonProps) => {
  let id = 1;
  return <button onClick={(e) => handleClick(e, id)}>click me</button>;
};

export default Button;
