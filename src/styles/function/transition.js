const transitionStyle = (
  target = "all",
  duration = 200,
  timingFunc = "ease-in-out"
) => {
  return `${target} ${duration}ms ${timingFunc}`;
};

export default transitionStyle;
