import querySelectorAllWithHas from 'polyfill-css-has';
import { isValidRate, rateToClassNameSuffix } from './utils';

const CLASS_NAME_SINGLE_STAR = 'puis-review-star-single';

const main = () => {
  for (const container of querySelectorAllWithHas(
    `span[aria-label]:has(.${CLASS_NAME_SINGLE_STAR})`,
  )) {
    const firstChild = container.firstChild;
    if (firstChild === null) {
      console.error('container.firstChild is not found', container);
      continue;
    }
    if (firstChild.textContent === null) {
      console.error('firstChild.textContent is null', firstChild);
      continue;
    }
    const rate = firstChild.textContent.replace(',', '.');

    if (!isValidRate(rate)) {
      console.error(`rate is not valid: ${rate}`, container);
      continue;
    }
    const i = (container as Element).querySelector(
      `i.${CLASS_NAME_SINGLE_STAR}`,
    );
    if (i === null) {
      console.error(`i.${CLASS_NAME_SINGLE_STAR} is not found`, container);
      continue;
    }
    i.classList.remove(CLASS_NAME_SINGLE_STAR);
    i.classList.add('a-star-small-' + rateToClassNameSuffix(Number(rate)));
  }
};

chrome.runtime.onMessage.addListener(({ type }: { type: string }) => {
  if (type !== 'CHANGE_HISTORY') return;

  const id = setInterval(() => {
    const spinnerContainer = querySelectorAllWithHas(
      '.s-result-list-placeholder:has(> .a-spinner-wrapper)',
    )[0];
    // loading
    if (
      spinnerContainer &&
      !(spinnerContainer as Element).classList.contains('aok-hidden')
    )
      return;

    clearInterval(id);
    main();
  }, 100);
});

main();
