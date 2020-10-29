import React from "react";
import Card from "~/Components/Card";
import Title from "~/Components/Title";

interface ContentProps {}

const Content: React.FC<{}> = () => {
  return (
    <>
      <div className={"card-wrapper"}>
        {[1, 2, 3].map((item, index) => (
          <Card key={index} />
        ))}
      </div>{" "}
    </>
  );
};
export default Content;
