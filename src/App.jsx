import Accordian from "./components/Accordian/Accordian";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordian">
          <Accordian.Item id="experience" className="accordian-item">
            <Accordian.Title className="accordian-item-title">
              We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content className="accordian-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  Our team of seasoned professionals brings a wealth of
                  knowledge and experience to the table, ensuring top-notch
                  solutions for your business needs.
                </p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
          <Accordian.Item id="2" className="accordian-item">
            <Accordian.Title className="accordian-item-title">
              2. We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content className="accordian-item-content">
              <article>
                <p>2. You can&apos;t go wrong with us.</p>
                <p>
                  2. Our team of seasoned professionals brings a wealth of
                  knowledge and experience to the table, ensuring top-notch
                  solutions for your business needs.
                </p>
              </article>
            </Accordian.Content>
          </Accordian.Item>
        </Accordian>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item1", "item2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
