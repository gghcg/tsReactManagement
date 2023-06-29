import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const { num } = useSelector((state: { numReducer: RootState }) => {
    console.log(state.numReducer);
    return { num: state.numReducer.state.num };
  });
  const dispatch = useDispatch();
  return (
    <div>
      {num}
      <button
        onClick={() => {
          dispatch({ type: "setNumVal", valName: "numx", val: 11 });
        }}
      >
        addNum
      </button>
      <button
        onClick={() => {
          console.log(
            dispatch({ type: "getNumVal", valName: "numx", val: 100 }),
            666
          );
        }}
      >
        addNum
      </button>
    </div>
  );
};

export default Login;
