import Accordian from "./components/Accordian/Accordian";
import AccordianItem from "./components/Accordian/AccordianItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordian">
          <AccordianItem className="accordian-item" title="We got 20 years of experience">
            <article>
              <p>You can&apos;t go wrong with us.</p>
            <p>
              Our team of seasoned professionals brings a wealth of knowledge and
              experience to the table, ensuring top-notch solutions for your
              business needs.
            </p>
            </article>
          </AccordianItem>
          <AccordianItem className="accordian-item" title="2. We got 20 years of experience">
            <article>
              <p>2. You can&apos;t go wrong with us.</p>
            <p>
              2. Our team of seasoned professionals brings a wealth of knowledge and
              experience to the table, ensuring top-notch solutions for your
              business needs.
            </p>
            </article>
          </AccordianItem>
        </Accordian>
      </section>
    </main>
  );
}

export default App;
