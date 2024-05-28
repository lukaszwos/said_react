function MyComponent({ user }) {
  return (
    <>
      <div style={{ color: "red" }}>This is my component - not main</div>

      <div style={{ color: "green" }}>
        I received the following user object: {JSON.stringify(user)}
      </div>
    </>
  );
}

function AnotherComponent() {
  return <div>This is the second component from the same file</div>;
}

let a = "22";

export { MyComponent, AnotherComponent, a };
