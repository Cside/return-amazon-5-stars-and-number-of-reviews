import { isValidRate, rateToClassSuffix } from "./utils";

for (const container of document.querySelectorAll(
  "span[aria-label]:has(.puis-review-star-single)"
)) {
  const rate = container.firstChild?.textContent?.replace(",", ".");
  if (!rate) {
    console.error("container.firstChild is not found", container);
    continue;
  } else if (!isValidRate(rate)) {
    console.error(`rate is not valid: ${rate}`, container);
    continue;
  }
  const i = container.querySelector("i.puis-review-star-single");
  if (!i) {
    console.error("i.puis-review-star-single is not found", container);
    continue;
  }
  i.classList.remove("puis-review-star-single");
  i.classList.add("a-star-small-" + rateToClassSuffix(Number(rate)));
}
