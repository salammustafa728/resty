import Form from "../Component/Form/index";
import Results from "../Component/Results";
import App from "../App"
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import "@testing-library/user-event";

it("Runs function on Button click", async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toBeDefined());
});
test('renders learn react link', () => {
       render(<App />);
      const linkElement = screen.getByText(/learn react/i);                         
       expect(linkElement).toBeInTheDocument();
     });
it("Renders results after submitting the url", async () => {
  const data = {
    results: [
      { name: "fake 1", url: "http://url.com/1" },
      { name: "fake 2", url: "http://url.com/2" },
    ],
  };
  render(<Results data={data} />);
  const items = screen.getByTestId("results");

  expect(items).toHaveTextContent( { "results": [ { "name": "fake 1", "url": "http://url.com/1" }, { "name": "fake 2", "url": "http://url.com/2" } ] });
});
