import { useState } from "react";
import Navbar from "../components/Navbar";

export const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State untuk menyimpan data yang sudah dikirim
  const [sentData, setSentData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  const [showAlert, setShowAlert] = useState(false);

  // Fungsi untuk menangani pengiriman data
  const handleSendMessage = () => {
    const data = {
      name,
      email,
      subject,
      message,
    };

    // Simpan data ke state `sentData` dan tampilkan alert
    setSentData(data);
    setShowAlert(true);
  };

  return (
    <div className="bg-slate-50 h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-44 px-4">
        <h1
          className="text-center mb-10 font-bold text-4xl text-sky-950"
          style={{ fontFamily: "Rampart One" }}
        >
          Contact Me
        </h1>

        {/* Alert */}
        {showAlert && sentData && (
          <div className="alert bg-secondary text-black border-0 shadow-lg mb-6 w-full sm:w-full md:w-2/3 lg:w-1/2">
            <div>
              <span>
                Message Succesly {sentData.name}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-full md:w-2/3 lg:w-1/2">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="w-full border-2 bg-white border-dark p-3 text-gray-700 focus:outline-none focus:bg-slate-50"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border-2 bg-white border-dark p-3 text-gray-700 focus:outline-none focus:bg-slate-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-6 w-full sm:w-full md:w-2/3 lg:w-1/2">
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full border-2 bg-white border-dark p-3 text-gray-700 focus:outline-none focus:bg-slate-50"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mt-6 w-full sm:w-full md:w-2/3 lg:w-1/2">
          <textarea
            id="message"
            rows={5}
            placeholder="Message"
            className="w-full border-2 bg-white border-dark p-3 text-gray-700 focus:outline-none focus:bg-slate-50 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          className="mt-6 bg-secondary p-3 text-white shadow-lg"
          onClick={handleSendMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};
