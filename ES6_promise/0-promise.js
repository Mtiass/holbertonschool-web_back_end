// Return a Promise using this prototype function getResponseFromAPI()
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const cond = true;
    if (cond) {
      resolve();
    } else {
      reject();
    }
  });
}
