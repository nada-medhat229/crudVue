export default {
  fetchAllItem() {
    return Promise.resolve([
      {
        Title: "Card one",
        Content: "that is very good",
        Background: "#14728a",
      },
      {
        Title: "Card two",
        Content: "thanks for you",
        Background: "#225b5a",
      },
      {
        Title: "Card three",
        Content: "i will be happy when work with you",
        Background: "#196b51",
      },
    ]);
  },
};
