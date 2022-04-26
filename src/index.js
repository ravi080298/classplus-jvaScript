import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log(true && "hello");
console.log("hello" && "hi");
// shallow and deep copying
const user = {
  name: "Sakshat"
};

const user2 = { ...user };
user2.name = "Ravi";

console.log(user);
console.log(user2);
