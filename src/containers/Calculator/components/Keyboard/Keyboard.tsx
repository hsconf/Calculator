import './css/style.css';
import {useDispatch} from "react-redux";
import {answer, clear, types, values} from "../../calculatorSlice.ts";

const Keyboard = () => {
    const dispatch = useDispatch();

    return (
        <div className="keyboard">
            <div className="numbers">
                <button onClick={() => dispatch(values(7))}>7</button>
                <button onClick={() => dispatch(values(8))}>8</button>
                <button onClick={() => dispatch(values(5))}>9</button>
                <button onClick={() => dispatch(values(4))}>4</button>
                <button onClick={() => dispatch(values(5))}>5</button>
                <button onClick={() => dispatch(values(6))}>6</button>
                <button onClick={() => dispatch(values(1))}>1</button>
                <button onClick={() => dispatch(values(2))}>2</button>
                <button onClick={() => dispatch(values(3))}>3</button>
                <button onClick={() => dispatch(values(0))}>0</button>
                <button onClick={() => dispatch(types('.'))}>.</button>
                <button onClick={() => dispatch(types('+'))}>+</button>
            </div>
            <div className="symbols">
                <button onClick={() => dispatch(clear())}>ON
                    <hr className="m-0" />
                AC</button>
                <button onClick={() => dispatch(types('*'))}>*</button>
                <button onClick={() => dispatch(types('-'))}>-</button>
                <button onClick={() => dispatch(types('/'))}>/</button>
                <button onClick={() => dispatch(answer())}>=</button>
            </div>
        </div>
    );
};

export default Keyboard;