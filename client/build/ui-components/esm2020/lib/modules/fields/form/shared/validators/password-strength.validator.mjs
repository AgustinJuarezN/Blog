export function createPasswordStrengthValidator() {
    return (control) => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const hasUpperCase = /[A-Z]+/.test(value);
        if (!hasUpperCase) {
            return { hasUppercase: true };
        }
        const hasLowerCase = /[a-z]+/.test(value);
        if (!hasLowerCase) {
            return { hasLowerCase: true };
        }
        const hasNumeric = /[0-9]+/.test(value);
        if (!hasNumeric)
            return { hasNumeric: true };
        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
        return !passwordValid ? { passwordStrength: true } : null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtc3RyZW5ndGgudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktY29tcG9uZW50cy9zcmMvbGliL21vZHVsZXMvZmllbGRzL2Zvcm0vc2hhcmVkL3ZhbGlkYXRvcnMvcGFzc3dvcmQtc3RyZW5ndGgudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSwrQkFBK0I7SUFDOUMsT0FBTyxDQUFDLE9BQXVCLEVBQTRCLEVBQUU7UUFFNUQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUU1QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUMsSUFBRyxDQUFDLFlBQVksRUFBQztZQUNoQixPQUFPLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFBO1NBQzFCO1FBRUQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQyxJQUFHLENBQUMsWUFBWSxFQUFDO1lBQ2hCLE9BQU8sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLENBQUE7U0FDMUI7UUFFRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUcsQ0FBQyxVQUFVO1lBQUUsT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQTtRQUV6QyxNQUFNLGFBQWEsR0FBRyxZQUFZLElBQUksWUFBWSxJQUFJLFVBQVUsQ0FBQztRQUVqRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkQsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG5cdHJldHVybiAoY29udHJvbDpBYnN0cmFjdENvbnRyb2wpIDogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cdFx0XHJcblx0XHRjb25zdCB2YWx1ZSA9IGNvbnRyb2wudmFsdWU7XHJcblx0XHRcclxuXHRcdGlmICghdmFsdWUpIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnN0IGhhc1VwcGVyQ2FzZSA9IC9bQS1aXSsvLnRlc3QodmFsdWUpO1xyXG5cdFx0XHJcblx0XHRpZighaGFzVXBwZXJDYXNlKXtcclxuXHRcdFx0cmV0dXJuIHtoYXNVcHBlcmNhc2U6dHJ1ZX1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc3QgaGFzTG93ZXJDYXNlID0gL1thLXpdKy8udGVzdCh2YWx1ZSk7XHJcblx0XHRcclxuXHRcdGlmKCFoYXNMb3dlckNhc2Upe1xyXG5cdFx0XHRyZXR1cm4ge2hhc0xvd2VyQ2FzZTp0cnVlfVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRjb25zdCBoYXNOdW1lcmljID0gL1swLTldKy8udGVzdCh2YWx1ZSk7XHJcblx0XHRpZighaGFzTnVtZXJpYykgcmV0dXJuIHtoYXNOdW1lcmljOiB0cnVlfVxyXG5cdFx0XHJcblx0XHRjb25zdCBwYXNzd29yZFZhbGlkID0gaGFzVXBwZXJDYXNlICYmIGhhc0xvd2VyQ2FzZSAmJiBoYXNOdW1lcmljO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gIXBhc3N3b3JkVmFsaWQgPyB7cGFzc3dvcmRTdHJlbmd0aDp0cnVlfTogbnVsbDtcclxuXHR9XHJcbn1cclxuIl19