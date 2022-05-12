import Day from "./Day";

export default function Lineup(stage) {
  // console.log(midgard.midgard.mon);
  // Object.values(stage).map((days) => console.log(days));
  // console.log(stage);
  const monday = stage.mon;
  const tuesday = stage.tue;
  const wednesday = stage.wed;
  const thursday = stage.thu;
  const friday = stage.fri;
  const saturday = stage.sat;
  const sunday = stage.sun;

  return (
    <div className="lineup">
      <Day {...monday}></Day>
      <Day {...tuesday}></Day>
      <Day {...wednesday}></Day>
      <Day {...thursday}></Day>
      <Day {...friday}></Day>
      <Day {...saturday}></Day>
      <Day {...sunday}></Day>
    </div>

    // return <ul>{schedule.map((jotunheim) => console.log(jotunheim))}</ul>;

    /* // return <section className="product__list">{schedule[0].map((jotunheim) => console.log(jotunheim))}</section>; */
  );
}
