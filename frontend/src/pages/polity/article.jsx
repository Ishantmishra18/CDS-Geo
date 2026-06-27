import { useState, useEffect } from "react";
import { articles } from "../../data/polity";

export default function Article() {
  const [questionList, setQuestionList] = useState([]);
  const [index, setIndex] = useState(0);

  const [selected, setSelected] = useState(null);
  const [resultIcon, setResultIcon] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const constitution = [
   
  {
    part: "Part I - The Union and its Territory",
    articles: ["1", "2", "3", "4"]
  },
  {
    part: "Part II - Citizenship",
    articles: ["5", "6", "7", "8", "9", "10", "11"]
  },
  {
    part: "Part III - Fundamental Rights",
    articles: [
      "12", "13", "14", "15", "16", "17", "18",
      "19", "20", "21", "21A", "22", "23", "24",
      "25", "26", "27", "28", "29", "30", "31A",
      "31B", "31C", "32", "32A", "33", "34", "35"
    ]
  },
  {
    part: "Part IV - Directive Principles of State Policy",
    articles: [
      "36", "37", "38", "39", "39A", "40", "41",
      "42", "43", "43A", "43B", "44", "45", "46",
      "47", "48", "48A", "49", "50", "51"
    ]
  },
  {
    part: "Part IVA - Fundamental Duties",
    articles: ["51A"]
  },
  {
    part: "Part V - The Union",
    articles: [
      "52", "53", "54", "55", "56", "57", "58", "59",
      "60", "61", "62", "63", "64", "65", "66", "67",
      "68", "69", "70", "71", "72", "73", "74", "75",
      "76", "77", "78", "79", "80", "81", "82", "83",
      "84", "85", "86", "87", "88", "89", "90", "91",
      "92", "93", "94", "95", "96", "97", "98", "99",
      "100", "101", "102", "103", "104", "105", "106",
      "107", "108", "109", "110", "111", "112", "113",
      "114", "115", "116", "117", "118", "119", "120",
      "121", "122", "123", "124", "124A", "124B",
      "124C", "125", "126", "127", "128", "129",
      "130", "131", "131A", "132", "133", "134",
      "134A", "135", "136", "137", "138", "139",
      "139A", "140", "141", "142", "143", "144",
      "144A", "145", "146", "147", "148", "149",
      "150", "151"
    ]
  },
  {
    part: "Part VI - The States",
    articles: Array.from({ length: 86 }, (_, i) => `${152 + i}`)
  },
  {
    part: "Part VII - States in Part B of the First Schedule (Repealed)",
    articles: ["238"]
  },
  {
    part: "Part VIII - Union Territories",
    articles: ["239", "239A", "239AA", "239AB", "239B", "240", "241", "242"]
  },
  {
    part: "Part IX - Panchayats",
    articles: [
      "243", "243A", "243B", "243C", "243D", "243E",
      "243F", "243G", "243H", "243I", "243J", "243K",
      "243L", "243M", "243N", "243O"
    ]
  },
  {
    part: "Part IXA - Municipalities",
    articles: [
      "243P", "243Q", "243R", "243S", "243T", "243U",
      "243V", "243W", "243X", "243Y", "243Z", "243ZA",
      "243ZB", "243ZC", "243ZD", "243ZE", "243ZF", "243ZG"
    ]
  },
  {
    part: "Part IXB - Cooperative Societies",
    articles: [
      "243ZH", "243ZI", "243ZJ", "243ZK",
      "243ZL", "243ZM", "243ZN", "243ZO", "243ZP", "243ZQ", "243ZR", "243ZS", "243ZT"
    ]
  },
  {
    part: "Part X - Scheduled and Tribal Areas",
    articles: ["244", "244A"]
  },
  {
    part: "Part XI - Relations between the Union and the States",
    articles: [
      "245", "246", "246A", "247", "248", "249",
      "250", "251", "252", "253", "254", "255",
      "256", "257", "257A", "258", "258A", "259",
      "260", "261", "262", "263"
    ]
  },
  {
    part: "Part XII - Finance, Property, Contracts and Suits",
    articles: Array.from({ length: 37 }, (_, i) => `${264 + i}`)
  },
  {
    part: "Part XIII - Trade, Commerce and Intercourse",
    articles: ["301", "302", "303", "304", "305", "306", "307"]
  },
  {
    part: "Part XIV - Services under the Union and the States",
    articles: [
      "308", "309", "310", "311", "312", "312A",
      "313", "314", "315", "316", "317", "318",
      "319", "320", "321", "322", "323"
    ]
  },
  {
    part: "Part XIVA - Tribunals",
    articles: ["323A", "323B"]
  },
  {
    part: "Part XV - Elections",
    articles: ["324", "325", "326", "327", "328", "329", "329A"]
  },
  {
    part: "Part XVI - Special Provisions Relating to Certain Classes",
    articles: Array.from({ length: 18 }, (_, i) => `${330 + i}`)
  },
  {
    part: "Part XVII - Official Language",
    articles: Array.from({ length: 17 }, (_, i) => `${343 + i}`)
  },
  {
    part: "Part XVIII - Emergency Provisions",
    articles: ["352", "353", "354", "355", "356", "357", "358", "359", "359A", "360"]
  },
  {
    part: "Part XIX - Miscellaneous",
    articles: ["361", "361A", "361B", "362", "363", "363A", "364", "365", "366", "367"]
  },
  {
    part: "Part XX - Amendment of the Constitution",
    articles: ["368"]
  },
  {
    part: "Part XXI - Temporary, Transitional and Special Provisions",
    articles: Array.from({ length: 24 }, (_, i) => `${369 + i}`)
  },
  {
    part: "Part XXII - Short Title, Commencement, Authoritative Text and Repeals",
    articles: ["393", "394", "394A", "395"]
  }
];

  useEffect(() => {
    const shuffled = [...articles].sort(() => Math.random() - 0.5);
    setQuestionList(shuffled);
  }, []);

  const question = questionList[index];

  const nextQuestion = () => {
    if (index + 1 < questionList.length) {
      setIndex((prev) => prev + 1);
    } else {
      const shuffled = [...articles].sort(() => Math.random() - 0.5);
      setQuestionList(shuffled);
      setIndex(0);
    }

    setSelected(null);
    setAttempts(0);
    setShowAnswer(false);
    setResultIcon(null);
  };

  const checkResponse = (clickedAns) => {
    if (!question) return;

    setSelected(clickedAns);

    console.log(clickedAns, typeof clickedAns);
console.log(question.ans, typeof question.ans);
console.log(clickedAns === question.ans);

    // Make sure your data stores ans as a NUMBER
    // Example: { ans: 18, des: "..." }

    if (clickedAns === question.ans) {
      setResultIcon("correct");
      new Audio("/sounds/right.mp3").play();

      setTimeout(() => {
        nextQuestion();
      }, 1000);

      console.log("Correct Answer:", question.ans);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      setResultIcon("wrong");
      new Audio("/sounds/wrong.mp3").play();

      setTimeout(() => {
        setResultIcon(null);
      }, 1000);

      if (newAttempts >= 3) {
        setShowAnswer(true);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

<div className=" flex  flex-wrap gap-5">
      {constitution.map((part) => (
        <div key={part.part} className="mb-10 bg-slate-100 p-5 rounded-xl">

          <h2 className="text-md font-bold mb-4">
            {part.part}
          </h2>

          <div className="flex flex-wrap gap-3">

            {part.articles.map((article) => (
              <button
                key={article.article}
                onClick={() => checkResponse(article)}
                className={`rounded-xl border px-5 py-3 transition bg-white
                  ${
                    selected === article.article
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-100"
                  }`}
              >
                 {article}
              </button>
            ))}

          </div>

        </div>
      ))}
      </div>

    {question && (
  <div
    className="
      fixed bottom-4 left-1/2 -translate-x-1/2
      w-[95%] sm:w-[85%] md:w-[70%] lg:w-[55%] xl:w-[45%]
      max-w-3xl
      rounded-xl border bg-white/70 backdrop-blur-md
      shadow-lg p-4 sm:p-6
    "
  >
    <h2 className="mb-3 text-sm font-bold text-gray-800">
      Identify the Article
    </h2>

    <p className="text-base sm:text-lg leading-7">
      {question.des}
    </p>

    {showAnswer && (
      <div className="mt-5 rounded-lg bg-green-100 p-3 text-base sm:text-lg font-semibold">
        Correct Answer: Article {question.ans}
      </div>
    )}
  </div>
)}

      {resultIcon === "correct" && (
        <p className="mt-4 text-green-600 font-bold">
          ✔ Correct!
        </p>
      )}

      {resultIcon === "wrong" && (
        <p className="mt-4 text-red-600 font-bold">
          ✖ Wrong!
        </p>
      )}

    </div>
  );
}