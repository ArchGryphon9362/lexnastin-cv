function navigate(to, push) {
  console.log(to);
  switch (to) {
    case "info":
      document.getElementById("opening").classList.add("inactive");
      document.getElementById("info").classList.remove("inactive");
      document.getElementById("projects").classList.add("inactive");
      push ? history.pushState({ page: "info" }, "", "?page=info") : "";
      break;
    case "projects":
      document.getElementById("opening").classList.add("inactive");
      document.getElementById("info").classList.add("inactive");
      document.getElementById("projects").classList.remove("inactive");
      push ? history.pushState({ page: "projects" }, "", "?page=projects") : "";
      break;
    default:
      document.getElementById("opening").classList.remove("inactive");
      document.getElementById("info").classList.add("inactive");
      document.getElementById("projects").classList.add("inactive");
      push ? history.pushState({ page: "" }, "", "") : "";
  }
}

addEventListener("popstate", (state) => {
  state.state ? navigate(state.state.page, false) : navigate("", false);
});

let page = new URL(window.location.href).searchParams.get("page");
page ? navigate(page, false) : navigate("", false);
