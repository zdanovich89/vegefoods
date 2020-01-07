import React from "react";

class Pagination extends React.Component {
  state = {
    numbers: [
      { list: "1" },
      { list: "2" },
      { list: "3", active: "true" },
      { list: "4" },
      { list: "5" }
    ]
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col text-center">
          <div className="block-27">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              {this.state.numbers.map((item, index) => {
                let active;
                let list;
                if (item.active) {
                  active = <span>{item.list}</span>;
                } else {
                  list = <a href="#">{item.list}</a>;
                }
                return (
                  <li key={index} className={item.active ? "active" : ""}>
                    {active}
                    {list}
                  </li>
                );
              })}
              <li>
                <a href="#">&gt;</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Pagination };
