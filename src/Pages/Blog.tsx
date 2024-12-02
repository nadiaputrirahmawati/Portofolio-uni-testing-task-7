import Navbar from "../components/Navbar";
import berita from "../assets/berita.png";

export const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-50 pt-40">
        <div className="text-center">
          <h1 className="text-black text-lg"> Publish, November 13, 2024</h1>
          <h1 className="text-black font-bold text-4xl mt-3">
            SD CODING & AI DI AJARKAN SEJAK SD
          </h1>
          <h1 className="text-black text-xl font-semibold mt-4">
            Pakar: Materi Harus Sesuai Perkembangan Anak
          </h1>
        </div>

        {/* Gambar */}
        <div className="flex flex-wrap justify-center items-center mt-4">
          <img src={berita} alt="Berita" className="w-full md:w-2/3 lg:w-1/2" />
        </div>

        {/* Paragraf di bawah gambar */}
        <div className="flex justify-center items-center mt-4 px-4 text-black ">
          <div className="border border-gray-500 mb-10 p-6 w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-md">
            <p className="text-justify text-sm leading-relaxed">
              <strong>Jakarta</strong> - Menteri Pendidikan Dasar dan Menengah (Mendikdasmen), Abdul Mu'ti mengatakan pembelajaran coding dan artificial intelligence (AI) akan menjadi mata pelajaran pilihan di SD dan SMP.
              "Kami sampaikan dalam rencana kami untuk pembaruan kurikulum yang akan datang itu akan menambahkan mata pelajaran artificial intelligence (AI) dan coding," katanya di Jakarta, Senin (11/11/2024).
            </p>
            <p className="text-justify text-md leading-relaxed mt-4">
              Menanggapi hal tersebut, pakar pendidikan dari Universitas Muhammadiyah (UM) Surabaya, Holy Ichda Wahyuni berpendapat setuju dengan kebijakan tersebut. Coding dan AI cukup dijadikan mata pelajaran pilihan bukan wajib.
            </p>

            <h3 className="text-xl font-bold mt-3 mb-3">Materi Pembelajaran Sesuai Perkembangan Anak</h3>
            <p className="text-justify text-md leading-relaxed mt-4">
              Kemudian, Holy memberikan saran bentuk-bentuk pelajaran coding dan AI yang cocok bagi anak SD. Materi harus sesuai dengan tahap perkembangan anak.

              Dalam teori perkembangan dari Piaget dan Bruner, disebutkan bahwa anak usia SD memang sudah berpikir bisa menangkap bahasa secara logis. Namun, mereka belum bisa berpikir abstrak.

              Ia berharap para orang tua tak berpikir coding yang diajarkan bentuknya dalam HTML, Javascript dan lainnya. Akan tetapi, hanya pengenalan logika dasar saja.

              "Jadi lebih ke pengenalan logika dasar, permainan visual, gabungan visual dan numerik. Ini tentu akan berlanjut, dan di setiap jenjang terdapat progress," katanya.

              Konsep mapel coding dan AI ini nantinya tak harus berbentuk sistem yang diakses lewat komputer. Pembelajaran bisa dimulai lewat alat peraga seperti kartu.
            </p>
            <p className="text-justify text-md leading-relaxed mt-4">
              Baca artikel detikedu, "Coding & AI Diajarkan Sejak SD, Pakar: Materi Harus Sesuai Perkembangan Anak" selengkapnya di{' '}
              <a
                href="https://www.detik.com/edu/detikpedia/d-7638808/coding-ai-diajarkan-sejak-sd-pakar-materi-harus-sesuai-perkembangan-anak"
                className="text-blue-600 underline"
              >
                detik.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
