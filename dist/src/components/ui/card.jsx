var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
const Card = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div ref={ref} className={cn('rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950', className)} {...props}/>);
});
Card.displayName = 'Card';
const CardHeader = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props}/>);
});
CardHeader.displayName = 'CardHeader';
const CardTitle = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props}/>);
});
CardTitle.displayName = 'CardTitle';
const CardDescription = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<p ref={ref} className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props}/>);
});
CardDescription.displayName = 'CardDescription';
const CardContent = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div ref={ref} className={cn('p-6 pt-0', className)} {...props}/>);
});
CardContent.displayName = 'CardContent';
const CardFooter = forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props}/>);
});
CardFooter.displayName = 'CardFooter';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
