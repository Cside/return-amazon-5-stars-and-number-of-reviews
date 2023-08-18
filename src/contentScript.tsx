import { isValidRate, rateToClassSuffix } from "./utils";

for (const container of document.querySelectorAll(
  "span[aria-label]:has(.puis-review-star-single)"
)) {
  let rate: string;
  // In .br, the element that has the rate doesn't exist.
  if (location.host === "www.amazon.com.br") {
    const ariaLabel = container.getAttribute("aria-label");
    if (ariaLabel === null) {
      console.error("container[aria-label] is not found", container);
      continue;
    }
    rate = ariaLabel.replace(" de 5 estrelas", "");
  } else {
    const firstChild = container.firstChild;
    if (firstChild === null) {
      console.error("container.firstChild is not found", container);
      continue;
    }
    if (firstChild.textContent === null) {
      console.error("firstChild.textContent is null", firstChild);
      continue;
    }
    rate = firstChild.textContent.replace(",", ".");
  }
  if (!isValidRate(rate)) {
    console.error(`rate is not valid: ${rate}`, container);
    continue;
  }
  const i = container.querySelector("i.puis-review-star-single");
  if (i === null) {
    console.error("i.puis-review-star-single is not found", container);
    continue;
  }
  i.classList.remove("puis-review-star-single");
  i.classList.add("a-star-small-" + rateToClassSuffix(Number(rate)));
}
