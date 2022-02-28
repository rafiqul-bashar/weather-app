import React from "react";
import BottomLayer from "./BottomLayer";
import TopLayer from "./TopLayer";
import { staticData } from "../../fakeData";
export default function Layout() {
  function convertTime(unixTime, offset) {
    let dt = new Date((unixTime + offset) * 1000);
    let h = dt.getHours();
    let m = "0" + dt.getMinutes();
    let t = h + ":" + m.substr(-2);
    return t;
  }
  const loadApi = (data) => {
    console.log(data);
  };
  return (
    <div>
      <TopLayer fakeData={staticData} loadApi={loadApi} />
      <BottomLayer fakeData={staticData} convertTime={convertTime} />
    </div>
  );
}
