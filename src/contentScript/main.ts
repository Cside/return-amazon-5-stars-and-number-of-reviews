import {
  isValidRate,
  querySelectorAllWithHas,
  rateToClassNameSuffix,
} from './utils';

const main = () => {
  // HTML structure:
  //  https://www.notion.so/c7a89d18be974588a0ef9f8d5a6eacb1#88338a6e482248489c849129896c9e2f
  for (const container of querySelectorAllWithHas(
    `.a-row.a-size-small:has(> [aria-label])`,
  )) {
    try {
      // Change 1 -> 5 stars
      const classNameSingleStar = 'puis-review-star-single';
      const singleStar = container.querySelector(`i.${classNameSingleStar}`);
      if (singleStar) {
        const rateStarContainer = container.firstElementChild;
        if (!rateStarContainer)
          throw new Error('container.firstElementChild is null');

        const rateContainer = rateStarContainer.firstElementChild;
        if (!rateContainer)
          throw new Error('rateContainer.firstChild is not found');
        const textContent = rateContainer.textContent;
        if (textContent === null)
          throw new Error('rateContainer.textContent is null');

        const rate = textContent.replace(',', '.');
        if (!isValidRate(rate)) throw new Error(`Invalid rate: ${rate}`);

        singleStar.classList.remove(classNameSingleStar);
        singleStar.classList.add(
          'a-star-small-' + rateToClassNameSuffix(Number(rate)),
        );
      }
    } catch (error) {
      console.error(error, container);
      if (import.meta.env.DEV) alert(error);
    }

    try {
      // Restore review count
      const countLinkContainer = container.children[1];
      if (countLinkContainer === undefined)
        throw new Error('container.children[1] is not found');

      const countContainer = countLinkContainer.querySelector('span');
      if (!countContainer)
        throw new Error(
          "countLinkContainer.querySelector('span') is not found",
        );

      if (countContainer.textContent === '') {
        const count = countLinkContainer.getAttribute('aria-label');
        if (count === null)
          throw new Error(
            "countLinkContainer doesn't have aria-label attribute",
          );
        countContainer.append(count);

        // Remove percentage sentence
        const percentageContainer = container.children[2];
        if (percentageContainer) {
          const percentage = percentageContainer.getAttribute('aria-label');
          if (percentage === null)
            throw new Error(
              "percentageContainer doesn't have aria-label attribute",
            );
          if (!percentage.match(/%/))
            throw new Error(`Invalid percentage message: ${percentage}`);

          percentageContainer.remove();
        }
      }
    } catch (error) {
      console.error(error, container);
      if (import.meta.env.DEV) alert(error);
    }
  }
};

chrome.runtime.onMessage.addListener(({ type }: { type: string }) => {
  if (type !== 'CHANGE_HISTORY') return;

  const id = setInterval(() => {
    const spinnerContainer = querySelectorAllWithHas(
      '.s-result-list-placeholder:has(> .a-spinner-wrapper)',
    )[0];
    // loading
    if (spinnerContainer && !spinnerContainer.classList.contains('aok-hidden'))
      return;

    clearInterval(id);
    main();
  }, 100);
});

main();
