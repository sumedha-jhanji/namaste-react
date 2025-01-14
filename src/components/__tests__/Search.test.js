import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import BodyComponent from "../BodyComponent";
import MOCK_DATA from "../mocks/resDataListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for pizza text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  //const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchBtn = screen.getByTestId("Search");

  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput"); // we don't have any palceholder for this input box. Add "data-testid=searchInput" to input box in component

  fireEvent.change(searchInput, { target: { value: "pizza" } }); // target is for e.target.value which is available by browser in component. Here we don't have e.target

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <BodyComponent />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
