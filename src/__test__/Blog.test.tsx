import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Blog } from '../Pages/Blog';

describe("Blog Component", () => {
    test("renders the blog with correct text and image", () => {
        jest.spyOn(console, "warn").mockImplementation(() => { });
        render(
            <Router>
                <Blog />
            </Router>
        );

        // Pengujian Text-Judul
        const blogTitles = screen.getAllByText(/Pakar: Materi Harus Sesuai Perkembangan Anak/i);
        expect(blogTitles.length).toBeGreaterThan(0); 

        // Pengujian Paragraph
        const blogParagraph = screen.getByText(/Baca artikel detikedu/i);
        expect(blogParagraph).toBeInTheDocument();

        // Pengujian Gambar
        const blogImage = screen.getByAltText("Berita");
        expect(blogImage).toBeInTheDocument(); 

        // Pengujian Link
        const blogLink = screen.getByRole("link", {
            name: /detik.com/i,
        });
        expect(blogLink).toBeInTheDocument();
    });
});
