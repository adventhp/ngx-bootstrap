/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { getDay } from '../utils/date-getters';
import { addRegexToken, match1to2 } from '../parse/regex';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
import { addWeekParseToken } from '../parse/token';
import { getParsingFlags } from '../create/parsing-flags';
import { isNumber, isString, toInt } from '../utils/type-checks';
import { add } from '../moment/add-subtract';
import { getLocale } from '../locale/locales';
// FORMATTING
addFormatToken('d', null, 'do', function (date, opts) {
    return getDay(date, opts.isUTC).toString(10);
});
addFormatToken('dd', null, null, function (date, opts) {
    return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
});
addFormatToken('ddd', null, null, function (date, opts) {
    return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
});
addFormatToken('dddd', null, null, function (date, opts) {
    return opts.locale.weekdays(date, opts.format, opts.isUTC);
});
addFormatToken('e', null, null, function (date, opts) {
    return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10);
    // return getDay(date, opts.isUTC).toString(10);
});
addFormatToken('E', null, null, function (date, opts) {
    return getISODayOfWeek(date, opts.isUTC).toString(10);
});
// ALIASES
addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');
// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);
// PARSING
addRegexToken('d', match1to2);
addRegexToken('e', match1to2);
addRegexToken('E', match1to2);
addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});
addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    const /** @type {?} */ weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week["d"] = weekday;
    }
    else {
        getParsingFlags(config).invalidWeekday = !!input;
    }
    return config;
});
addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
    return config;
});
/**
 * @param {?} input
 * @param {?} locale
 * @return {?}
 */
export function parseWeekday(input, locale) {
    if (!isString(input)) {
        return input;
    }
    const /** @type {?} */ _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    const /** @type {?} */ _weekDay = locale.weekdaysParse(input);
    if (isNumber(_weekDay)) {
        return _weekDay;
    }
    return null;
}
/**
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */
export function parseIsoWeekday(input, locale = getLocale()) {
    if (isString(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNumber(input) && isNaN(input) ? null : input;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?} opts
 * @return {?}
 */
export function getSetDayOfWeek(date, input, opts) {
    if (!input) {
        return getDayOfWeek(date, opts.isUTC);
    }
    return setDayOfWeek(date, input, opts.locale, opts.isUTC);
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
export function setDayOfWeek(date, input, locale = getLocale(), isUTC) {
    const /** @type {?} */ day = getDay(date, isUTC);
    const /** @type {?} */ _input = parseWeekday(input, locale);
    return add(date, _input - day, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getDayOfWeek(date, isUTC) {
    return getDay(date, isUTC);
}
/**
 * ****************************************
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
export function getLocaleDayOfWeek(date, locale = getLocale(), isUTC) {
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
export function setLocaleDayOfWeek(date, input, opts = {}) {
    const /** @type {?} */ weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return add(date, input - weekday, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getISODayOfWeek(date, isUTC) {
    return getDay(date, isUTC) || 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
export function setISODayOfWeek(date, input, opts = {}) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    const /** @type {?} */ weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLXdlZWsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9kYXktb2Ytd2Vlay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFJOUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUM1QixVQUFVLElBQVUsRUFBRSxJQUEwQjtJQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQzlDLENBQUMsQ0FBQztBQUVMLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDN0IsVUFBVSxJQUFVLEVBQUUsSUFBMEI7SUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENB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Q0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0M7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDdkQ7Ozs7Ozs7QUFJRCxNQUFNLDBCQUEwQixJQUFVLEVBQUUsS0FBYSxFQUFFLElBQXlDO0lBQ2xHLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QztJQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUMzRDs7Ozs7Ozs7QUFFRCxNQUFNLHVCQUF1QixJQUFVLEVBQUUsS0FBYSxFQUFFLE1BQU0sR0FBRyxTQUFTLEVBQUUsRUFBRSxLQUFlO0lBQzNGLHVCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLHVCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRTNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDdkM7Ozs7OztBQUVELE1BQU0sdUJBQXVCLElBQVUsRUFBRSxLQUFlO0lBQ3RELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzVCOzs7Ozs7OztBQU1ELE1BQU0sNkJBQTZCLElBQVUsRUFBRSxNQUFNLEdBQUcsU0FBUyxFQUFFLEVBQUUsS0FBZTtJQUNsRixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDaEU7Ozs7Ozs7QUFFRCxNQUFNLDZCQUE2QixJQUFVLEVBQUUsS0FBYSxFQUFFLE9BQTZDLEVBQUU7SUFDM0csdUJBQU0sT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsRSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7QUFJRCxNQUFNLDBCQUEwQixJQUFVLEVBQUUsS0FBZTtJQUN6RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDakM7Ozs7Ozs7QUFFRCxNQUFNLDBCQUEwQixJQUFVLEVBQUUsS0FBc0IsRUFBRSxPQUE0QixFQUFFOzs7O0lBS2hHLHVCQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztDQUMzRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcbmltcG9ydCB7IGdldERheSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XG5cbi8vIEZPUk1BVFRJTkdcblxuYWRkRm9ybWF0VG9rZW4oJ2QnLCBudWxsLCAnZG8nLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXREYXkoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICB9KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gb3B0cy5sb2NhbGUud2Vla2RheXNNaW4oZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICB9KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzU2hvcnQoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xuICB9KTtcblxuYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5cyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XG4gIH0pO1xuXG5hZGRGb3JtYXRUb2tlbignZScsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldExvY2FsZURheU9mV2VlayhkYXRlLCBvcHRzLmxvY2FsZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICAgIC8vIHJldHVybiBnZXREYXkoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICB9KTtcbmFkZEZvcm1hdFRva2VuKCdFJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0SVNPRGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdkYXknLCAnZCcpO1xuYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcbmFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XG5cbi8vIFBSSU9SSVRZXG5hZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcbmFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbmFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla2RheScsIDExKTtcblxuLy8gUEFSU0lOR1xuXG5hZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignRScsIG1hdGNoMXRvMik7XG5cbmFkZFJlZ2V4VG9rZW4oJ2RkJywgZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG59KTtcblxuYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XG4gIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbn0pO1xuYWRkUmVnZXhUb2tlbignZGRkZCcsIGZ1bmN0aW9uIChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xuICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xufSk7XG5cbmFkZFdlZWtQYXJzZVRva2VuKFsnZGQnLCAnZGRkJywgJ2RkZGQnXSxcbiAgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbikge1xuICAgIGNvbnN0IHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxuICAgIGlmICh3ZWVrZGF5ICE9IG51bGwpIHtcbiAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gISFpbnB1dDtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxuYWRkV2Vla1BhcnNlVG9rZW4oWydkJywgJ2UnLCAnRSddLFxuICBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxuLy8gSEVMUEVSU1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIsIGxvY2FsZTogTG9jYWxlKTogbnVtYmVyIHtcbiAgaWYgKCFpc1N0cmluZyhpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBjb25zdCBfbnVtID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgaWYgKCFpc05hTihfbnVtKSkge1xuICAgIHJldHVybiBfbnVtO1xuICB9XG5cbiAgY29uc3QgX3dlZWtEYXkgPSBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gIGlmIChpc051bWJlcihfd2Vla0RheSkpIHtcbiAgICByZXR1cm4gX3dlZWtEYXk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gIH1cblxuICByZXR1cm4gaXNOdW1iZXIoaW5wdXQpICYmIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbn1cblxuLy8gTU9NRU5UU1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIG9wdHM6IHsgaXNVVEM/OiBib29sZWFuOyBsb2NhbGU6IExvY2FsZSB9KTogRGF0ZSB8IG51bWJlciB7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpO1xuICB9XG5cbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBpbnB1dCwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcbiAgY29uc3QgZGF5ID0gZ2V0RGF5KGRhdGUsIGlzVVRDKTtcbiAgY29uc3QgX2lucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgX2lucHV0IC0gZGF5LCAnZGF5Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcbiAgcmV0dXJuIGdldERheShkYXRlLCBpc1VUQyk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gdG9kbzogdXRjXG4vLyBnZXRTZXRMb2NhbGVEYXlPZldlZWtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiAoZ2V0RGF5KGRhdGUsIGlzVVRDKSArIDcgLSBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSkgJSA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlOyBpc1VUQz86IGJvb2xlYW4gfSA9IHt9KTogRGF0ZSB7XG4gIGNvbnN0IHdlZWtkYXkgPSBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgaW5wdXQgLSB3ZWVrZGF5LCAnZGF5Jyk7XG59XG5cblxuLy8gZ2V0U2V0SVNPRGF5T2ZXZWVrXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpIHx8IDc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRJU09EYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciB8IHN0cmluZywgb3B0czogeyBsb2NhbGU/OiBMb2NhbGUgfSA9IHt9KTogRGF0ZSB7XG4gIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcbiAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcbiAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuXG4gIGNvbnN0IHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIG9wdHMubG9jYWxlKTtcblxuICByZXR1cm4gc2V0RGF5T2ZXZWVrKGRhdGUsIGdldERheU9mV2VlayhkYXRlKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xufVxuIl19