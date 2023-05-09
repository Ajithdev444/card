import React from "react";

const index = () => {
  const name = "ajith";
  const age = 21;
  function logPersonInfo(personName:string, personAge: number) {
    const info = `Name: ${personName} , Age: ${personAge}`;
    console.log(info);
    return info;
  }
  logPersonInfo(name, age);

  return <div></div>;
};

export default index;
