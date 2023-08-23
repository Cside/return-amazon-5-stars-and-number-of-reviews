import {
  isValidRate,
  querySelectorAllWithHas,
  rateToClassNameSuffix,
} from './utils';

/* タスク
  - ✅parent container を変更
  - ✅一桁星を元に戻す
  - 隠れたレビュー数を表示
  - % を隠す
*/

const main = () => {
  for (const container of querySelectorAllWithHas(
    `.a-row.a-size-small:has(> [aria-label])`,
  )) {
    try {
      // 一桁星を元に戻す
      // 旧デザインの場合は何もしない
      const classNameSingleStar = 'puis-review-star-single';
      const singleStar = container.querySelector(`i.${classNameSingleStar}`);
      if (singleStar) {
        const rateStarContainer = container.firstChild;
        if (rateStarContainer === null)
          throw new Error('container.firstChild is null');

        const rateContainer = rateStarContainer.firstChild;
        if (rateContainer === null)
          throw new Error('rateContainer.firstChild is not found');
        if (rateContainer.textContent === null)
          throw new Error('rateContainer.textContent is null');
        if (!(rateContainer instanceof Element))
          throw new Error('rateContainer is not a instance of Element');

        const rate = rateContainer.textContent.replace(',', '.');
        if (!isValidRate(rate)) throw new Error(`rate is not valid: ${rate}`);

        singleStar.classList.remove(classNameSingleStar);
        singleStar.classList.add(
          'a-star-small-' + rateToClassNameSuffix(Number(rate)),
        );
      }

      // // // restore number of reviews
      // console.log(
      //   querySelectorAllWithRegexp(
      //     'span',
      //     ['aria-label', new RegExp('^[0-9][0-9,.][0-9]$')],
      //     container.parentElement as Element,
      //   ),
      // );
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
