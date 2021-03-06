/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * **************
 * @record
 */
export function NavigationViewModel() { }
function NavigationViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationViewModel.prototype.monthTitle;
    /** @type {?} */
    NavigationViewModel.prototype.yearTitle;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideRightArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableRightArrow;
}
/**
 * @record
 */
export function CalendarCellViewModel() { }
function CalendarCellViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarCellViewModel.prototype.date;
    /** @type {?} */
    CalendarCellViewModel.prototype.label;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isDisabled;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isHovered;
}
/**
 * **************
 * @record
 */
export function DayViewModel() { }
function DayViewModel_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonth;
    /** @type {?|undefined} */
    DayViewModel.prototype.isInRange;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionStart;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionEnd;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelected;
    /** @type {?|undefined} */
    DayViewModel.prototype.isToday;
    /** @type {?|undefined} */
    DayViewModel.prototype.monthIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.weekIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.dayIndex;
}
/**
 * @record
 */
export function WeekViewModel() { }
function WeekViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekViewModel.prototype.days;
}
/**
 * @record
 */
export function DaysCalendarViewModel() { }
function DaysCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarViewModel.prototype.weeks;
    /** @type {?} */
    DaysCalendarViewModel.prototype.month;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekNumbers;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekdays;
}
/**
 * **************
 * @record
 */
export function MonthsCalendarViewModel() { }
function MonthsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthsCalendarViewModel.prototype.months;
}
/**
 * **************
 * @record
 */
export function YearsCalendarViewModel() { }
function YearsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    YearsCalendarViewModel.prototype.years;
}
/**
 * **************
 * @record
 */
export function DaysCalendarModel() { }
function DaysCalendarModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarModel.prototype.daysMatrix;
    /** @type {?} */
    DaysCalendarModel.prototype.month;
}
/**
 * **************
 * @record
 */
export function MonthViewOptions() { }
function MonthViewOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MonthViewOptions.prototype.width;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.height;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.firstDayOfWeek;
}
/**
 * **************
 * @record
 */
export function DatepickerFormatOptions() { }
function DatepickerFormatOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    DatepickerFormatOptions.prototype.locale;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.dayLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.weekNumbers;
}
/**
 * @record
 */
export function DatepickerRenderOptions() { }
function DatepickerRenderOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.showWeekNumbers;
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.displayMonths;
}
/** @enum {number} */
const BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
export { BsNavigationDirection };
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";
/**
 * @record
 */
export function BsNavigationEvent() { }
function BsNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.direction;
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.step;
}
/**
 * @record
 */
export function BsViewNavigationEvent() { }
function BsViewNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsViewNavigationEvent.prototype.unit;
    /** @type {?} */
    BsViewNavigationEvent.prototype.viewMode;
}
/**
 * @record
 */
export function CellHoverEvent() { }
function CellHoverEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    CellHoverEvent.prototype.cell;
    /** @type {?} */
    CellHoverEvent.prototype.isHovered;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcblxuZXhwb3J0IHR5cGUgQnNEYXRlcGlja2VyVmlld01vZGUgPSAnZGF5JyB8ICdtb250aCcgfCAneWVhcic7XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIG5hdmlnYXRpb24gYmFyIHNldHRpbmdzXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICBtb250aFRpdGxlOiBzdHJpbmc7XG4gIHllYXJUaXRsZTogc3RyaW5nO1xuICBoaWRlTGVmdEFycm93PzogYm9vbGVhbjtcbiAgaGlkZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xuICBkaXNhYmxlTGVmdEFycm93PzogYm9vbGVhbjtcbiAgZGlzYWJsZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB7XG4gIGRhdGU6IERhdGU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICBpc0hvdmVyZWQ/OiBib29sZWFuO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyBkYXlzIG1hdHJpeDogZGF5IGNlbGwgdmlldyBtb2RlbFxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3TW9kZWwgZXh0ZW5kcyBDYWxlbmRhckNlbGxWaWV3TW9kZWwge1xuICBpc090aGVyTW9udGg/OiBib29sZWFuO1xuICBpc0luUmFuZ2U/OiBib29sZWFuO1xuICBpc1NlbGVjdGlvblN0YXJ0PzogYm9vbGVhbjtcbiAgaXNTZWxlY3Rpb25FbmQ/OiBib29sZWFuO1xuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcbiAgaXNUb2RheT86IGJvb2xlYW47XG4gIC8vIGRheSBpbmRleFxuICBtb250aEluZGV4PzogbnVtYmVyO1xuICB3ZWVrSW5kZXg/OiBudW1iZXI7XG4gIGRheUluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3TW9kZWwge1xuICBkYXlzOiBEYXlWaWV3TW9kZWxbXTtcbn1cblxuLy8gdG9kbzogc3BsaXQgbmF2aWdhdGlvbiBzZXR0aW5nc1xuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgd2Vla3M6IFdlZWtWaWV3TW9kZWxbXTtcbiAgLy8gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICBtb250aDogRGF0ZTtcbiAgd2Vla051bWJlcnM6IHN0cmluZ1tdO1xuICB3ZWVrZGF5czogc3RyaW5nW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIG1vbnRocyBjYWxlbmRhclxuZXhwb3J0IGludGVyZmFjZSBNb250aHNDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE5hdmlnYXRpb25WaWV3TW9kZWwge1xuICBtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cbi8vIHllYXJzIGNhbGVuZGFyXG5leHBvcnQgaW50ZXJmYWNlIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcbiAgeWVhcnM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XG59XG5cbi8qKiAqKioqKioqKioqKioqKiogKi9cblxuLy8gbWF0aCBtb2RlbFxuLyoqICoqKioqKioqKioqKioqKiAqL1xuXG4vLyBkYXlzIERhdGUncyBhcnJheVxuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJNb2RlbCB7XG4gIGRheXNNYXRyaXg6IERhdGVbXVtdO1xuICBtb250aDogRGF0ZTtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gc29tZSBmdW5jIG9wdGlvbnNcbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhWaWV3T3B0aW9ucyB7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyO1xufVxuXG4vKiogKioqKioqKioqKioqKioqICovXG4vLyByZW5kZXJpbmcgb3B0aW9uc1xuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XG4gIGxvY2FsZTogc3RyaW5nO1xuXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcbiAgeWVhclRpdGxlOiBzdHJpbmc7XG5cbiAgZGF5TGFiZWw6IHN0cmluZztcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xuICB5ZWFyTGFiZWw6IHN0cmluZztcblxuICB3ZWVrTnVtYmVyczogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcbiAgc2hvd1dlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgZGlzcGxheU1vbnRocz86IG51bWJlcjtcbn1cblxuLyoqICoqKioqKioqKioqKioqKiAqL1xuLy8gZXZlbnRzXG4vKiogKioqKioqKioqKioqKioqICovXG5leHBvcnQgZW51bSBCc05hdmlnYXRpb25EaXJlY3Rpb24ge1xuICBVUCxcbiAgRE9XTlxufVxuXG4vLyB1c2VkIGZvciBuYXZpZ2F0aW9uIGV2ZW50cywgdG8gY2hhbmdlIHZpZXcgZGF0ZSBpbiBzdGF0ZVxuZXhwb3J0IGludGVyZmFjZSBCc05hdmlnYXRpb25FdmVudCB7XG4gIGRpcmVjdGlvbj86IEJzTmF2aWdhdGlvbkRpcmVjdGlvbjtcbiAgc3RlcD86IFRpbWVVbml0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJzVmlld05hdmlnYXRpb25FdmVudCB7XG4gIHVuaXQ/OiBUaW1lVW5pdDtcbiAgdmlld01vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENlbGxIb3ZlckV2ZW50IHtcbiAgY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsO1xuICBpc0hvdmVyZWQ6IGJvb2xlYW47XG59XG4iXX0=