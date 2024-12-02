import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/Navbar";

test("Navbar renders correctly", () => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Memeriksa apakah logo dan link muncul
  expect(screen.getByTestId("navbar")).toBeInTheDocument();
  expect(screen.getByTestId("home-link")).toBeInTheDocument();
  expect(screen.getByTestId("blog-link")).toBeInTheDocument();
  expect(screen.getByTestId("contact-link")).toBeInTheDocument();
});

test("Hamburger menu toggle in mobile view", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Memeriksa apakah tombol hamburger muncul pada mobile
  const hamburgerBtn = screen.getByTestId("hamburger-btn");
  fireEvent.click(hamburgerBtn);

  // Memeriksa apakah modal menu muncul
  expect(screen.getByTestId("modal")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("modal-overlay"));

  // Memeriksa apakah modal hilang setelah di-click
  expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
});
