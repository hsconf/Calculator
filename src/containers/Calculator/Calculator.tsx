import Display from "./components/Display/Display.tsx";
import Keyboard from "./components/Keyboard/Keyboard.tsx";

const Calculator = () => {
    return (
        <div className="w-25 mx-auto mt-5 border border-2 rounded py-2 px-2">
            <Display />
            <Keyboard />
        </div>
    );
};

export default Calculator;