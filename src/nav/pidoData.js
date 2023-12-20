import data from "../data/data.json";

export const pidoData = () => {
    return new Promise ((resolve, reject) => {
      setTimeout ( () => {
        resolve(data);
      }, 500)
    })
}