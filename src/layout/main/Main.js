import "./Main.css";
import StopWatch from "../../components/stop-watch/StopWatch";

const Main = () => {
  return (
    <main className="main">
      <section className="online-stopwatch">
        <StopWatch />
      </section>
    </main>
  );
};

export default Main;
