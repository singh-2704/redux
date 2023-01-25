import React, { memo } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { happyMomentsSelector } from "./selectors";
type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
  const happyMoments = useSelector(happyMomentsSelector);
  return (
    <div className="bg-red-500">
      {happyMoments.map((m) => (
        <div key={m.when}>
          <div>
          
            Happyness intensity:{m.intensity}, when:{m.when.toISOString()}
          </div>
        </div>
      ))}
    </div>
  );
};
HappyTracker.defaultProps = {};
export default memo(HappyTracker);
