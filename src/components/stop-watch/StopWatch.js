import { useState } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [intervalArray, setIntervalArray] = useState([]);

  const startClicked = () => {
    console.log("startClicked");
  };
  const stopClicked = () => {
    console.log("stopClicked");
  };
  const intervalClicked = () => {
    console.log("intervalClicked");
  };
  const clearClicked = () => {
    console.log("clearClicked");
  };

  return (
    <div className="stop-watch">
      <div className="container">
        <div className="row">
          <div className="col-5 text-center my-5 mx-auto">
            <div className="card">
              <div className="card-header">
                <h2>Online Stopwatch</h2>
              </div>
              <div className="card-body">
                <div className="border my-1">
                  <p className="timer-hour fs-1">{hour}</p>
                  <p className="fs-5">Hours</p>
                </div>
                <div className="border my-1">
                  <p className="timer-minute fs-1">{minute}</p>
                  <p className="fs-5">Minutes</p>
                </div>
                <div className="border my-1">
                  <p className="timer-second fs-1">{second}</p>
                  <p className="fs-5">Seconds</p>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success w-75 mx-auto my-1"
                  onClick={startClicked}
                >
                  Start
                </button>
                <button
                  className="btn btn-danger w-75 mx-auto my-1"
                  onClick={stopClicked}
                >
                  Stop
                </button>
                <button
                  className="btn btn-secondary w-75 mx-auto my-1"
                  onClick={intervalClicked}
                >
                  Interval
                </button>
                <button
                  className="btn btn-warning w-75 mx-auto my-1"
                  onClick={clearClicked}
                >
                  Clear
                </button>
              </div>
              <div className="card-footer">
                {intervalArray.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
