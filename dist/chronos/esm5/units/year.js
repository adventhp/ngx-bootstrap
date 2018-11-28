/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { getFullYear } from '../utils/date-getters';
import { addRegexToken, match1to2, match1to4, match1to6, match2, match4, match6, matchSigned } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { YEAR } from './constants';
import { toInt } from '../utils/type-checks';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function getYear(date, opts) {
    return getFullYear(date, opts.isUTC).toString();
}
addFormatToken('Y', null, null, function (date, opts) {
    var /** @type {?} */ y = getFullYear(date, opts.isUTC);
    return y <= 9999 ? y.toString(10) : "+" + y;
});
addFormatToken(null, ['YY', 2, false], null, function (date, opts) {
    return (getFullYear(date, opts.isUTC) % 100).toString(10);
});
addFormatToken(null, ['YYYY', 4, false], null, getYear);
addFormatToken(null, ['YYYYY', 5, false], null, getYear);
addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
// ALIASES
addUnitAlias('year', 'y');
// PRIORITIES
addUnitPriority('year', 1);
// PARSING
addRegexToken('Y', matchSigned);
addRegexToken('YY', match1to2, match2);
addRegexToken('YYYY', match1to4, match4);
addRegexToken('YYYYY', match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);
addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array, config) {
    array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
    return config;
});
addParseToken('YY', function (input, array, config) {
    array[YEAR] = parseTwoDigitYear(input);
    return config;
});
addParseToken('Y', function (input, array, config) {
    array[YEAR] = parseInt(input, 10);
    return config;
});
/**
 * @param {?} input
 * @return {?}
 */
export function parseTwoDigitYear(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
}
/**
 * @param {?} year
 * @return {?}
 */
export function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
/**
 * @param {?} year
 * @return {?}
 */
export function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL3llYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7QUFLekMsaUJBQWlCLElBQVUsRUFBRSxJQUEwQjtJQUNyRCxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDakQ7QUFFRCxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzVCLFVBQVUsSUFBVSxFQUFFLElBQTBCO0lBQ2hELHFCQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBSSxDQUFHLENBQUM7Q0FDN0MsQ0FB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QUssQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7Q0FDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgWUVBUiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gRk9STUFUVElOR1xuXG5mdW5jdGlvbiBnZXRZZWFyKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKCk7XG59XG5cbmFkZEZvcm1hdFRva2VuKCdZJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgY29uc3QgeSA9IGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpO1xuXG4gIHJldHVybiB5IDw9IDk5OTkgPyB5LnRvU3RyaW5nKDEwKSA6IGArJHt5fWA7XG59KTtcblxuYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWScsIDIsIGZhbHNlXSwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIChnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKSAlIDEwMCkudG9TdHJpbmcoMTApO1xufSk7XG5cbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWScsIDQsIGZhbHNlXSwgbnVsbCwgZ2V0WWVhcik7XG5hZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVlZJywgNSwgZmFsc2VdLCBudWxsLCBnZXRZZWFyKTtcbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIG51bGwsIGdldFllYXIpO1xuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbi8vIFBSSU9SSVRJRVNcblxuYWRkVW5pdFByaW9yaXR5KCd5ZWFyJywgMSk7XG5cbi8vIFBBUlNJTkdcblxuYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcbmFkZFJlZ2V4VG9rZW4oJ1lZJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbmFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuYWRkUmVnZXhUb2tlbignWVlZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xuXG5hZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICBhcnJheVtZRUFSXSA9IGlucHV0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICBhcnJheVtZRUFSXSA9IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5hZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XG59XG4iXX0=