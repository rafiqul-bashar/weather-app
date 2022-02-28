import React from "react";

export default function InfoItem({ label, data, unit }) {
  return (
    <div className="border-b border-b-gray-300">
      <h2 className="text-xs font-bold text-gray-500">{label}</h2>
      <h2 className="text-lg text-gray-700">
        {data} {unit}
      </h2>
    </div>
  );
}
