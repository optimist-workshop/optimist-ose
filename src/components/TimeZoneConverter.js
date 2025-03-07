import React, { useState } from "react";

const TimeZoneConverter = () => {
  const timeZones = {
    PDT: "America/Los_Angeles",
    EDT: "America/New_York",
    ADT: "America/Halifax",
    CET: "Europe/Berlin",
    GMT: "Europe/London",
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

    const gmtTime = new Date(Date.UTC(2025, 2, 27, 15, 0, 0));
    // gmtTime.setUTCHours(15, 0, 0, 0); // Set 3 PM GMT

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
      <h4>Time Zone Converter</h4>
      <select onChange={convertTimeZone}>
        <option value="">-- Select Your Time Zone --</option>
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
