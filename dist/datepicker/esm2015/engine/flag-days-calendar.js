/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isSameDay, isSameMonth, isAfter, isBefore, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagDaysCalendarOptions() { }
function FlagDaysCalendarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.hoveredDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedDate;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.selectedRange;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagDaysCalendarOptions.prototype.monthIndex;
}
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
export function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((week, weekIndex) => {
        // tslint:disable-next-line:cyclomatic-complexity
        week.days.forEach((day, dayIndex) => {
            // datepicker
            const /** @type {?} */ isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            const /** @type {?} */ isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            const /** @type {?} */ isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            const /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            const /** @type {?} */ isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            const /** @type {?} */ isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day');
            const /** @type {?} */ currentDate = new Date();
            const /** @type {?} */ isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            // decide update or not
            const /** @type {?} */ newDay = Object.assign({}, day, {
                isOtherMonth,
                isHovered,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isInRange,
                isDisabled,
                isToday
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2ZsYWctZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0QsTUFBTSwyQkFDSixjQUFxQyxFQUNyQyxPQUFnQztJQUVoQyxjQUFjLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQW1CLEVBQUUsU0FBaUIsRUFBRSxFQUFFOztRQUV0RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWlCLEVBQUUsUUFBZ0IsRUFBRSxFQUFFOztZQUV4RCx1QkFBTSxZQUFZLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbEUsdUJBQU0sU0FBUyxHQUNiLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFFNUQsdUJBQU0sZ0JBQWdCLEdBQ3BCLENBQUMsWUFBWTtnQkFDYixPQUFPLENBQUMsYUFBYTtnQkFDckIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELHVCQUFNLGNBQWMsR0FDbEIsQ0FBQyxZQUFZO2dCQUNiLE9BQU8sQ0FBQyxhQUFhO2dCQUNyQixTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsYUFBYSxD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Q0UsSUFBVSxFQUNWLGFBQXFCLEVBQ3JCLFdBQWlCO0lBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFFRCxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDNUQ7SUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUM7S0FDdkQ7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXG4gIERheVZpZXdNb2RlbCxcbiAgV2Vla1ZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgaXNTYW1lRGF5LCBpc1NhbWVNb250aCwgaXNBZnRlciwgaXNCZWZvcmUsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ0RheXNDYWxlbmRhck9wdGlvbnMge1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICBtaW5EYXRlOiBEYXRlO1xuICBtYXhEYXRlOiBEYXRlO1xuICBob3ZlcmVkRGF0ZTogRGF0ZTtcbiAgc2VsZWN0ZWREYXRlOiBEYXRlO1xuICBzZWxlY3RlZFJhbmdlOiBEYXRlW107XG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcbiAgbW9udGhJbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhZ0RheXNDYWxlbmRhcihcbiAgZm9ybWF0dGVkTW9udGg6IERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgb3B0aW9uczogRmxhZ0RheXNDYWxlbmRhck9wdGlvbnNcbik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XG4gIGZvcm1hdHRlZE1vbnRoLndlZWtzLmZvckVhY2goKHdlZWs6IFdlZWtWaWV3TW9kZWwsIHdlZWtJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuICAgIHdlZWsuZGF5cy5mb3JFYWNoKChkYXk6IERheVZpZXdNb2RlbCwgZGF5SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gZGF0ZXBpY2tlclxuICAgICAgY29uc3QgaXNPdGhlck1vbnRoID0gIWlzU2FtZU1vbnRoKGRheS5kYXRlLCBmb3JtYXR0ZWRNb250aC5tb250aCk7XG5cbiAgICAgIGNvbnN0IGlzSG92ZXJlZCA9XG4gICAgICAgICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcbiAgICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAgICBjb25zdCBpc1NlbGVjdGlvblN0YXJ0ID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMF0pO1xuICAgICAgY29uc3QgaXNTZWxlY3Rpb25FbmQgPVxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVsxXSk7XG5cbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPVxuICAgICAgICAoIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWREYXRlKSkgfHxcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBpc1NlbGVjdGlvbkVuZDtcblxuICAgICAgY29uc3QgaXNJblJhbmdlID1cbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcbiAgICAgICAgaXNEYXRlSW5SYW5nZShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcblxuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XG4gICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxuICAgICAgICBpc0JlZm9yZShkYXkuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCAnZGF5JykgfHxcbiAgICAgICAgaXNBZnRlcihkYXkuZGF0ZSwgb3B0aW9ucy5tYXhEYXRlLCAnZGF5Jyk7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgY3VycmVudERhdGUpO1xuXG4gICAgICAvLyBkZWNpZGUgdXBkYXRlIG9yIG5vdFxuICAgICAgY29uc3QgbmV3RGF5ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XG4gICAgICAgIGlzT3RoZXJNb250aCxcbiAgICAgICAgaXNIb3ZlcmVkLFxuICAgICAgICBpc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGlvblN0YXJ0LFxuICAgICAgICBpc1NlbGVjdGlvbkVuZCxcbiAgICAgICAgaXNJblJhbmdlLFxuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICBpc1RvZGF5XG4gICAgICB9KTtcblxuICAgICAgaWYgKFxuICAgICAgICBkYXkuaXNPdGhlck1vbnRoICE9PSBuZXdEYXkuaXNPdGhlck1vbnRoIHx8XG4gICAgICAgIGRheS5pc0hvdmVyZWQgIT09IG5ld0RheS5pc0hvdmVyZWQgfHxcbiAgICAgICAgZGF5LmlzU2VsZWN0ZWQgIT09IG5ld0RheS5pc1NlbGVjdGVkIHx8XG4gICAgICAgIGRheS5pc1NlbGVjdGlvblN0YXJ0ICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25TdGFydCB8fFxuICAgICAgICBkYXkuaXNTZWxlY3Rpb25FbmQgIT09IG5ld0RheS5pc1NlbGVjdGlvbkVuZCB8fFxuICAgICAgICBkYXkuaXNEaXNhYmxlZCAhPT0gbmV3RGF5LmlzRGlzYWJsZWQgfHxcbiAgICAgICAgZGF5LmlzSW5SYW5nZSAhPT0gbmV3RGF5LmlzSW5SYW5nZVxuICAgICAgKSB7XG4gICAgICAgIHdlZWsuZGF5c1tkYXlJbmRleF0gPSBuZXdEYXk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xuICBmb3JtYXR0ZWRNb250aC5oaWRlTGVmdEFycm93ID1cbiAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAob3B0aW9ucy5tb250aEluZGV4ID4gMCAmJiBvcHRpb25zLm1vbnRoSW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocyk7XG4gIGZvcm1hdHRlZE1vbnRoLmhpZGVSaWdodEFycm93ID1cbiAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcbiAgICAob3B0aW9ucy5tb250aEluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXG4gICAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xuXG4gIGZvcm1hdHRlZE1vbnRoLmRpc2FibGVMZWZ0QXJyb3cgPSBpc01vbnRoRGlzYWJsZWQoXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAtMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG4gIGZvcm1hdHRlZE1vbnRoLmRpc2FibGVSaWdodEFycm93ID0gaXNNb250aERpc2FibGVkKFxuICAgIHNoaWZ0RGF0ZShmb3JtYXR0ZWRNb250aC5tb250aCwgeyBtb250aDogMSB9KSxcbiAgICBvcHRpb25zLm1pbkRhdGUsXG4gICAgb3B0aW9ucy5tYXhEYXRlXG4gICk7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZE1vbnRoO1xufVxuXG5mdW5jdGlvbiBpc0RhdGVJblJhbmdlKFxuICBkYXRlOiBEYXRlLFxuICBzZWxlY3RlZFJhbmdlOiBEYXRlW10sXG4gIGhvdmVyZWREYXRlOiBEYXRlXG4pOiBib29sZWFuIHtcbiAgaWYgKCFkYXRlIHx8ICFzZWxlY3RlZFJhbmdlWzBdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdGVkUmFuZ2VbMV0pIHtcbiAgICByZXR1cm4gZGF0ZSA+IHNlbGVjdGVkUmFuZ2VbMF0gJiYgZGF0ZSA8PSBzZWxlY3RlZFJhbmdlWzFdO1xuICB9XG5cbiAgaWYgKGhvdmVyZWREYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gaG92ZXJlZERhdGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iXX0=