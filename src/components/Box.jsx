import React from "react";

const Box = () => {
  const boxes = [
    { name: "Usługa 1", isNew: true },
    { name: "Usługa 2", isNew: false },
    { name: "Usługa 3", isNew: false },
    { name: "Usługa 4", isNew: false },
    { name: "Usługa 5", isNew: false },
    { name: "Usługa 6", isNew: false },
  ];

  return boxes.map((item) =>
    item.isNew === true ? (
      <>
        <div className="box">
          <div className="dot"></div>
          <h4>{item.name}</h4>
          <p>Nowość!</p>
        </div>
      </>
    ) : (
      <>
        <div className="box">
          <h4>{item.name}</h4>
        </div>
      </>
    )
  );
};

export default Box;
