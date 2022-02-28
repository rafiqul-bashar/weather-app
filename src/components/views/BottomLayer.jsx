import React from "react";

import InfoItem from "../utils/InfoItem";

export default function BottomLayer({ fakeData, convertTime }) {
  const { sys, weather, main, wind, visibility, timezone } = fakeData;
  const sRise = convertTime(sys.sunrise, timezone);
  const sSet = convertTime(sys.sunset, timezone);

  return (
    <div className="p-2">
      <div className="grid gap-4 grid-cols-2">
        <InfoItem label="SUNRISE" data={sRise} unit="am" />
        <InfoItem label="SUNSET" data={sSet} unit="pm" />
        <InfoItem label="WEATHER" data={weather[0].main} />
        <InfoItem label="HUMIDITY" data={main.humidity} unit="%" />
        <InfoItem label="WIND" data={wind.speed} unit="km/h" />
        <InfoItem label="Wind" data={main.pressure} unit="hPa" />
      </div>
    </div>
  );
}
