// ==UserScript==
// @name Return  Amazon 5 Stars & Number of Reviews
// @name:ja Amazon の星とレビュー数を元に戻す
// @name:zh-CN 恢復 Amazon 5 星和評論數量
// @name:zh-TW 恢復 Amazon 5 星和評論數量
// @version 0.0.1
// @author Cside
// @license MIT
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAJzUExURf/////+/v///v/+/f78+vz07v/9/Pzz7f/9+/338/349P78+frq3fjj0uyqbv7//+yoavno2/G/k/LGn/jhz+2rcP749eqkavnk1Pji0PXSsvKvZPSUHPLCk/bWuPnk1fbVuPLAjvSTGfKya/bSsvfawvTLp/OdNfOgPvTNqvfcxPjhzvXRsfKuYvSVHfPDlPfXu/fdyPPNrvLHo/XUt/PMrPbawvfi0u2cR/ucFv+pIfWTFu+xefvw6u6uc/WUFvqbFu2bR/no3PPLqfCRI/+lHP6kG++RJvTQsvjk1u2ZQfudF/+pIPSTFu+0fvrq3uuuevbYvvvr3+urdvfbw/ffyvWVGPyaC/OiRPz6/fz5+vOhQfWVGvffzfO7gfqWC/mVC/O+iffcxvaVGPOjR/z7/vvv5v759fbXvffdyfPIou6jVfPBjuydTPrp2/nm1/PCkO6hUfPKpf77++6pZ/G1d/GycO6tbf7+/vPFnO6kV/PBjeydTffdx+uqc/PKqe2wffLHpPro2/z39frr4fzx6Pzw5vrt4/z28v759vnm2P77+fno2fz49vnr4Pzx6fnk0/vt4vji0f/+/Pz9/f39/P3+/f39/f7+/8Xe47zZ3tTn6sHc4b/a3+bx86nO1eTw8vv9/bvY3k2Zp5nEzHaxvHexvLXV2oS4wl6ir/3+/tTm6jmNnfX5+prFzYm7xbHT2W6st1mgrff7+7bV22Glsfn7/K3R12Olsoa5w2antN7s7/z9/vb6+6TL0oe6xIC2wOXw8qPK0m2st9vq7W2rt0yYpqPK0ez09s3i5vf6+7nX3N3s7tvr7dDk6Mjg5Pj7+1BOEjAAAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5wgXCgUETaYQ9wAAAWZ6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNjVNBcoMwDLzrFX2CkGzJPIdi+9aZHvv8rkwSCGWY4gkQS7srrQX9fH3TR1yZmXT1oosXq85WLXuySTj+22rNNWJaRWyyZN3Esi7b/iu7iwjTToPNz4Dkkmpm4aTWHUBhNWnK4yfaeBGOhRIE5KZLlpQo2Ul/C0YNxRMW6wLN7uOS5kiSNiRcuk46x5JOyirYENzrRoKn+gxalO1FaghEeK/lXFFKlsnVFBvzaG2GCw0VPhLgi0AbTkSFMOKN6Li80KGpILKrtkZNbbcb7/DPKhp+YKK1aZjY7/V2OZxUCfBZju70nqAw9Sl3durpF70awiECGBRruLL5lbM1+Je0we91b+VvNr2nX6u92lkyI69YthXTFqQYyujoQQQ9xeFNofkf0IZ5F6Vb1fmK4FqU7kHnEZR+HMLjDNIZckyObyhZxMbun487IvQLdHHuZF/4kasAAAGCSURBVDjLY2AYMYARiWRiwhBCAUxYtDOzsDKwMbIxsXMwMzIzcHIxAClusBADDwtQhIGBlw+kkF9AEEQJCYNIEVEQKSYuASQlpaRlZOXkFRSVlFUkVdXUNTS1tHV09fQNDI2MTYxNzRjMLSytrG1s7eytHBydnF1c3dw9PL28fXz9/AMCGYKCQxgYQsPCIyIZoqLDY2IZGOLiExIZGJKSw1NSGdKc0zMygXZkZefk5jHk5xYUFjEUl5SWlVcwVFZV1/gz1NbVNzQCFTQ1M7S0MrS1M3Q0MXR28fPndzP09DL09TP4T2CYOAns08ngIGFj4J/CzzB1GpCCCTGCA4aRCYSYGMGBNB2MGCrAoswMjChhOWPmrNkMc+YyzJu/AKgCC1i4aPGSmUuXLV+0YuVCbPKrGFavWbtu/YaNDAs2YY3TGQybt2zdtn3HToZduxn2YFOxd9/+AwcPHT5y9NjxEwz82FScXMR/6vQZhrPnzl/Al3xW4ZECyq2qAFKrGIYbAADbamSfmi5Q2wAAAGxlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAKgAgAEAAAAAQAAAWmgAwAEAAAAAQAAAWkAAAAAkqgIWQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wOC0yM1QxMDowMzo1NyswMDowMDrOmJ0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDgtMjNUMTA6MDM6NTUrMDA6MDDcDDEIAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA4LTIzVDEwOjA1OjA0KzAwOjAwaJBlQAAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADc4ydR7JwAAABh0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24AMzYxZOsDEwAAABh0RVh0ZXhpZjpQaXhlbFlEaW1lbnNpb24AMzYx+eTiZQAAABV0RVh0dGlmZjpSZXNvbHV0aW9uVW5pdAAynCpPowAAABd0RVh0eG1wOlBpeGVsWERpbWVuc2lvbgAzNjF+5E6eAAAAF3RFWHR4bXA6UGl4ZWxZRGltZW5zaW9uADM2MePrr+gAAAAASUVORK5CYII=
// @namespace https://github.com/Cside/return-amazon-5-stars-and-number-of-reviews
// @description Bring back the 5 stars and number of reviews on Amazon search pages
// @description:ja Amazon の 5 つの星と、レビュー（評価）の件数を再び表示します
// @description:zh-TW 恢復 Amazon 上的 5 顆星和評論數量
// @description:zh-CN 恢復 Amazon 上的 5 顆星和評論數量
// @match *://*.amazon.com/*
// @match *://*.amzn.com/*
// @match *://*.amazon.co.uk/*
// @match *://*.amazon.de/*
// @match *://*.amazon.fr/*
// @match *://*.amazon.it/*
// @match *://*.amazon.ca/*
// @match *://*.amazon.com.mx/*
// @match *://*.amazon.es/*
// @match *://*.amazon.co.jp/*
// @match *://*.amazon.in/*
// @match *://*.amazon.com.br/*
// @match *://*.amazon.nl/*
// @match *://*.amazon.com.au/*
// @match *://*.amazon.ae/*
// @match *://*.amazon.eg/*
// @match *://*.amazon.pl/*
// @match *://*.amazon.se/*
// @match *://*.amazon.sg/*
// @match *://*.amazon.com.tr/*
// @match *://*.amazon.cn/*
// @match *://*.amazon.sa/*
// @match *://*.amazon.com.be/*"
// @run-at document-end
// ==/UserScript==

const rateToClassNameSuffix = (rate) => {
  const tenfold = rate * 10;
  const ten = Math.floor(tenfold / 10);
  const one = tenfold % 10;
  if (one <= 2) {
    return `${ten}`;
  } else if (one <= 7) {
    return `${ten}-5`;
  } else {
    return `${ten + 1}`;
  }
};
const isValidRate = (rateStr) => {
  if (rateStr === '') return false;
  const number = Number(rateStr);
  return (
    !Number.isNaN(number) &&
    0 <= number &&
    number <= 5 &&
    (number * 10) % 1 === 0
  );
};
function getHasInnerSelector(selector) {
  const matches = /:has\((.*)\)/.exec(selector);
  if (!matches) {
    return false;
  }
  return matches[1];
}
function getNodesInCurrentScope(dom, selector) {
  const currentScopeSelector = getCurrentScopeSelector(selector);
  return dom.querySelectorAll(currentScopeSelector);
}
function getCurrentScopeSelector(selector) {
  return selector.slice(0, selector.indexOf(':has('));
}
function selectorHasDirectDescendant(selector) {
  return selector.trim().slice(0, 1) === '>';
}
function scrubDirectDescendantFromSelector(selector) {
  return selector.trim().slice(1).trim();
}
function filterNode(node, selector) {
  return !!node.querySelector(selector);
}
function filterNodeWithDirectDescendants(node, selector) {
  return Array.from(node.children).some((child) => {
    return child.matches(scrubDirectDescendantFromSelector(selector));
  });
}
function filterNodesInScopeByHasSelector(nodes, selector) {
  let method;
  method = selectorHasDirectDescendant(selector)
    ? filterNodeWithDirectDescendants
    : filterNode;
  return Array.from(nodes).filter((node) => method(node, selector));
}
function _querySelectorAllWithHas(selector, dom) {
  const node = dom || document;
  const hasSelector = getHasInnerSelector(selector);
  if (!hasSelector) {
    return Array.from(node.querySelectorAll(selector));
  }
  const nodes = getNodesInCurrentScope(node, selector);
  return filterNodesInScopeByHasSelector(nodes, hasSelector);
}
const querySelectorAllWithHas = (...params) =>
  _querySelectorAllWithHas(...params);
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
    }
    try {
      // Restore review count
      // Change review count format: (1.1K+) -> 1,100
      const countLinkContainer = container.children[1];
      if (countLinkContainer === undefined)
        throw new Error('container.children[1] is not found');
      const countContainer = countLinkContainer.querySelector('span');
      if (!countContainer)
        throw new Error(
          "countLinkContainer.querySelector('span') is not found",
        );
      const count = countLinkContainer.getAttribute('aria-label');
      if (count === null)
        throw new Error("countLinkContainer doesn't have aria-label attribute");
      const textContent = countContainer.textContent;
      if (textContent === null)
        throw new Error('countContainer.textContent is null');
      if (textContent === '') {
        countContainer.append(count);
      } else if (textContent !== count && textContent !== `(${count})`) {
        console.info(
          `[ClassicAmazonStars] Changed review count ${countContainer.textContent} -> ${count}`,
        );
        // 括弧だけニョキッと消えるモーションは結構ウザいので、括弧が付いてる場合は尊重する
        // ニョキのウザさが原因で拡張消されたらかなわんので...。。
        countContainer.replaceChildren(
          textContent.startsWith('(') ? `(${count})` : count,
        );
      }
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
    } catch (error) {
      console.error(error, container);
    }
  }
};
main();
