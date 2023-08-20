/**
 * Perform querySelectorAll using the experimental :has() selector, as
 * defined by MDN.
 *
 * @example
 * const results = querySelectorAll('.container > div:has(> img)');
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:has
 * @param selector CSS selector containing :has()
 * @param dom      Optional element to search. Defaults to document.
 */
export default function querySelectorAllWithHas(
  selector: string,
  dom?: Element,
): Node[] {
  const node = dom || document;

  const hasSelector = getHasInnerSelector(selector);

  if (!hasSelector) {
    return Array.from(node.querySelectorAll(selector));
  }

  const nodes = getNodesInCurrentScope(node, selector);

  return filterNodesInScopeByHasSelector(nodes, hasSelector as string);
}

/**
 * Get the inner-selector from the :has() statement.
 * Returns false if no :has() is present.
 *
 * @param selector A CSS selector possibly containing :has()
 */
function getHasInnerSelector(selector: string): string | boolean {
  const matches = /:has\((.*)\)/.exec(selector);

  if (!matches || matches[1] === undefined) {
    return false;
  }

  return matches[1];
}

/**
 * Get the elements in the resolved scope prior to the :has() statement.
 *
 * @param dom       Element
 * @param selector  Selector
 */
function getNodesInCurrentScope(
  dom: Element | Document,
  selector: string,
): NodeList {
  const currentScopeSelector = getCurrentScopeSelector(selector);

  return dom.querySelectorAll(currentScopeSelector);
}

/**
 * Grab the top-level scope, immediately to the left of :has()
 *
 * @param selector
 */
function getCurrentScopeSelector(selector: string): string {
  return selector.slice(0, selector.indexOf(':has('));
}

/**
 * Perform the querySelectorAll behavior against the nodes at the top level.
 *
 * @param nodes     Filtered nodes from the prior scope.
 * @param selector  The inner :has() selector
 */
function filterNodesInScopeByHasSelector(
  nodes: NodeList,
  selector: string,
): Node[] {
  const method = selectorHasDirectDescendant(selector)
    ? filterNodeWithDirectDescendants
    : filterNode;

  return Array.from(nodes).filter((node) => method(<Element>node, selector));
}

function selectorHasDirectDescendant(selector: string): boolean {
  return selector.trim().slice(0, 1) === '>';
}

function scrubDirectDescendantFromSelector(selector: string): string {
  return selector.trim().slice(1).trim();
}

function filterNode(node: Element, selector: string): boolean {
  return !!node.querySelector(selector);
}

function filterNodeWithDirectDescendants(
  node: Element,
  selector: string,
): boolean {
  return Array.from((<Element>node).children).some((child) => {
    return child.matches(scrubDirectDescendantFromSelector(selector));
  });
}
