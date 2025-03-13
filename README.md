# TypeScript Concepts in React

## Basic Props Types

TypeScript allows you to strictly type your React component props for better type safety and development experience.

### Primitive Types

- `string`: Text values

  ```tsx
  type GreetProps = { name: string };
  const Greet = ({ name }: GreetProps) => <h1>Hello {name}</h1>;
  // Use Case: User profile header
  // <Greet name="John Doe" />
  ```

- `number`: Numeric values

  ```tsx
  type CounterProps = { count: number };
  const Counter = ({ count }: CounterProps) => <div>{count}</div>;
  // Use Case: Shopping cart item count
  // <Counter count={5} />
  ```

- `boolean`: True/false values
  ```tsx
  type UserProps = { isLoggedIn: boolean };
  const User = ({ isLoggedIn }: UserProps) => (
    <div>{isLoggedIn ? "Welcome!" : "Please login"}</div>
  );
  // Use Case: Authentication status display
  // <User isLoggedIn={true} />
  ```

### Complex Types

- `object`: JavaScript objects with defined shape

  ```tsx
  type PersonProps = {
    person: { first: string; last: string };
  };
  const Person = ({ person }: PersonProps) => (
    <div>
      {person.first} {person.last}
    </div>
  );
  // Use Case: User profile display
  // <Person person={{ first: "John", last: "Doe" }} />
  ```

- `array`: Arrays of specific types

  ```tsx
  type ListProps = {
    items: string[];
  };
  const List = ({ items }: ListProps) => (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
  // Use Case: Navigation menu items
  // <List items={["Home", "About", "Contact"]} />
  ```

- `union`: Multiple allowed types

  ```tsx
  type StatusProps = {
    status: "loading" | "success" | "error";
  };
  const Status = ({ status }: StatusProps) => <div>Status: {status}</div>;
  // Use Case: API request status indicator
  // <Status status="loading" />
  ```

- `optional`: Props that aren't required
  ```tsx
  type TitleProps = {
    main: string;
    subtitle?: string;
  };
  const Title = ({ main, subtitle }: TitleProps) => (
    <div>
      <h1>{main}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  );
  // Use Case: Page header with optional subtitle
  // <Title main="Welcome" subtitle="Please sign in" />
  ```

## Event Props

React events can be strictly typed using TypeScript for better type safety:

### Common Event Types

- `onClick`: Click events

  ```tsx
  type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  const Button = ({ handleClick }: ButtonProps) => (
    <button onClick={handleClick}>Click me</button>
  );
  // Use Case: Form submit button
  // <Button handleClick={() => console.log("Form submitted")} />
  ```

- `onChange`: Input change events
  ```tsx
  type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  const Input = ({ value, handleChange }: InputProps) => (
    <input value={value} onChange={handleChange} />
  );
  // Use Case: Search input field
  // <Input value={searchTerm} handleChange={(e) => setSearchTerm(e.target.value)} />
  ```

### Children Props

React components can accept children props of different types:

- `string`: Passing string as children

  ```tsx
  type HeadingProps = {
    children: string;
  };
  const Heading = ({ children }: HeadingProps) => <h2>{children}</h2>;
  // Use Case: Section headers
  // <Heading>Featured Products</Heading>
  ```

- `ReactNode`: Passing React component as children
  ```tsx
  type OscarProps = {
    children: React.ReactNode;
  };
  const Oscar = ({ children }: OscarProps) => <div>{children}</div>;
  // Use Case: Modal or card container
  // <Oscar><h1>Title</h1><p>Content</p></Oscar>
  ```

## Additional Important Prop Types

### Function Types

- `Function Props`: Passing functions as props with proper typing
  ```tsx
  type ButtonProps = {
    onClick: () => void;
    onSave: (id: number) => void;
    onSubmit: (data: { name: string; age: number }) => Promise<void>;
  };
  const Button = ({ onClick, onSave, onSubmit }: ButtonProps) => (
    <button onClick={onClick}>Click me</button>
  );
  // Use Case: Form submission with async data processing
  // <Button
  //   onClick={() => console.log("Clicked")}
  //   onSave={(id) => saveToDatabase(id)}
  //   onSubmit={async (data) => await submitForm(data)}
  // />
  ```

### Generic Types

- `Generic Components`: Creating reusable components with generic types
  ```tsx
  type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
  };
  const List = <T extends {}>({ items, renderItem }: ListProps<T>) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
  // Use Case: Reusable data grid with custom rendering
  // <List
  //   items={[
  //     { id: 1, name: "Product 1", price: 100 },
  //     { id: 2, name: "Product 2", price: 200 }
  //   ]}
  //   renderItem={(item) => (
  //     <div>
  //       <h3>{item.name}</h3>
  //       <p>${item.price}</p>
  //     </div>
  //   )}
  // />
  ```

### Discriminated Unions

- `Discriminated Unions`: Handling different states or variants of props

  ```tsx
  type MessageProps =
    | { type: "success"; message: string }
    | { type: "error"; message: string; code: number }
    | { type: "loading" };

  const Message = (props: MessageProps) => {
    switch (props.type) {
      case "success":
        return <div className="success">{props.message}</div>;
      case "error":
        return (
          <div className="error">
            {props.message} (Code: {props.code})
          </div>
        );
      case "loading":
        return <div className="loading">Loading...</div>;
    }
  };
  // Use Case: API response status messages
  // <Message type="success" message="Data saved successfully" />
  // <Message type="error" message="Failed to save" code={500} />
  // <Message type="loading" />
  ```

### Record Types

- `Record Types`: Working with dynamic object keys
  ```tsx
  type ThemeProps = {
    colors: Record<string, string>;
    spacing: Record<"small" | "medium" | "large", number>;
  };
  const Theme = ({ colors, spacing }: ThemeProps) => (
    <div style={{ color: colors.primary, padding: spacing.medium }}>
      Themed Content
    </div>
  );
  // Use Case: Theme configuration
  // <Theme
  //   colors={{ primary: "#007bff", secondary: "#6c757d" }}
  //   spacing={{ small: 8, medium: 16, large: 24 }}
  // />
  ```

### Component Props with Ref

- `Forwarding Refs`: Components that need to forward refs to child elements
  ```tsx
  type InputProps = {
    label: string;
    error?: string;
  };
  const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error }, ref) => (
      <div>
        <label>{label}</label>
        <input ref={ref} />
        {error && <span className="error">{error}</span>}
      </div>
    )
  );
  // Use Case: Form input with focus management
  // const inputRef = useRef<HTMLInputElement>(null);
  // <Input
  //   ref={inputRef}
  //   label="Username"
  //   error="Username is required"
  // />
  // // Later: inputRef.current?.focus();
  ```

### Context Types

- `Context Types`: Typing React Context values and providers

  ```tsx
  type ThemeContextType = {
    theme: "light" | "dark";
    toggleTheme: () => void;
  };
  const ThemeContext = React.createContext<ThemeContextType | undefined>(
    undefined
  );

  type ThemeProviderProps = {
    children: React.ReactNode;
  };
  const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () =>
            setTheme((prev) => (prev === "light" ? "dark" : "light")),
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  // Use Case: Global theme management
  // <ThemeProvider>
  //   <App />
  // </ThemeProvider>
  // // In any child component:
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // <button onClick={toggleTheme}>
  //   Switch to {theme === 'light' ? 'dark' : 'light'} mode
  // </button>
  ```

These additional prop types cover some of the most important and commonly used patterns in industry applications. They help in:

1. Creating more flexible and reusable components
2. Handling complex state management scenarios
3. Providing better type safety for dynamic data structures
4. Managing component refs properly
5. Implementing context-based state management with proper typing
