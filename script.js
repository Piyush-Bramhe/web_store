function searchApps() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.getElementsByClassName("app-card");

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    const desc = cards[i].getElementsByTagName("p")[0].innerText.toLowerCase();

    if (title.includes(input) || desc.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
