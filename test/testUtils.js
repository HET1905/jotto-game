/**
 * Return data node(s) with give data-set attibute
 * @param {ShallowWrapper} wrapper - Enzyme shallow warpper
 * @param {string} val - Value of data-set attribute to search
 * @return {ShallowWrapper}
 */
export const findTestByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
