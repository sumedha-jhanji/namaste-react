const { render, screen, fireEvent } = require("@testing-library/react");
const { default: HeaderComponent } = require("../HeaderComponent");
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
// for redux usage
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      {/* <Provider store={appStore}> for redux usage*/}
      <HeaderComponent />
      {/* </Provider>  */}
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with cart items as 0", () => {
  render(
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart");

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  render(
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); // regex

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

it("Should displays online status", () => {
  Object.defineProperty(window.navigator, "onLine", {
    writable: true,
    value: true,
  });
  render(
    <BrowserRouter>
      <HeaderComponent />
    </BrowserRouter>
  );

  const onlineText = screen.getByText(/✅/);

  //Assertion;
  expect(onlineText).toBeInTheDocument();
});

// it('Should display Offline when offline', () => {
//   Object.defineProperty(window.navigator, "onLine", {
//     writable: true,
//     value: false,
//   });
//   render(<BrowserRouter>
//     <HeaderComponent />
//   </BrowserRouter>);
//   const offlineText = screen.getByText(/🔴/i);
//   expect(offlineText).toBeInTheDocument();
// });
