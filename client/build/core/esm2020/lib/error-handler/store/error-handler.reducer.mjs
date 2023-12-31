import { createFeature, createReducer, on } from '@ngrx/store';
import * as ErrorHandlerActions from './error-handler.actions';
export const errorHandlerInitialState = {
    message: undefined,
    code: -1,
};
export const errorHandlerFeature = createFeature({
    name: 'errorHandler',
    reducer: createReducer(errorHandlerInitialState, on(ErrorHandlerActions.throw403Error, ErrorHandlerActions.throw401Error, ErrorHandlerActions.throw404Error, (state, action) => ({
        code: action.error.status,
        message: action.error.message,
    }))),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvbGliL2Vycm9yLWhhbmRsZXIvc3RvcmUvZXJyb3ItaGFuZGxlci5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRCxPQUFPLEtBQUssbUJBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFPL0QsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQXNCO0lBQ3pELE9BQU8sRUFBRSxTQUFTO0lBQ2xCLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDVCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0lBQy9DLElBQUksRUFBRSxjQUFjO0lBQ3BCLE9BQU8sRUFBRSxhQUFhLENBQ3BCLHdCQUF3QixFQUN4QixFQUFFLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlILElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDekIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTztLQUM5QixDQUFDLENBQUMsQ0FDSjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZlYXR1cmUsIGNyZWF0ZVJlZHVjZXIsIG9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBFcnJvckhhbmRsZXJBY3Rpb25zIGZyb20gJy4vZXJyb3ItaGFuZGxlci5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JIYW5kbGVyU3RhdGUge1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXJJbml0aWFsU3RhdGU6IEVycm9ySGFuZGxlclN0YXRlID0ge1xyXG4gIG1lc3NhZ2U6IHVuZGVmaW5lZCxcclxuICBjb2RlOiAtMSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXJGZWF0dXJlID0gY3JlYXRlRmVhdHVyZSh7XHJcbiAgbmFtZTogJ2Vycm9ySGFuZGxlcicsXHJcbiAgcmVkdWNlcjogY3JlYXRlUmVkdWNlcihcclxuICAgIGVycm9ySGFuZGxlckluaXRpYWxTdGF0ZSxcclxuICAgIG9uKEVycm9ySGFuZGxlckFjdGlvbnMudGhyb3c0MDNFcnJvciwgRXJyb3JIYW5kbGVyQWN0aW9ucy50aHJvdzQwMUVycm9yLCBFcnJvckhhbmRsZXJBY3Rpb25zLnRocm93NDA0RXJyb3IsIChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xyXG4gICAgICBjb2RlOiBhY3Rpb24uZXJyb3Iuc3RhdHVzLFxyXG4gICAgICBtZXNzYWdlOiBhY3Rpb24uZXJyb3IubWVzc2FnZSxcclxuICAgIH0pKSxcclxuICApLFxyXG59KTtcclxuIl19