function navigate(to, push) {
  console.log(to);
  if (!to && push) {
    push = false;
    history.pushState({ page: to }, "", `/`);
  }
  if (!to) {
    to = "title";
  }
  ["title", "info", "projects"].forEach((item) => {
    let classList = document.getElementById(item).classList;
    if (item == to) {
      if (push) history.pushState({ page: to }, "", `?page=${to}`);
      classList.remove("inactive");
    } else {
      classList.add("inactive");
    }
  });
}

addEventListener("popstate", (state) => {
  state.state ? navigate(state.state.page, false) : navigate("", false);
});

let page = new URL(window.location.href).searchParams.get("page");
page ? navigate(page, false) : navigate("", false);
