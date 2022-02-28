import React, { useEffect, useRef, useState } from "react";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function TopLayer({ fakeData, loadApi }) {
  const { sys, weather, main, wind, visibility, dt } = fakeData;
  const [date, setDate] = useState("");
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);
  const [queryCity, setQueryCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    setInputValue(e.target.value);
    setQueryCity(e.target.value);
  };
  const handleLocation = () => {
    console.log("location");
  };
  const handleSearch = (e) => {
    loadApi(e);
    setInputValue("");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <div className="flex my-3 items-center">
          <input
            onChange={handleInput}
            type="text"
            value={inputValue}
            id="searchField"
            className="mr-2 py-1 px-2"
            placeholder="Search for city"
          />
          <button
            onClick={() => {
              handleSearch(queryCity);
            }}
            className="bg-yellow-400 px-2 py-1 rounded-sm"
          >
            Search
          </button>
          <button onClick={handleLocation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <h2 className="text-2xl font-bold">{date}</h2>
        <h2 className="my-2 text-3xl">{main.temp.toFixed()} &deg;</h2>
        <h2 className="my-2 text-lg">Feels like {main.feels_like} &deg;</h2>
      </div>
    </div>
  );
}
