import { Book, BookOpen, HeartHandshake, Moon, Search, User } from "lucide-react";

function App() {

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">nuonline</h1>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-800 rounded-full">
              <Search size={20} />
            </button>
            <button className="p-2 bg-gray-800 rounded-full">
              <Moon size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col items-center bg-gray-800 p-3 rounded-lg">
            <Book size={24} className="mb-2" />
            <span className="text-sm">Al-Quran</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-3 rounded-lg">
            <User size={24} className="mb-2" />
            <span className="text-sm">Tahlil & Yasin</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-3 rounded-lg">
            {/* <Hands size={24} className="mb-2" /> */}
            <HeartHandshake size={24} className="mb-2" />
            <span className="text-sm">Wirid & Doa</span>
          </div>
          <div className="flex flex-col items-center bg-gray-800 p-3 rounded-lg">
            <BookOpen size={24} className="mb-2" />
            <span className="text-sm">Maulid</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Yasin",
            "Al-Waqi'ah",
            "Al-Mulk",
            "Al-Kahfi",
            "Ar-Rahman",
            "Ayat Kursi",
          ].map((surah) => (
            <span
              key={surah}
              className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {surah}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {[
            {
              number: 1,
              name: "Al-Fatihah",
              translation: "Pembukaan",
              verses: 7,
            },
            { number: 2, name: "Al-Baqarah", translation: "Sapi", verses: 286 },
            {
              number: 3,
              name: "Ali 'Imran",
              translation: "Keluarga Imran",
              verses: 200,
            },
            { number: 4, name: "An-Nisa'", translation: "Wanita", verses: 176 },
            {
              number: 5,
              name: "Al-Ma'idah",
              translation: "Hidangan",
              verses: 120,
            },
          ].map((surah) => (
            <div
              key={surah.number}
              className="flex justify-between items-center bg-gray-800 p-3 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold">{surah.number}</span>
                <div>
                  <h3 className="font-bold">{surah.name}</h3>
                  <p className="text-sm text-gray-400">
                    {surah.translation} · {surah.verses}
                  </p>
                </div>
              </div>
              <span className="text-2xl font-arabic">{surah.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
