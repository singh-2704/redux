import React, { memo } from "react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { sadMomentsSelector } from "./selectors";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
  const sadMoments = useSelector(sadMomentsSelector);
  
  return (

    <div className="bg-green-500">
      {sadMoments.map((m) => (
        <div key={m.when}>
          <>
            Sadness intensity:{m.intensity}, when:{m.when.toISOString()}
          </>
        </div>
      ))}
    </div>
  );
};
SadTracker.defaultProps = {};
export default memo(SadTracker);
