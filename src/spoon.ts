const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";

const options = {
  method: "GET",
  headers: {},
};
export function spoon(string: string) {
  fetch(string, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
}
