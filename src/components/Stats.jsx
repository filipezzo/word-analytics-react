function Stats({ data }) {
  return (
    <section className="stats">
      <Stat number={data.numberOfWords} type="words" />
      <Stat number={data.numberOfCharacters} type="characters" />
      <Stat number={data.instagramChLeft} type="instagram" />
      <Stat number={data.facebookChLeft} type="facebook" />
    </section>
  );
}

export default Stats;

function Stat({ number, type }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{type}</h2>
    </section>
  );
}
