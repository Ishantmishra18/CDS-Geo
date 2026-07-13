import { useMemo, useState } from "react";
import { rivers } from "../../data/india";

export const riverNames = [
  { id: "ganga", name: "Ganga" },
  { id: "yamuna", name: "Yamuna" },
  { id: "ramganga", name: "Ramganga" },
  { id: "gomti", name: "Gomti" },
  { id: "ghaghara", name: "Ghaghara" },
  { id: "gandak", name: "Gandak" },
  { id: "kosi", name: "Kosi" },
  { id: "son", name: "Son" },
  { id: "damodar", name: "Damodar" },
  // ...continue for every river
];

export default function TributaryQuiz() {
  const question = rivers.find(r => r.id === "ganga");

  const options = useMemo(() => {
    const wrong = riverNames
      .filter(
        r =>
          !question.tributaries.includes(r.id) &&
          r.id !== question.id
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    const correct = riverNames.filter(r =>
      question.tributaries.includes(r.id)
    );

    return [...correct, ...wrong].sort(
      () => Math.random() - 0.5
    );
  }, []);

  const [available, setAvailable] = useState(options);

  const [found, setFound] = useState([]);

  const [message, setMessage] = useState("");

  const dropRiver = id => {
    if (question.tributaries.includes(id)) {
      const river = available.find(r => r.id === id);

      setFound(prev => [...prev, river]);

      setAvailable(prev =>
        prev.filter(r => r.id !== id)
      );

      setMessage("✅ Correct");
    } else {
      setMessage("❌ Wrong River");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-5xl font-bold text-center">
        {question.name}
      </h1>

      <p className="text-center mt-2">
        {found.length} / {question.tributaries.length}
      </p>

      <div
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          e.preventDefault();
          dropRiver(
            e.dataTransfer.getData("river")
          );
        }}
        className="mt-8 border-4 border-dashed rounded-xl p-8 min-h-44 bg-blue-50"
      >
        <div className="flex flex-wrap gap-3">

          {found.map(r => (
            <div
              key={r.id}
              className="bg-green-500 text-white px-4 py-2 rounded-full"
            >
              {r.name}
            </div>
          ))}

        </div>
      </div>

      <p className="text-center h-8 mt-4">
        {message}
      </p>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">

        {available.map(r => (
          <div
            key={r.id}
            draggable
            onDragStart={e =>
              e.dataTransfer.setData(
                "river",
                r.id
              )
            }
            className="cursor-grab active:cursor-grabbing bg-white shadow px-5 py-3 rounded-full hover:shadow-lg transition"
          >
            {r.name}
          </div>
        ))}

      </div>

    </div>
  );
}