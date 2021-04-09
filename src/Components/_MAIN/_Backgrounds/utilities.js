//BINARY CREATION
export const binaryStrings = () => {
  let binaryArray = [];
  for (let i = 0; i < 25; i++) {
    let stringLength = Math.floor(Math.random() * 5 + 15);
    let binary = Math.random().toString(2).substr(2, stringLength);
    binary = binary.split("");
    binaryArray.push(binary);
  }
  return binaryArray;
};

//BINARY STYLE
export const binaryStyles = () => `${Math.floor(Math.random() * 5 + 12)}px`;
