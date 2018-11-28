/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getHours, getMinutes, getSeconds } from '../utils/date-getters';
import { addFormatToken } from '../format/format';
import { zeroFill } from '../utils/zero-fill';
import { addRegexToken, match1to2, match2, match3to4, match5to6 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { HOUR, MINUTE, SECOND } from './constants';
import { toInt } from '../utils/type-checks';
import { getParsingFlags } from '../create/parsing-flags';
import { addUnitPriority } from './priorities';
import { addUnitAlias } from './aliases';
/**
 * @param {?} date
 * @param {?} isUTC
 * @return {?}
 */
function hFormat(date, isUTC) {
    return getHours(date, isUTC) % 12 || 12;
}
/**
 * @param {?} date
 * @param {?} isUTC
 * @return {?}
 */
function kFormat(date, isUTC) {
    return getHours(date, isUTC) || 24;
}
addFormatToken('H', ['HH', 2, false], null, function (date, opts) {
    return getHours(date, opts.isUTC).toString(10);
});
addFormatToken('h', ['hh', 2, false], null, function (date, opts) {
    return hFormat(date, opts.isUTC).toString(10);
});
addFormatToken('k', ['kk', 2, false], null, function (date, opts) {
    return kFormat(date, opts.isUTC).toString(10);
});
addFormatToken('hmm', null, null, function (date, opts) {
    const /** @type {?} */ _h = hFormat(date, opts.isUTC);
    const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    return `${_h}${_mm}`;
});
addFormatToken('hmmss', null, null, function (date, opts) {
    const /** @type {?} */ _h = hFormat(date, opts.isUTC);
    const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    const /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
    return `${_h}${_mm}${_ss}`;
});
addFormatToken('Hmm', null, null, function (date, opts) {
    const /** @type {?} */ _H = getHours(date, opts.isUTC);
    const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    return `${_H}${_mm}`;
});
addFormatToken('Hmmss', null, null, function (date, opts) {
    const /** @type {?} */ _H = getHours(date, opts.isUTC);
    const /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
    const /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
    return `${_H}${_mm}${_ss}`;
});
/**
 * @param {?} token
 * @param {?} lowercase
 * @return {?}
 */
function meridiem(token, lowercase) {
    addFormatToken(token, null, null, function (date, opts) {
        return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
    });
}
meridiem('a', true);
meridiem('A', false);
// ALIASES
addUnitAlias('hour', 'h');
// PRIORITY
addUnitPriority('hour', 13);
/**
 * @param {?} isStrict
 * @param {?} locale
 * @return {?}
 */
function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}
addRegexToken('a', matchMeridiem);
addRegexToken('A', matchMeridiem);
addRegexToken('H', match1to2);
addRegexToken('h', match1to2);
addRegexToken('k', match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);
addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);
addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    const /** @type {?} */ kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
    return config;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
    return config;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
    return config;
});
addParseToken('hmm', function (input, array, config) {
    const /** @type {?} */ pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
    return config;
});
addParseToken('hmmss', function (input, array, config) {
    const /** @type {?} */ pos1 = input.length - 4;
    const /** @type {?} */ pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
    return config;
});
addParseToken('Hmm', function (input, array, config) {
    const /** @type {?} */ pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    return config;
});
addParseToken('Hmmss', function (input, array, config) {
    const /** @type {?} */ pos1 = input.length - 4;
    const /** @type {?} */ pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    return config;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2hvdXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUc3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7Ozs7QUFJekMsaUJBQWlCLElBQVUsRUFBRSxLQUFjO0lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7Q0FDekM7Ozs7OztBQUVELGlCQUFpQixJQUFVLEVBQUUsS0FBYztJQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDcEM7QUFFRCxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVUsSUFBVSxFQUFFLElBQTBCO0lBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDaEQsQ0FBQyxDQUFDO0FBQ0wsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN4QyxVQUFVLElBQVUsRUFBRSxJQUEwQjtJQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQy9DLENBQUMsQ0FBQztBQUNMLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBVSxJQUFVLEVBQUUsSUFBMEI7SUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUMvQyxDQUFDLENBQUM7QUFFTCxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzlCLFVBQVUsSUFBVSxFQUFFLElBQTBCO0lBQzlDLHVCQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyx1QkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztDQUN0QixDQUFDLENBQUM7QUFFTCxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ2hDLFVBQVUsSUFBVSxFQUFFLElBQTBCO0lBQzlDLHVCQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyx1QkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELHVCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdEQsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztDQUM1QixDQUFDLENBQUM7QUFFTCxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzlCLFVBQVUsSUFBVSxFQUFFLElBQTBCO0lBQzlDLHVCQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0Qyx1QkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQztDQUN0QixDQUFDLENBQUM7QUFFTCxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ2hDLFVBQVUsSUFBVSxFQUFFLElBQTBCO0lBQzlDLHVCQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0Qyx1QkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RELHVCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFD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eyBnZXRIb3VycywgZ2V0TWludXRlcywgZ2V0U2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiwgbWF0Y2gzdG80LCBtYXRjaDV0bzYgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xuaW1wb3J0IHsgSE9VUiwgTUlOVVRFLCBTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xuXG4vLyBGT1JNQVRUSU5HXG5cbmZ1bmN0aW9uIGhGb3JtYXQoZGF0ZTogRGF0ZSwgaXNVVEM6IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgaXNVVEMpICUgMTIgfHwgMTI7XG59XG5cbmZ1bmN0aW9uIGtGb3JtYXQoZGF0ZTogRGF0ZSwgaXNVVEM6IGJvb2xlYW4pOiBudW1iZXIge1xuICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgaXNVVEMpIHx8IDI0O1xufVxuXG5hZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyLCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKDEwKTtcbiAgfSk7XG5hZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyLCBmYWxzZV0sIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xuICB9KTtcbmFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDIsIGZhbHNlXSwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICByZXR1cm4ga0Zvcm1hdChkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XG4gIH0pO1xuXG5hZGRGb3JtYXRUb2tlbignaG1tJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCBfaCA9IGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICByZXR1cm4gYCR7X2h9JHtfbW19YDtcbiAgfSk7XG5cbmFkZEZvcm1hdFRva2VuKCdobW1zcycsIG51bGwsIG51bGwsXG4gIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XG4gICAgY29uc3QgX2ggPSBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuICAgIGNvbnN0IF9zcyA9IHplcm9GaWxsKGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgcmV0dXJuIGAke19ofSR7X21tfSR7X3NzfWA7XG4gIH0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tJywgbnVsbCwgbnVsbCxcbiAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCBfSCA9IGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpO1xuICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xuXG4gICAgcmV0dXJuIGAke19IfSR7X21tfWA7XG4gIH0pO1xuXG5hZGRGb3JtYXRUb2tlbignSG1tc3MnLCBudWxsLCBudWxsLFxuICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IF9IID0gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyk7XG4gICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG4gICAgY29uc3QgX3NzID0gemVyb0ZpbGwoZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XG5cbiAgICByZXR1cm4gYCR7X0h9JHtfbW19JHtfc3N9YDtcbiAgfSk7XG5cbmZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuOiBzdHJpbmcsIGxvd2VyY2FzZTogYm9vbGVhbik6IHZvaWQge1xuICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgbnVsbCwgbnVsbCxcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1lcmlkaWVtKGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpLCBnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCBsb3dlcmNhc2UpO1xuICAgIH0pO1xufVxuXG5tZXJpZGllbSgnYScsIHRydWUpO1xubWVyaWRpZW0oJ0EnLCBmYWxzZSk7XG5cbi8vIEFMSUFTRVNcblxuYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcblxuLy8gUFJJT1JJVFlcbmFkZFVuaXRQcmlvcml0eSgnaG91cicsIDEzKTtcblxuXG4vLyBQQVJTSU5HXG5cbmZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcbiAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcbn1cblxuYWRkUmVnZXhUb2tlbignYScsIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xuYWRkUmVnZXhUb2tlbignSCcsIG1hdGNoMXRvMik7XG5hZGRSZWdleFRva2VuKCdoJywgbWF0Y2gxdG8yKTtcbmFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIpO1xuYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG5hZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbmFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG5hZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xuYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuYWRkUmVnZXhUb2tlbignSG1tJywgbWF0Y2gzdG80KTtcbmFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcblxuYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG5hZGRQYXJzZVRva2VuKFsnaycsICdrayddLFxuICBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgICBjb25zdCBrSW5wdXQgPSB0b0ludChpbnB1dCk7XG4gICAgYXJyYXlbSE9VUl0gPSBrSW5wdXQgPT09IDI0ID8gMCA6IGtJbnB1dDtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH0pO1xuYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5hZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xuICBjb25zdCBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcbiAgY29uc3QgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XG4gIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XG4gIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xuICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xuXG4gIHJldHVybiBjb25maWc7XG59KTtcbmFkZFBhcnNlVG9rZW4oJ0htbXNzJywgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XG4gIGNvbnN0IHBvczEgPSBpbnB1dC5sZW5ndGggLSA0O1xuICBjb25zdCBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn0pO1xuIl19