import { render, screen } from '@testing-library/react';
import gambar from '../assets/profile3.jpg'; // Import gambar jika diperlukan
import { About } from '../Pages/About';

describe("About Component", () => {
    test("renders About component with correct image, text, and table data", () => {
        // Render komponen About
        render(<About />);

        // Verifikasi gambar profil
        const profileImage = screen.getByAltText("Profile");
        expect(profileImage).toBeInTheDocument(); // Memastikan gambar dengan alt text "Profile" ada
        expect(profileImage).toHaveAttribute("src", gambar); // Memastikan gambar yang digunakan sesuai dengan gambar yang diimport

        // Verifikasi judul "About Me"
        const aboutTitle = screen.getByText(/About Me !/i);
        expect(aboutTitle).toBeInTheDocument(); // Memastikan judul "About Me" ada

        // Verifikasi paragraf deskripsi
        const paragraphText = screen.getByText(/I am a web developer who has a desire to learn and grow in the digital world/i);
        expect(paragraphText).toBeInTheDocument(); // Memastikan paragraf yang mengandung teks deskripsi ada

        // Verifikasi tabel data (misalnya Nama, Negara, Email, Pendidikan)
        const nameRow = screen.getByText(/Name/i);
        expect(nameRow).toBeInTheDocument();
        const countryRow = screen.getByText(/Country/i);
        expect(countryRow).toBeInTheDocument();
        const emailRow = screen.getByText(/Email/i);
        expect(emailRow).toBeInTheDocument();
        const educationRow = screen.getByText(/Education/i);
        expect(educationRow).toBeInTheDocument();

        // Verifikasi data dalam tabel (misalnya nama, negara, email, pendidikan)
        expect(screen.getByText(/Nadia Putri Rahmawati/i)).toBeInTheDocument();
        expect(screen.getByText(/Indonesia/i)).toBeInTheDocument();
        expect(screen.getByText(/Nadiaputrirahman@gmail.com/i)).toBeInTheDocument();
        expect(screen.getByText(/Universitas Muhammadiyah Sukabumi/i)).toBeInTheDocument();

        // Verifikasi teks "Thank You ✨"
        const thankYouText = screen.getByText(/Thank You ✨/i);
        expect(thankYouText).toBeInTheDocument(); // Memastikan teks "Thank You ✨" ada
    });
});
