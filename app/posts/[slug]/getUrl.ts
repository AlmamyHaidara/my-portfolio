export const getUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://codecraft.ml";
  }

  return "http://localhost:3000";
};
