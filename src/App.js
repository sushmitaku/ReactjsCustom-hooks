import "./styles.css";
import useCounterWithInterval from "./useCounterWithInterval";
export default function App() {
const {count,startInterval,stopInterval} = useCounterWithInterval(0);




return (
<div>
<h1>Counter App</h1>
<p>Count: {count}</p>
<button onClick={() => startInterval(true)}>
Start Increment
</button>
<button onClick={() => startInterval(false)}>
Start Decrement
</button>
<button onClick={stopInterval}>Stop Interval</button>
</div>
);
}
