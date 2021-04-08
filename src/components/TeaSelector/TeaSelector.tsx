import React from "react";
import { Duration } from "luxon";

function minutes(num) {
  return num * 60 * 1000;
}

export const teaTypes = {
  black: Duration.fromMillis(minutes(2.5), undefined),
  fruit: Duration.fromMillis(minutes(8), undefined),
  green: Duration.fromMillis(minutes(1.5), undefined),
  herbal: Duration.fromMillis(minutes(5), undefined),
  oolong: Duration.fromMillis(minutes(2.5), undefined),
  white: Duration.fromMillis(minutes(1.5), undefined),
};

export default function TeaSelector({ setTea, selectedTea }) {
  return (
    <ul>
      {Object.keys(teaTypes).map((type) => (
        <li>
          <label key={type}>
            <input
              key={type}
              type="radio"
              name="tea-type"
              checked={selectedTea === type}
              onChange={() => {
                setTea(type);
              }}
            />{" "}
            {type}
          </label>
        </li>
      ))}
    </ul>
  );
}
