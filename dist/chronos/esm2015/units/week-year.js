/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
import { addRegexToken, match1to2, match1to4, match1to6, match2, match4, match6, matchSigned } from '../parse/regex';
import { addWeekParseToken } from '../parse/token';
import { toInt } from '../utils/type-checks';
import { parseTwoDigitYear } from './year';
import { dayOfYearFromWeeks, weekOfYear, weeksInYear } from './week-calendar-utils';
import { createUTCDate } from '../create/date-from-array';
import { getISOWeek, getWeek } from './week';
import { getISODayOfWeek, getLocaleDayOfWeek } from './day-of-week';
import { getLocale } from '../locale/locales';
import { setDate, setFullYear, setMonth } from '../utils/date-setters';
import { getDate, getFullYear, getMonth } from '../utils/date-getters';
// FORMATTING
addFormatToken(null, ['gg', 2, false], null, function (date, opts) {
    // return this.weekYear() % 100;
    return (getWeekYear(date, opts.locale) % 100).toString();
});
addFormatToken(null, ['GG', 2, false], null, function (date) {
    // return this.isoWeekYear() % 100;
    return (getISOWeekYear(date) % 100).toString();
});
/**
 * @param {?} token
 * @param {?} getter
 * @return {?}
 */
function addWeekYearFormatToken(token, getter) {
    addFormatToken(null, [token, token.length, false], null, getter);
}
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function _getWeekYearFormatCb(date, opts) {
    return getWeekYear(date, opts.locale).toString();
}
/**
 * @param {?} date
 * @return {?}
 */
function _getISOWeekYearFormatCb(date) {
    return getISOWeekYear(date).toString();
}
addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
// ALIASES
addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');
// PRIORITY
addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);
// PARSING
addRegexToken('G', matchSigned);
addRegexToken('g', matchSigned);
addRegexToken('GG', match1to2, match2);
addRegexToken('gg', match1to2, match2);
addRegexToken('GGGG', match1to4, match4);
addRegexToken('gggg', match1to4, match4);
addRegexToken('GGGGG', match1to6, match6);
addRegexToken('ggggg', match1to6, match6);
addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
    return config;
});
addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = parseTwoDigitYear(input);
    return config;
});
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
export function getSetWeekYear(date, input, locale = getLocale(), isUTC) {
    return getSetWeekYearHelper(date, input, 
    // this.week(),
    getWeek(date, locale, isUTC), 
    // this.weekday(),
    getLocaleDayOfWeek(date, locale, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC);
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
export function getWeekYear(date, locale = getLocale(), isUTC) {
    return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} isUTC
 * @return {?}
 */
export function getSetISOWeekYear(date, input, isUTC) {
    return getSetWeekYearHelper(date, input, getISOWeek(date, isUTC), getISODayOfWeek(date, isUTC), 1, 4);
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getISOWeekYear(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).year;
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getISOWeeksInYear(date, isUTC) {
    return weeksInYear(getFullYear(date, isUTC), 1, 4);
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @param {?=} locale
 * @return {?}
 */
export function getWeeksInYear(date, isUTC, locale = getLocale()) {
    return weeksInYear(getFullYear(date, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear());
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @param {?=} isUTC
 * @return {?}
 */
function getSetWeekYearHelper(date, input, week, weekday, dow, doy, isUTC) {
    if (!input) {
        return getWeekYear(date, void 0, isUTC);
    }
    const /** @type {?} */ weeksTarget = weeksInYear(input, dow, doy);
    const /** @type {?} */ _week = week > weeksTarget ? weeksTarget : week;
    return setWeekAll(date, input, _week, weekday, dow, doy);
}
/**
 * @param {?} date
 * @param {?} weekYear
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function setWeekAll(date, weekYear, week, weekday, dow, doy) {
    const /** @type {?} */ dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    const /** @type {?} */ _date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    setFullYear(date, getFullYear(_date, true), true);
    setMonth(date, getMonth(_date, true), true);
    setDate(date, getDate(_date, true), true);
    return date;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay15ZWFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvd2Vlay15ZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFNdkUsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN6QyxVQUFVLElBQVUsRUFBRSxJQUEwQjs7SUFFOUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDMUQsQ0FBQyxDQUFDO0FBRUwsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN6QyxVQUFVLElBQVU7O0lBRWxCLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUNoRCxDQUFDLENBQUM7Ozs7OztBQUVMLGdDQUFnQyxLQUFhLEVBQUUsTUFBdUI7SUFDcEUsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNsRTs7Ozs7O0FBRUQsOEJBQThCLElBQVUsRUFBRSxJQUEwQjtJQUNsRSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDbEQ7Ozs7O0FBRUQsaUNBQWlDLElBQVU7SUFDekMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUN4QztBQUVELHNCQUFzQixDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3JELHNCQUFzQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RELHNCQUFzQixDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3hELHNCQUFzQixDQUFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxDQUFDOztBQUl6RCxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9CLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBSWxDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFLbEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNoQyxhQUFhLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2hDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRTFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQ2xELFVBQVUsS0FBSyxFQUFFLElBQWlCLEVBQUUsTUFBTSxFQUFFLEtBQUs7SUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXhDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZixDQUFDLENBQUM7QUFFTCxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFpQixFQUFFLE1BQU0sRUFBRSxLQUFLO0lBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2QyxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YsQ0FBQyxDQUFDOzs7Ozs7OztBQUlILE1BQU0seUJBQXlCLElBQVUsRUFBRSxLQUFhLEVBQUUsTUFBTSxHQUFHLFNBQVMsRUFBRSxFQUFFLEtBQWU7SUFDN0YsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFDOUIsS0FBSzs7SUFFTCxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7O0lBRTVCLGtCQUFrQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ3ZDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFDdkIsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUN2QixLQUFLLENBQUMsQ0FBQztDQUNWOzs7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsSUFBVSxFQUFFLE1BQU0sR0FBRyxTQUFTLEVBQUUsRUFBRSxLQUFlO0lBQzNFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO0NBQ3ZGOzs7Ozs7O0FBRUQsTUFBTSw0QkFBNEIsSUFBVSxFQUFFLEtBQWEsRUFBRSxLQUFlO0lBQzFFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDdkc7Ozs7OztBQUVELE1BQU0seUJBQXlCLElBQVUsRUFBRSxLQUFlO0lBQ3hELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO0NBQzNDOzs7Ozs7QUFFRCxNQUFNLDRCQUE0QixJQUFVLEVBQUUsS0FBZTtJQUMzRCxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3BEOzs7Ozs7O0FBRUQsTUFBTSx5QkFBeUIsSUFBVSxFQUFFLEtBQWUsRUFBRSxTQUFpQixTQUFTLEVBQUU7SUFDdEYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztDQUNoRzs7Ozs7Ozs7Ozs7QUFFRCw4QkFBOEIsSUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQ3ZDLE9BQWUsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEtBQWU7SUFDdEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekM7SUFFRCx1QkFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakQsdUJBQU0sS0FBSyxHQUFHLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRXRELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUMxRDs7Ozs7Ozs7OztBQUVELG9CQUFvQixJQUFVLEVBQUUsUUFBZ0IsRUFBRSxJQUFZLEVBQzFDLE9BQWUsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUMzRCx1QkFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzVFLHVCQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRCxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IHBhcnNlVHdvRGlnaXRZZWFyIH0gZnJvbSAnLi95ZWFyJztcbmltcG9ydCB7IGRheU9mWWVhckZyb21XZWVrcywgd2Vla09mWWVhciwgd2Vla3NJblllYXIgfSBmcm9tICcuL3dlZWstY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xuaW1wb3J0IHsgZ2V0SVNPV2VlaywgZ2V0V2VlayB9IGZyb20gJy4vd2Vlayc7XG5pbXBvcnQgeyBnZXRJU09EYXlPZldlZWssIGdldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4vZGF5LW9mLXdlZWsnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xuaW1wb3J0IHsgc2V0RGF0ZSwgc2V0RnVsbFllYXIsIHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcbmltcG9ydCB7IGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJGbiwgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnZ2cnLCAyLCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgLy8gcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbiAgICByZXR1cm4gKGdldFdlZWtZZWFyKGRhdGUsIG9wdHMubG9jYWxlKSAlIDEwMCkudG9TdHJpbmcoKTtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKG51bGwsIFsnR0cnLCAyLCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAvLyByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xuICAgIHJldHVybiAoZ2V0SVNPV2Vla1llYXIoZGF0ZSkgJSAxMDApLnRvU3RyaW5nKCk7XG4gIH0pO1xuXG5mdW5jdGlvbiBhZGRXZWVrWWVhckZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsIGdldHRlcjogRGF0ZUZvcm1hdHRlckZuKTogdm9pZCB7XG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoLCBmYWxzZV0sIG51bGwsIGdldHRlcik7XG59XG5cbmZ1bmN0aW9uIF9nZXRXZWVrWWVhckZvcm1hdENiKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldFdlZWtZZWFyKGRhdGUsIG9wdHMubG9jYWxlKS50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdldElTT1dlZWtZZWFyKGRhdGUpLnRvU3RyaW5nKCk7XG59XG5cbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCBfZ2V0V2Vla1llYXJGb3JtYXRDYik7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnZycsIF9nZXRXZWVrWWVhckZvcm1hdENiKTtcbmFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYik7XG5hZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKTtcblxuLy8gQUxJQVNFU1xuXG5hZGRVbml0QWxpYXMoJ3dlZWtZZWFyJywgJ2dnJyk7XG5hZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XG5cbi8vIFBSSU9SSVRZXG5cbmFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla1llYXInLCAxKTtcblxuXG4vLyBQQVJTSU5HXG5cbmFkZFJlZ2V4VG9rZW4oJ0cnLCBtYXRjaFNpZ25lZCk7XG5hZGRSZWdleFRva2VuKCdnJywgbWF0Y2hTaWduZWQpO1xuYWRkUmVnZXhUb2tlbignR0cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdnZycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG5hZGRSZWdleFRva2VuKCdnZ2dnJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuYWRkUmVnZXhUb2tlbignR0dHR0cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5hZGRSZWdleFRva2VuKCdnZ2dnZycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSxcbiAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnLCB0b2tlbikge1xuICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDIpXSA9IHRvSW50KGlucHV0KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuXG5hZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZywgdG9rZW4pIHtcbiAgd2Vla1t0b2tlbl0gPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuXG4vLyBNT01FTlRTXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XG4gIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlLFxuICAgIGlucHV0LFxuICAgIC8vIHRoaXMud2VlaygpLFxuICAgIGdldFdlZWsoZGF0ZSwgbG9jYWxlLCBpc1VUQyksXG4gICAgLy8gdGhpcy53ZWVrZGF5KCksXG4gICAgZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIGxvY2FsZSwgaXNVVEMpLFxuICAgIGxvY2FsZS5maXJzdERheU9mV2VlaygpLFxuICAgIGxvY2FsZS5maXJzdERheU9mWWVhcigpLFxuICAgIGlzVVRDKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGU6IERhdGUsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSwgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCksIGlzVVRDKS55ZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XG4gIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlLCBpbnB1dCwgZ2V0SVNPV2VlayhkYXRlLCBpc1VUQyksIGdldElTT0RheU9mV2VlayhkYXRlLCBpc1VUQyksIDEsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgMSwgNCwgaXNVVEMpLnllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pIHtcbiAgcmV0dXJuIHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgMSwgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrc0luWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBudW1iZXIge1xuICByZXR1cm4gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSwgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCkpO1xufVxuXG5mdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCB3ZWVrOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0V2Vla1llYXIoZGF0ZSwgdm9pZCAwLCBpc1VUQyk7XG4gIH1cblxuICBjb25zdCB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XG4gIGNvbnN0IF93ZWVrID0gd2VlayA+IHdlZWtzVGFyZ2V0ID8gd2Vla3NUYXJnZXQgOiB3ZWVrO1xuXG4gIHJldHVybiBzZXRXZWVrQWxsKGRhdGUsIGlucHV0LCBfd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xufVxuXG5mdW5jdGlvbiBzZXRXZWVrQWxsKGRhdGU6IERhdGUsIHdlZWtZZWFyOiBudW1iZXIsIHdlZWs6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgd2Vla2RheTogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBEYXRlIHtcbiAgY29uc3QgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xuICBjb25zdCBfZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XG4gIHNldEZ1bGxZZWFyKGRhdGUsIGdldEZ1bGxZZWFyKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XG4gIHNldE1vbnRoKGRhdGUsIGdldE1vbnRoKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XG4gIHNldERhdGUoZGF0ZSwgZ2V0RGF0ZShfZGF0ZSwgdHJ1ZSksIHRydWUpO1xuXG4gIHJldHVybiBkYXRlO1xufVxuIl19