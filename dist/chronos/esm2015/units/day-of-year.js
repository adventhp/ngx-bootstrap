/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { startOf } from '../utils/start-end-of';
import { addRegexToken, match1to3, match3 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
import { toInt } from '../utils/type-checks';
import { add } from '../moment/add-subtract';
// FORMATTING
addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
    return getDayOfYear(date).toString(10);
});
// ALIASES
addUnitAlias('dayOfYear', 'DDD');
// PRIORITY
addUnitPriority('dayOfYear', 4);
addRegexToken('DDD', match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
    return config;
});
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
export function getDayOfYear(date, isUTC) {
    const /** @type {?} */ date1 = +startOf(date, 'day', isUTC);
    const /** @type {?} */ date2 = +startOf(date, 'year', isUTC);
    const /** @type {?} */ someDate = date1 - date2;
    const /** @type {?} */ oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}
/**
 * @param {?} date
 * @param {?} input
 * @return {?}
 */
export function setDayOfYear(date, input) {
    const /** @type {?} */ dayOfYear = getDayOfYear(date);
    return add(date, (input - dayOfYear), 'day');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLXllYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9kYXktb2YteWVhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBSTdDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFDOUMsVUFBVSxJQUFVO0lBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3hDLENBQUMsQ0FBQzs7QUFLTCxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDOztBQUlqQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRWhDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QixhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQzNCLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7SUFDbEUsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakMsTUFBTSxDQUFDLE1BQU0sQ0FBQztDQUNmLENBQUMsQ0FBQzs7Ozs7O0FBRUwsTUFBTSx1QkFBdUIsSUFBVSxFQUFFLEtBQWU7SUFDdEQsdUJBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0MsdUJBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsdUJBQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDL0IsdUJBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUVuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7QUFFRCxNQUFNLHVCQUF1QixJQUFVLEVBQUUsS0FBYTtJQUNwRCx1QkFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcbmltcG9ydCB7IHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8zLCBtYXRjaDMgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzLCBmYWxzZV0sICdERERvJyxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSkudG9TdHJpbmcoMTApO1xuICB9KTtcblxuXG4vLyBBTElBU0VTXG5cbmFkZFVuaXRBbGlhcygnZGF5T2ZZZWFyJywgJ0RERCcpO1xuXG4vLyBQUklPUklUWVxuXG5hZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xuXG5hZGRSZWdleFRva2VuKCdEREQnLCBtYXRjaDF0bzMpO1xuYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XG5hZGRQYXJzZVRva2VuKFsnREREJywgJ0REREQnXSxcbiAgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xuICBjb25zdCBkYXRlMSA9ICtzdGFydE9mKGRhdGUsICdkYXknLCBpc1VUQyk7XG4gIGNvbnN0IGRhdGUyID0gK3N0YXJ0T2YoZGF0ZSwgJ3llYXInLCBpc1VUQyk7XG4gIGNvbnN0IHNvbWVEYXRlID0gZGF0ZTEgLSBkYXRlMjtcbiAgY29uc3Qgb25lRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNDtcblxuICByZXR1cm4gTWF0aC5yb3VuZChzb21lRGF0ZSAvIG9uZURheSkgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIpOiBEYXRlIHtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gZGF5T2ZZZWFyKSwgJ2RheScpO1xufVxuIl19