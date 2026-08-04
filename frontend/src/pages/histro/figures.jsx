import { useState } from "react";

export default function HistoryQuiz() {
  const [hovered, setHovered] = useState(null);

  const groups = [
    {
      title: "Governors & Viceroys",
      people: [
        "Lord Dalhousie",
        "Lord Curzon",
        "Lord Mountbatten",
        "Lord Ripon",
        "Lord Wellesley",
      ],
    },
    {
      title: "Freedom Movement",
      people: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Subhas Bose",
        "Bal Gangadhar Tilak",
        "Gopal Krishna Gokhale",
        "Sardar Patel",
      ],
    },
    {
      title: "Constitution",
      people: [
        "B. R. Ambedkar",
        "Rajendra Prasad",
        "Alladi Krishnaswamy Ayyar",
      ],
    },
    {
      title: "Revolutionaries",
      people: [
        "Bhagat Singh",
        "Chandrasekhar Azad",
        "Ram Prasad Bismil",
        "Ashfaqulla Khan",
      ],
    },
  ];

  return (
  <div className="min-h-screen bg-[#f7f7f7] p-5">

  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">
      History Figures Quiz
    </h1>

    <div className="flex gap-3">
      <div className="bg-white rounded-xl px-4 py-2 shadow">
        Score: <span className="font-bold">0</span>
      </div>

      <div className="bg-white rounded-xl px-4 py-2 shadow">
        Question 1/50
      </div>
    </div>
  </div>

  {/* Figure Area */}
  <div className="bg-white rounded-2xl shadow-lg p-4">

    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">

      {groups.map((group)=>(
        <div key={group.title}>

          <h3 className="text-[11px] uppercase tracking-widest text-gray-500 mb-2">
            {group.title}
          </h3>

          <div className="grid grid-cols-5 gap-1">

            {group.people.map((person)=>(
              <button
                key={person}
                className="
                  relative
                  aspect-square
                  rounded-lg
                  overflow-hidden
                  bg-gray-200
                  hover:scale-105
                  transition
                  group
                "
              >

                <img
                  src={`/history/${person.image}`}
                  className="w-full h-full object-cover"
                />

                <div className="
                  absolute
                  inset-0
                  bg-black/60
                  opacity-0
                  group-hover:opacity-100
                  transition
                  flex
                  items-center
                  justify-center
                  p-1
                ">

                  <span className="text-white text-[9px] text-center leading-tight font-semibold">
                    {person.name}
                  </span>

                </div>

              </button>
            ))}

          </div>

        </div>
      ))}

    </div>

  </div>

  {/* Question */}
  <div className="fixed bottom-0 left-0 right-0 bg-[#111827] shadow-2xl">

    <div className="max-w-7xl mx-auto py-5 px-8">

      <div className="text-red-400 uppercase tracking-[4px] text-xs mb-2">
        Question
      </div>

      <h2 className="text-white text-2xl font-bold">
        Who introduced the Doctrine of Lapse?
      </h2>

      <p className="text-gray-400 text-sm mt-2">
        Click on the correct historical figure above.
      </p>

    </div>

  </div>

</div>
  );
}