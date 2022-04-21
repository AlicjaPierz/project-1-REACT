import React from "react";

function Employee() {
  const employeeAbout = [
    {
      id: 1,
      name: "Imie1",
      surname: "Nazwisko1",
      position: "[dział 1]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus perspiciatis, quibusdam fugiat aut ut corporis necessitatibus, voluptas vel commodi enim molestiae culpa similique id inventore officia autem, pariatur libero!",
      url: "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-3.png",
    },
    {
      id: 2,
      name: "Imie2",
      surname: "Nazwisko2",
      position: "[dział 2]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus perspiciatis, quibusdam fugiat aut ut corporis necessitatibus, voluptas vel commodi enim molestiae culpa similique id inventore officia autem, pariatur libero!",
      url: "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-1.png",
    },
    {
      id: 3,
      name: "Imie3",
      surname: "Nazwisko3",
      position: "[dział 3]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus perspiciatis, quibusdam fugiat aut ut corporis necessitatibus, voluptas vel commodi enim molestiae culpa similique id inventore officia autem, pariatur libero!",
      url: "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-1.png",
    },
    {
      id: 4,
      name: "Imie4",
      surname: "Nazwisko4",
      position: "[dział 4]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus perspiciatis, quibusdam fugiat aut ut corporis necessitatibus, voluptas vel commodi enim molestiae culpa similique id inventore officia autem, pariatur libero!",
      url: "https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-3.png",
    },
  ];

  return employeeAbout.map((item) =>
    item.id % 2 === 0 ? (
      <div className="people">
        <div className="photo">
          <img src={item.url} alt="" />
        </div>
        <div className="opis-right">
          <h3>
            {item.name} {item.surname} {item.position}
          </h3>
          <p>{item.description}</p>
        </div>
      </div>
    ) : (
      <div className="people">
        <div className="photo">
          <img src={item.url} alt="" />
        </div>
        <div className="opis">
          <h3>
            {item.name} {item.surname} {item.position}
          </h3>
          <p>{item.description}</p>
        </div>
      </div>
    )
  );
}

export default Employee;
