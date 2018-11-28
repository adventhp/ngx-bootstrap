/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export class BsDatepickerDayDecoratorComponent {
}
BsDatepickerDayDecoratorComponent.decorators = [
    { type: Component, args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected',
                    '[class.today]': 'day.isToday'
                },
                template: `{{ day.label }}`
            }] }
];
/** @nocollapse */
BsDatepickerDayDecoratorComponent.propDecorators = {
    "day": [{ type: Input },],
};
function BsDatepickerDayDecoratorComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerDayDecoratorComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerDayDecoratorComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDatepickerDayDecoratorComponent.propDecorators;
    /** @type {?} */
    BsDatepickerDayDecoratorComponent.prototype.day;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCMUUsTUFBTTs7O1lBZkwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsZ0JBQWdCO29CQUNwQyx3QkFBd0IsRUFBRSxlQUFlO29CQUN6Qyx3QkFBd0IsRUFBRSxrQkFBa0I7b0JBQzVDLGtCQUFrQixFQUFFLGVBQWU7b0JBQ25DLHNCQUFzQixFQUFFLHNCQUFzQjtvQkFDOUMsb0JBQW9CLEVBQUUsb0JBQW9CO29CQUMxQyxrQkFBa0IsRUFBRSxnQkFBZ0I7b0JBQ3BDLGVBQWUsRUFBRSxhQUFhO2lCQUMvQjtnQkFDRCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O29CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlckRheURlY29yYXRvcl0nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2RheS5pc0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmlzLWhpZ2hsaWdodGVkXSc6ICdkYXkuaXNIb3ZlcmVkJyxcbiAgICAnW2NsYXNzLmlzLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoJyxcbiAgICAnW2NsYXNzLmluLXJhbmdlXSc6ICdkYXkuaXNJblJhbmdlJyxcbiAgICAnW2NsYXNzLnNlbGVjdC1zdGFydF0nOiAnZGF5LmlzU2VsZWN0aW9uU3RhcnQnLFxuICAgICdbY2xhc3Muc2VsZWN0LWVuZF0nOiAnZGF5LmlzU2VsZWN0aW9uRW5kJyxcbiAgICAnW2NsYXNzLnNlbGVjdGVkXSc6ICdkYXkuaXNTZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy50b2RheV0nOiAnZGF5LmlzVG9kYXknXG4gIH0sXG4gIHRlbXBsYXRlOiBge3sgZGF5LmxhYmVsIH19YFxufSlcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXk6IERheVZpZXdNb2RlbDtcbn1cbiJdfQ==