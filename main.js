document.querySelectorAll(".jumping").forEach((button) =>
  // 將 button 字母分開，並使用 span 包起來，最外圍用一個 div 包起來。
  {
    button.innerHTML =
      "<div><span>" +
      button.textContent.trim().split("").join("</span><span>") +
      "</span></div>";
  }
);
