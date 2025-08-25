import "./app.scss";
import Tabulator from "./components/tabulator/tabulator";

const hammock = {
  name: "Cranberry Lemonade",
  images: [
    "https://pm1.aminoapps.com/7482/4baa3abc2952c3349bc41b8fe512d3a0f0c671a8r1-1024-576v2_hq.jpg",
  ],
};

const hammock2 = {
  name: "Blueberry Lemonade",
  images: [
    "https://pm1.aminoapps.com/7482/4baa3abc2952c3349bc41b8fe512d3a0f0c671a8r1-1024-576v2_hq.jpg",
  ],
};

const data = [
  {
    category: "luxury",
    price: 79.99,
    weight: "4 kg",
    size: "2.70 x 1.65m",
    hammocks: [
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
      hammock,
    ],
  },
  {
    category: "chair",
    price: 39.99,
    weight: "1.2 kg",
    size: "1.50 x 1.20m",
    hammocks: [
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
      hammock2,
    ],
  },
  {
    category: "double",
    price: 39.99,
    weight: "1.6 kg",
    size: "2.40 x 1.60m",
    hammocks: [hammock, hammock2, hammock2, hammock, hammock],
  },
  {
    category: "single",
    price: 29.99,
    weight: "1.1 kg",
    size: "2.10 x 1.20m",
    hammocks: [hammock2, hammock, hammock2, hammock],
  },
];

function App() {
  return (
    <div className="content">
      <Tabulator dataset={data} />
    </div>
  );
}

export default App;
