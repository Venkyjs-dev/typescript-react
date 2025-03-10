type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default Input;
