/* eslint-disable testing-library/no-unnecessary-act */
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { act, render, screen, waitFor } from "@testing-library/react";
import {
  mockStore,
  mockStoreLoading,
  mockSuccessStore,
} from "../../mocks/makeWrapper";
import { newStore } from "../../redux/store";
import mockToken from "../../mocks/mockToken";

afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

describe("Given an App component", () => {
  describe("When it's rendered with path '/'", () => {
    test("Then it should render 'not found page'", async () => {
      const expectedApp = TestRenderer.create(
        <Provider store={mockStoreLoading}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });

  describe("When it's rendered with path '/login'", () => {
    test("Then it should render login page with their header component", async () => {
      const headerText = "You are back! We missed you...";

      await act(() => {
        render(
          <Provider store={newStore}>
            <MemoryRouter initialEntries={["/login"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: headerText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/register'", () => {
    test("Then it should render register page with their header component", async () => {
      const headerText = "What a great idea, register and become one of us...";

      await act(() => {
        render(
          <Provider store={newStore}>
            <MemoryRouter initialEntries={["/register"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: headerText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/calendar'", () => {
    test("Then it should render calendar page with their header component", async () => {
      const titleText = "Let’s open today’s window!";

      localStorage.setItem("token", mockToken);

      await act(() => {
        render(
          <Provider store={mockStoreLoading}>
            <MemoryRouter initialEntries={["/calendar"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: titleText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/detail-post/638b38336f2e824ae4cd3a03'", () => {
    test("Then it should render calendar page with their header component", async () => {
      const titleText = "Today's post is amazing... Congratulations!";

      localStorage.setItem("token", mockToken);

      await act(() => {
        render(
          <Provider store={mockStoreLoading}>
            <MemoryRouter
              initialEntries={["/detail-post/638b38336f2e824ae4cd3a03"]}
            >
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: titleText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/404'", () => {
    test("Then it should render not found page with their header component", async () => {
      await act(() => {
        render(
          <Provider store={mockStoreLoading}>
            <MemoryRouter initialEntries={["/404"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const icon = screen.queryByTestId("404-icon");

        expect(icon).toBeInTheDocument();
      });
    });
  });

  describe("When it's render with an error", () => {
    test("Then it should show Modal Component with 'Something went wrong, please try again in a few minutes'", async () => {
      const informationText = "Error";

      await act(() => {
        render(
          <Provider store={mockStore}>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedModal = screen.queryByText(informationText);

        expect(expectedModal).toBeInTheDocument();
      });
    });
  });

  describe("When it's render with a success", () => {
    test("Then it should show Modal Component with 'Success'", async () => {
      const informationText = "Success";

      await act(() => {
        render(
          <Provider store={mockSuccessStore}>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedModal = screen.queryByText(informationText);

        expect(expectedModal).toBeInTheDocument();
      });
    });
  });
});
