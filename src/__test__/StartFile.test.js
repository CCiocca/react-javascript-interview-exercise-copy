import { render, fireEvent } from "@testing-library/react"
import App from "../StartFile"

describe("Counter test", ()=>{

    test("render",()=>{
        render(<App />)
    });

    test ("increment counter, should increase of 1", () => {
        const {getAllByText, getByTestId} = render(<App />); //gets the function getByText (lfrom library)from the rendered App  

        //gets the + button and clicks it
        const incrementBtn = getAllByText("+")[0];
        fireEvent.click(incrementBtn);

        //verifies if total is correctly updated from 0 to 1 
        const totalText = getByTestId("totalId").textContent
        const expectedTotal = "Total: 1"
        expect(totalText).toBe(expectedTotal)
    });

    test ("increment counter, should increase of 4", () => {
        const {getAllByText, getByTestId} = render(<App />); //gets the function getByText (lfrom library)from the rendered App  

        //gets all the 4 + button and clicks them
        let incrementBtnArray = getAllByText("+");
        incrementBtnArray.forEach(element => {
            fireEvent.click(element);
        });
        
        //verifies if total is correctly updated from 0 to 4 
        const totalText = getByTestId("totalId").textContent
        const expectedTotal = "Total: 4"
        expect(totalText).toBe(expectedTotal)
    });
    })
