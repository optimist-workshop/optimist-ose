import React, { useState } from "react";

const TimeZoneConverter = () => {
  const timeZones = {
    PST: "America/Los_Angeles",
    EST: "America/New_York",
    AST: "America/Halifax",
    CET: "Europe/Berlin",
    IST: "Asia/Kolkata",
    SGT: "Asia/Singapore",
  };

  const [convertedTime, setConvertedTime] = useState("3 PM GMT is ____");

  const convertTimeZone = (event) => {
    const selectedZone = event.target.value;
    if (!selectedZone) {
      setConvertedTime("3 PM GMT is ____");
      return;
    }

    const gmtTime = new Date();
    gmtTime.setUTCHours(15, 0, 0, 0); // Set 3 PM GMT

    const converted = gmtTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timeZones[selectedZone],
      timeZoneName: "short",
    });

    setConvertedTime(`3 PM GMT is ${converted}`);
  };

  return (
    <div>
      <h4></h4>
      <select onChange={convertTimeZone}>
        <option value="">-- Select Time Zone --</option>
        {Object.entries(timeZones).map(([key, value]) => (
          <option key={key} value={key}>
            {key} - {value.replace(/_/g, " ")}
          </option>
        ))}
      </select>
      <p><strong>{convertedTime}</strong></p>
    </div>
  );
};

export default TimeZoneConverter;
