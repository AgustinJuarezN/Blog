import { REGEX } from '@core';
export function ValidateNoWhitespace(control) {
    const value = control.value;
    if (!value)
        return null;
    if (value.match(REGEX.NO_WHITESPACE))
        return null;
    else
        return { whitespacePattern: true };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8td2hpdGUtc3BhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9saWIvdXRpbHMvdmFsaWRhdG9ycy9uby13aGl0ZS1zcGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTVCLE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxPQUF3QjtJQUMzRCxNQUFNLEtBQUssR0FBVyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3BDLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFeEIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFBRSxPQUFPLElBQUksQ0FBQzs7UUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1JFR0VYfSBmcm9tICdAY29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVOb1doaXRlc3BhY2UoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogYW55IHtcclxuICBjb25zdCB2YWx1ZTogc3RyaW5nID0gY29udHJvbC52YWx1ZTtcclxuICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgaWYgKHZhbHVlLm1hdGNoKFJFR0VYLk5PX1dISVRFU1BBQ0UpKSByZXR1cm4gbnVsbDtcclxuICBlbHNlIHJldHVybiB7IHdoaXRlc3BhY2VQYXR0ZXJuOiB0cnVlIH07XHJcbn1cclxuIl19