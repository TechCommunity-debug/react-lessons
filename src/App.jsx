import Accordian from "./components/Accordian/Accordian";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordian className="accordian">
          <Accordian.Item className="accordian-item">
            <Accordian.Title className="accordian-item-title" id="experience">
              We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content
              className="accordian-item-content"
              id="experience"
            >
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
          <Accordian.Item className="accordian-item">
            <Accordian.Title className="accordian-item-title" id="2">
              2. We got 20 years of experience
            </Accordian.Title>
            <Accordian.Content
              className="accordian-item-content"
              id="2"
            >
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
    </main>
  );
}

export default App;
