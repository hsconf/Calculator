import {useSelector} from "react-redux";
import {RootState} from "../../../../app/store.ts";

const Display = () => {

    const {firstValue, secondValue, type, answerDraw} = useSelector((state: RootState) => state.calculator);

    return (
        <div className="bg-dark" style={{ height: 40 }}>
            <div className="p-2 text-light text-end">
                {firstValue} {type} {secondValue}
                {answerDraw ? ` = ${answerDraw}` : null}
            </div>
        </div>
    );
};

export default Display;