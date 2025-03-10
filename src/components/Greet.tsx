type GreetProps = {
  name: string;
  weight: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! you have {props.weight} messages
        </h2>
      ) : (
        <h2>Welcome guest </h2>
      )}
    </div>
  );
};

export default Greet;
