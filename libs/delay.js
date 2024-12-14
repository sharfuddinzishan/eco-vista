export const delay = (duration = 3000) =>
  new Promise((resolve) => setTimeout(resolve, duration));
