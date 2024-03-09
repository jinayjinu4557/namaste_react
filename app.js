const heading = React.createElement("h1", { id: "heading" }, "Tag from React");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im jinay"),
    React.createElement("h2", {}, "Parekh"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im jinay"),
    React.createElement("h2", {}, "Parekh"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading,parent]);
