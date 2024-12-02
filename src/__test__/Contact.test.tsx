import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Contact } from "../Pages/Contact";

// Mock komponen Navbar agar tidak perlu render komponen Navbar yang sesungguhnya
jest.mock('../components/Navbar', () => () => <div>Navbar</div>);

describe('Contact Component', () => {
  it('renders contact form fields correctly', () => {
    render(<Contact />);

    // Cek apakah input untuk nama, email, subjek, dan pesan ada
    expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
  });

  it('displays alert with correct message after submitting the form', async () => {
    render(<Contact />);

    // Isi form
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'johndoe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Subject/i), { target: { value: 'Inquiry' } });
    fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: 'Hello, I have a question.' } });

    // Klik tombol kirim
    fireEvent.click(screen.getByText(/Send Message/i));

    // Tunggu alert muncul dan periksa isi pesan alert
    await waitFor(() => {
      expect(screen.getByText(/Message Succesly John Doe/i)).toBeInTheDocument();
    });
  });

  it('does not display alert initially', () => {
    render(<Contact />);

    // Cek bahwa alert tidak muncul pada awalnya
    expect(screen.queryByText(/Message Succesly/i)).not.toBeInTheDocument();
  });
});
