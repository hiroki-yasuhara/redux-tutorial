//useSelectorはアクセス, useDipatchで更新
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment,decrement2, increment2, incrementByAmount } from "./redux/counterSlice";
// import { useRouter } from 'next/router';

function App() {
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector((state) => state.counter.value2);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");
  // const router = useRouter();
  // const handleRoute = () => {
  //   router.push({
  //     pathname: `/test`, // 遷移先のページ
  //   });
  // };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button onClick={() => dispatch(increment2())}>②＋</button>
      <button onClick={() => dispatch(decrement2())}>②ー</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
      {/* <button type="button" onClick={handleRoute}>ページ遷移</button> */}
      
    </div>
  );
}

export default App;
