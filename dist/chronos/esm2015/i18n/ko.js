/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
export const /** @type {?} */ koLocale = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '일';
            case 'M':
                return num + '월';
            case 'w':
            case 'W':
                return num + '주';
            default:
                return num.toString(10);
        }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
        return token === '오후';
    },
    meridiem: function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia28uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2tvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUQsV0FBVyxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDakUsUUFBUSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkQsYUFBYSxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFDLFdBQVcsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsUUFBUTtRQUNiLEdBQUcsRUFBRyxXQUFXO1FBQ2pCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxlQUFlO1FBQ3BCLEdBQUcsRUFBRyxzQkFBc0I7UUFDNUIsSUFBSSxFQUFHLDJCQUEyQjtRQUNsQyxDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsZUFBZTtRQUNwQixHQUFHLEVBQUcsc0JBQXNCO1FBQzVCLElBQUksRUFBRywyQkFBMkI7S0FDbkM7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsT0FBTztRQUNqQixRQUFRLEVBQUcsU0FBUztRQUNwQixPQUFPLEVBQUcsT0FBTztRQUNqQixRQUFRLEVBQUcsYUFBYTtRQUN4QixRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLE1BQU07UUFDZixJQUFJLEVBQUcsTUFBTTtRQUNiLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLE1BQU07UUFDVixFQUFFLEVBQUcsTUFBTTtRQUNYLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsS0FBSztLQUNYO0lBQ0Qsc0JBQXNCLEVBQUcsZ0JBQWdCO0lBQ3pDLE9BQU8sRUFBRyxVQUFVLEdBQVcsRUFBRSxNQUFjO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRztnQkFDTixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsYUFBYSxFQUFHLE9BQU87SUFDdkIsSUFBSSxFQUFHLFVBQVUsS0FBSztRQUNwQixNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztLQUN2QjtJQUNELFFBQVEsRUFBRyxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN4QyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDaEM7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcblxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IEtvcmVhbiBba29dXG4vLyEgYXV0aG9yIDogS3l1bmd3b29rLCBQYXJrIDogaHR0cHM6Ly9naXRodWIuY29tL2t5dW5ndzAwa1xuLy8hIGF1dGhvciA6IEplZWV5dWwgTGVlIDxqZWVleXVsQGdtYWlsLmNvbT5cblxuZXhwb3J0IGNvbnN0IGtvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xuICBhYmJyOiAna28nLFxuICBtb250aHMgOiAnMeyblF8y7JuUXzPsm5RfNOyblF817JuUXzbsm5RfN+yblF847JuUXznsm5RfMTDsm5RfMTHsm5RfMTLsm5QnLnNwbGl0KCdfJyksXG4gIG1vbnRoc1Nob3J0IDogJzHsm5RfMuyblF8z7JuUXzTsm5RfNeyblF827JuUXzfsm5RfOOyblF857JuUXzEw7JuUXzEx7JuUXzEy7JuUJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5cyA6ICfsnbzsmpTsnbxf7JuU7JqU7J28X+2ZlOyalOydvF/siJjsmpTsnbxf66qp7JqU7J28X+q4iOyalOydvF/thqDsmpTsnbwnLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzU2hvcnQgOiAn7J28X+yblF/tmZRf7IiYX+uqqV/quIhf7YagJy5zcGxpdCgnXycpLFxuICB3ZWVrZGF5c01pbiA6ICfsnbxf7JuUX+2ZlF/siJhf66qpX+q4iF/thqAnLnNwbGl0KCdfJyksXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xuICAgIExUIDogJ0EgaDptbScsXG4gICAgTFRTIDogJ0EgaDptbTpzcycsXG4gICAgTCA6ICdZWVlZLk1NLkREJyxcbiAgICBMTCA6ICdZWVlZ64WEIE1NTU0gROydvCcsXG4gICAgTExMIDogJ1lZWVnrhYQgTU1NTSBE7J28IEEgaDptbScsXG4gICAgTExMTCA6ICdZWVlZ64WEIE1NTU0gROydvCBkZGRkIEEgaDptbScsXG4gICAgbCA6ICdZWVlZLk1NLkREJyxcbiAgICBsbCA6ICdZWVlZ64WEIE1NTU0gROydvCcsXG4gICAgbGxsIDogJ1lZWVnrhYQgTU1NTSBE7J28IEEgaDptbScsXG4gICAgbGxsbCA6ICdZWVlZ64WEIE1NTU0gROydvCBkZGRkIEEgaDptbSdcbiAgfSxcbiAgY2FsZW5kYXIgOiB7XG4gICAgc2FtZURheSA6ICfsmKTripggTFQnLFxuICAgIG5leHREYXkgOiAn64K07J28IExUJyxcbiAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcbiAgICBsYXN0RGF5IDogJ+yWtOygnCBMVCcsXG4gICAgbGFzdFdlZWsgOiAn7KeA64Kc7KO8IGRkZGQgTFQnLFxuICAgIHNhbWVFbHNlIDogJ0wnXG4gIH0sXG4gIHJlbGF0aXZlVGltZSA6IHtcbiAgICBmdXR1cmUgOiAnJXMg7ZuEJyxcbiAgICBwYXN0IDogJyVzIOyghCcsXG4gICAgcyA6ICfrqocg7LSIJyxcbiAgICBzcyA6ICclZOy0iCcsXG4gICAgbSA6ICcx67aEJyxcbiAgICBtbSA6ICclZOu2hCcsXG4gICAgaCA6ICftlZwg7Iuc6rCEJyxcbiAgICBoaCA6ICclZOyLnOqwhCcsXG4gICAgZCA6ICftlZjro6gnLFxuICAgIGRkIDogJyVk7J28JyxcbiAgICBNIDogJ+2VnCDri6wnLFxuICAgIE1NIDogJyVk64usJyxcbiAgICB5IDogJ+ydvCDrhYQnLFxuICAgIHl5IDogJyVk64WEJ1xuICB9LFxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9KOydvHzsm5R87KO8KS8sXG4gIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgY2FzZSAnZCc6XG4gICAgICBjYXNlICdEJzpcbiAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgIHJldHVybiBudW0gKyAn7J28JztcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICByZXR1cm4gbnVtICsgJ+yblCc7XG4gICAgICBjYXNlICd3JzpcbiAgICAgIGNhc2UgJ1cnOlxuICAgICAgICByZXR1cm4gbnVtICsgJ+yjvCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcbiAgICB9XG4gIH0sXG4gIG1lcmlkaWVtUGFyc2UgOiAv7Jik7KCEfOyYpO2bhC8sXG4gIGlzUE0gOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gdG9rZW4gPT09ICfsmKTtm4QnO1xuICB9LFxuICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzVXBwZXIpIHtcbiAgICByZXR1cm4gaG91ciA8IDEyID8gJ+yYpOyghCcgOiAn7Jik7ZuEJztcbiAgfVxufTtcbiJdfQ==