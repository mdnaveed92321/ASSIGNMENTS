function changeformat(formatNumber) {
  const styleLink = document.getElementById("style1");

  const newStyle = `portfolio${formatNumber}.css`;

  if (styleLink) {
    styleLink.setAttribute("href", newStyle);
  }
}
