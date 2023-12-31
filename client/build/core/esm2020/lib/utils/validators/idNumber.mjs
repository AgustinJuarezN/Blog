function validationIdDigit(ci) {
    let a = 0;
    if (ci.length <= 6) {
        for (let i = ci.length; i < 7; i++) {
            ci = '0' + ci;
        }
    }
    for (let i = 0; i < 7; i++) {
        a += (parseInt('2987634'[i], 10) * parseInt(ci[i], 10)) % 10;
    }
    if (a % 10 === 0)
        return 0;
    else
        return 10 - (a % 10);
}
export function ValidateIdNumber(control) {
    if (control.value) {
        let ci = control.value;
        const dig = ci[ci.length - 1];
        if (ci === '')
            return { required: true };
        else if (ci.length !== 8 ||
            dig != validationIdDigit(ci.replace(/[0-9]$/, '')))
            return { invalid: true };
        return null;
    }
    else {
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWROdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9saWIvdXRpbHMvdmFsaWRhdG9ycy9pZE51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxTQUFTLGlCQUFpQixDQUFDLEVBQVU7SUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRVYsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM5RDtJQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7O1FBQ3RCLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBd0I7SUFDdkQsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ2pCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDdkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFOUIsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDcEMsSUFDSCxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDZixHQUFHLElBQUksaUJBQWlCLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUUzQixPQUFPLElBQUksQ0FBQztLQUNiO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0aW9uSWREaWdpdChjaTogc3RyaW5nKTogbnVtYmVyIHtcclxuICBsZXQgYSA9IDA7XHJcblxyXG4gIGlmIChjaS5sZW5ndGggPD0gNikge1xyXG4gICAgZm9yIChsZXQgaSA9IGNpLmxlbmd0aDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjaSA9ICcwJyArIGNpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGEgKz0gKHBhcnNlSW50KCcyOTg3NjM0J1tpXSwgMTApICogcGFyc2VJbnQoY2lbaV0sIDEwKSkgJSAxMDtcclxuICB9XHJcblxyXG4gIGlmIChhICUgMTAgPT09IDApIHJldHVybiAwO1xyXG4gIGVsc2UgcmV0dXJuIDEwIC0gKGEgJSAxMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZUlkTnVtYmVyKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IGFueSB7XHJcbiAgaWYgKGNvbnRyb2wudmFsdWUpIHtcclxuICAgIGxldCBjaSA9IGNvbnRyb2wudmFsdWU7XHJcbiAgICBjb25zdCBkaWcgPSBjaVtjaS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBpZiAoY2kgPT09ICcnKSByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xyXG4gICAgZWxzZSBpZiAoXHJcbiAgICAgIGNpLmxlbmd0aCAhPT0gOCB8fFxyXG4gICAgICBkaWcgIT0gdmFsaWRhdGlvbklkRGlnaXQoY2kucmVwbGFjZSgvWzAtOV0kLywgJycpKVxyXG4gICAgKVxyXG4gICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=