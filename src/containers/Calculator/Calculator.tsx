import Display from "./components/Display/Display.tsx";
import Keyboard from "./components/Keyboard/Keyboard.tsx";

const Calculator = () => {
    return (
        <div>
            <Display />
            <Keyboard />
        </div>
    );
};

export default Calculator;