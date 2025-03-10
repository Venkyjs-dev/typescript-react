type GreetProps = {
  name: string;
  weight?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const { weight = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! you have {weight} messages
        </h2>
      ) : (
        <h2>Welcome guest </h2>
      )}
    </div>
  );
};

export default Greet;
