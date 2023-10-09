import React, { memo } from "react";
const MemoComp = ({ name }) => {
  console.log("MemoComp");
  return <div>MemoComp {name}</div>;
};

export default memo(MemoComp);
