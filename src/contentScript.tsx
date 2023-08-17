import { rateToClassSuffix } from "./utils";

for (const i of document.querySelectorAll("i.puis-review-star-single")) {
  i.classList.remove("puis-review-star-single");
  const iconAlt = i.querySelector(".a-icon-alt");
  if (iconAlt) {
    const rate = (iconAlt.textContent ?? "").replace("5つ星のうち", "");
    i.classList.add("a-star-small-" + rateToClassSuffix(Number(rate)));
  }
}
