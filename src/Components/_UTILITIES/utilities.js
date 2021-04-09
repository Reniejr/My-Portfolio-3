export const convertText = (content) => {
  const text = content.split("\n").map((str) => <p>{str}</p>);
  return text;
};
