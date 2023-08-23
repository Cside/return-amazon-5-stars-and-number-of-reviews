import {
  isValidRate,
  querySelectorAllWithHas,
  rateToClassNameSuffix,
} from './utils';

const main = () => {
  for (const container of querySelectorAllWithHas(
    `.a-row.a-size-small:has(> [aria-label])`,
  )) {
    try {
      // 一桁星を元に戻す（旧デザインの場合は何もしない）
      const classNameSingleStar = 'puis-review-star-single';
      const singleStar = container.querySelector(`i.${classNameSingleStar}`);
      if (singleStar) {
        const rateStarContainer = container.firstElementChild;
        if (rateStarContainer === null)
          throw new Error('container.firstElementChild is null');

        const rateContainer = rateStarContainer.firstElementChild;
        if (rateContainer === null)
          throw new Error('rateContainer.firstChild is not found');
        const textContent = rateContainer.textContent;
        if (textContent === null)
          throw new Error('rateContainer.textContent is null');

        const rate = textContent.replace(',', '.');
        if (!isValidRate(rate)) throw new Error(`rate is not valid: ${rate}`);

        singleStar.classList.remove(classNameSingleStar);
        singleStar.classList.add(
          'a-star-small-' + rateToClassNameSuffix(Number(rate)),
        );
      }

      // レビューの数を復活させる
      const countLinkContainer = container.children[1];
      if (countLinkContainer === undefined)
        throw new Error('container.children[1] is not found');

      const countContainer = countLinkContainer.querySelector('span');
      if (!countContainer)
        throw new Error(
          "container.children[0].querySelector('span') is not found",
        );

      if (countContainer.textContent === '') {
        const count = countLinkContainer.getAttribute('aria-label');
        if (count === null)
          throw new Error(
            "countLinkContainer.getAttribute('aria-label') is null",
          );
        countContainer.append(count);

        // パーセンテージがあれば消す
      }

      // TOOD: 個別 try{} したほうがいい？
    } catch (error) {
      console.error(error, container);
      continue;
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
