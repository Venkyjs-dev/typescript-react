type PersonListProps = {
  names: { first: string; last: string }[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <ul>
      {names.map((person) => (
        <li key={person.first}>
          {person.first} {person.last}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
