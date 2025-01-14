const { render, screen } = require("@testing-library/react");
const { default: RestaurantCardComponent } = require("../RestaurantCardComponent")
import MOCK_DATA from "../mocks/resDataMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with props data", () =>{
    render(<RestaurantCardComponent resData={MOCK_DATA} />);
    const resName = screen.getByText("Pizza Hut");

    expect(resName).toBeInTheDocument();
});

//High order component
// it("should render RestaurantCard component with Promoted Label", () => {

//   });