const common = {
  fontSize: "12px",
  color: "gray",
};

export const Text = $jsx("div", common);

export const Button = $jsx("button", {
  ...common,
  padding: "5px 10px",
  borderRadius: "5px",
});
