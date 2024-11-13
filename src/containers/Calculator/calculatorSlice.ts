import { createSlice } from "@reduxjs/toolkit";

export interface CalculatorState {
    firstValue: string;
    secondValue: string;
    type: string;
    answerDraw: string;
}

const initialState: CalculatorState = {
    firstValue: '',
    secondValue: '',
    type: '',
    answerDraw: ''
};

export const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        values: (state, action) => {
            if (state.answerDraw && !state.type) {
                state.firstValue = state.answerDraw;
                state.answerDraw = '';
            }

            if (state.type === '') {
                state.firstValue += action.payload;
            } else {
                state.secondValue += action.payload;
            }
        },
        types: (state, action) => {
            if (state.answerDraw && !state.type) {
                state.firstValue = state.answerDraw;
                state.answerDraw = '';
            }
            state.type = action.payload;
        },
        answer: (state) => {
            const num1 = parseFloat(state.firstValue || state.answerDraw);
            const num2 = parseFloat(state.secondValue);

            if (isNaN(num1) || isNaN(num2) || !state.type) return;

            switch (state.type) {
                case '+':
                    state.answerDraw = (num1 + num2).toString();
                    break;
                case '-':
                    state.answerDraw = (num1 - num2).toString();
                    break;
                case '*':
                    state.answerDraw = (num1 * num2).toString();
                    break;
                case '/':
                    state.answerDraw = num2 !== 0 ? (num1 / num2).toString() : "Error";
                    break;
                default:
                    state.answerDraw = "Error";
            }

            state.firstValue = '';
            state.secondValue = '';
            state.type = '';
        },
        clear: (state) => {
            state.firstValue = '';
            state.secondValue = '';
            state.type = '';
            state.answerDraw = '';
        }
    }
});

export const calculatorReducer = calculatorSlice.reducer;
export const { values, types, answer, clear } = calculatorSlice.actions;
