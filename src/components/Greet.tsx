type GreetProps = {
  name: string;
  weight: number;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {props.name}! you have {props.weight} messages
      </h2>
    </div>
  );
};

export default Greet;
