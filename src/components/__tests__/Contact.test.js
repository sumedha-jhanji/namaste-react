const { render, screen } = require("@testing-library/react")
const { default: ContactComponent } = require("../ContactComponent")
import '@testing-library/jest-dom'; // include jest-dom for "toBeInTheDocument"

describe("Contact Us Test cases", () =>{

    // beforeAll(() =>{
    //     console.log("run this function before all the tests");
    // });

    // beforeEach(() =>{
    //     console.log("run this function before each test");
    // });

    // afterAll(() =>{
    //     console.log("run this function after all the tests");
    // });

    // afterEach(() =>{
    //     console.log("run this function after each test");
    // });

    test("Should load contact us component", () =>{
        //rendered component in JSDOM
        render(<ContactComponent />);
    
        //get all the headings from component using "Screen" object of react-testing library
        const heading = screen.getByRole("heading");
    
        //it will verify, whether the heading is there in document or not.
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component", () =>{
        render(<ContactComponent />);
    
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component by text", () =>{
        render(<ContactComponent />);
        
        const button = screen.getByText("Submit");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside contact us component", () =>{
        render(<ContactComponent />);
        
        const input = screen.getByPlaceholderText("name");
        //Assertion
        expect(input).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes inside contact us component", () =>{
        render(<ContactComponent />);
        
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2)
    });
    
    it("example of not toBe (inverse)", () =>{
        render(<ContactComponent />);
        
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).not.toBe(3)
    });
});

