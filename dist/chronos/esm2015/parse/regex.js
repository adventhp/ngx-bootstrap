/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isFunction } from '../utils/type-checks';
export const /** @type {?} */ match1 = /\d/; //       0 - 9
export const /** @type {?} */ match2 = /\d\d/; //      00 - 99
export const /** @type {?} */ match3 = /\d{3}/; //     000 - 999
export const /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
export const /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
export const /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
export const /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
export const /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
export const /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
export const /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
export const /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
export const /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
export const /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
export const /** @type {?} */ matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
export const /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
export const /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
export const /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
const /** @type {?} */ regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
export function addRegexToken(token, regex, strictRegex) {
    if (isFunction(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}
/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */
export function getParseRegexForToken(token, locale) {
    const /** @type {?} */ _strict = false;
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
/**
 * @param {?} str
 * @return {?}
 */
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4));
}
/**
 * @param {?} str
 * @return {?}
 */
export function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUc5RCxNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNyQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUV4QyxNQUFNLENBQUMsdUJBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQztBQUV0QyxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyx1QkFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUUxRCxNQUFNLENBQUMsdUJBQU0sY0FBYyxHQUFHLHNCQUFzQixDQUFDOzs7O0FBS3JELE1BQU0sQ0FBQyx1QkFBTSxTQUFTLEdBQUcsMElBQTBJLENBQUM7QUFHcEssdUJBQU0sT0FBTyxHQUFtQyxFQUFFLENBQUM7Ozs7Ozs7QUFHbkQsTUFBTSx3QkFBd0IsS0FBYSxFQUFFLEtBQTZCLEVBQUUsV0FBb0I7SUFDOUYsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXZCLE1BQU0sQ0FBQztLQUNSO0lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsUUFBaUIsRUFBRSxNQUFjO1FBQzFELE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDeEQsQ0FBQztDQUNIOzs7Ozs7QUFFRCxNQUFNLGdDQUFnQyxLQUFhLEVBQUUsTUFBYztJQUNqRSx1QkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDeEM7Ozs7O0FBR0Qsd0JBQXdCLEdBQVc7O0lBRWpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRztTQUNuQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixPQUFPLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDbkcsQ0FBQztDQUNIOzs7OztBQUVELE1BQU0sc0JBQXNCLEdBQVc7SUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5cbmV4cG9ydCBjb25zdCBtYXRjaDEgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxuZXhwb3J0IGNvbnN0IG1hdGNoMiA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcbmV4cG9ydCBjb25zdCBtYXRjaDMgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XG5leHBvcnQgY29uc3QgbWF0Y2g0ID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcbmV4cG9ydCBjb25zdCBtYXRjaDYgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG8yID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxuZXhwb3J0IGNvbnN0IG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2g1dG82ID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNCA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XG5leHBvcnQgY29uc3QgbWF0Y2gxdG82ID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxuXG5leHBvcnQgY29uc3QgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcbmV4cG9ydCBjb25zdCBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcblxuZXhwb3J0IGNvbnN0IG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbmV4cG9ydCBjb25zdCBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG5cbmV4cG9ydCBjb25zdCBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXG5cbi8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5leHBvcnQgY29uc3QgbWF0Y2hXb3JkID0gL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2k7XG5cbmV4cG9ydCB0eXBlIFJlZ0V4cFRva2VuRm4gPSAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSA9PiBSZWdFeHA7XG5jb25zdCByZWdleGVzOiB7W2tleTogc3RyaW5nXTogUmVnRXhwVG9rZW5Gbn0gPSB7fTtcblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbih0b2tlbjogc3RyaW5nLCByZWdleDogUmVnRXhwIHwgUmVnRXhwVG9rZW5Gbiwgc3RyaWN0UmVnZXg/OiBSZWdFeHApOiB2b2lkIHtcbiAgaWYgKGlzRnVuY3Rpb24ocmVnZXgpKSB7XG4gICAgcmVnZXhlc1t0b2tlbl0gPSByZWdleDtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlZ2V4ZXNbdG9rZW5dID0gZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkge1xuICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbjogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gIGNvbnN0IF9zdHJpY3QgPSBmYWxzZTtcbiAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oX3N0cmljdCwgbG9jYWxlKTtcbn1cblxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcmV0dXJuIHJlZ2V4RXNjYXBlKHN0clxuICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXG4gICAgLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSA9PiBwMSB8fCBwMiB8fCBwMyB8fCBwNClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbn1cbiJdfQ==