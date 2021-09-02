import React from "react";

import WorkCard from "./work-card";
import "./work.css";

import { WorkData } from "../../data/workdata";
import Separator from "../../common/separator/separator";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
