import { memo, useState } from "react";

// Regular component that re-renders every time
function ExpensiveComponent({ value }) {
  return <div>Regular component result: {value}</div>;
}

// Memoized version that only re-renders when props change
const MemoizedComponent = memo(function ({ value }) {
  return <div>Memoized component result: {value}</div>;
});

function MemoExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(42);

  return (
    <div
      className="memo-example"
      style={{ border: "2px solid purple", padding: "10px", margin: "10px 0" }}
    >
      <h2>React.memo Example</h2>
      <p>Count: {count} (changing this won't affect memoized component)</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <h4>Regular Component</h4>
          <ExpensiveComponent value={value} />
        </div>

        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <h4>Memoized Component</h4>
          <MemoizedComponent value={value} />
        </div>
      </div>

      <button onClick={() => setValue(value + 1)}>
        Change Value Prop (+1)
      </button>
    </div>
  );
}

export default MemoExample;
