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
import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
const Input = forwardRef((_a, ref) => {
    var { className, label, error, helperText, id } = _a, props = __rest(_a, ["className", "label", "error", "helperText", "id"]);
    const inputId = id || label ? label === null || label === void 0 ? void 0 : label.toLowerCase().replace(/\s+/g, '-') : undefined;
    return (<div className="space-y-1.5">
        {label && (<label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
          </label>)}
        <input id={inputId} className={cn('flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', error ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-300 focus-visible:ring-primary-500', className)} ref={ref} {...props}/>
        {helperText && !error && (<p className="text-sm text-gray-500">{helperText}</p>)}
        {error && (<p className="text-sm text-red-500">{error}</p>)}
      </div>);
});
Input.displayName = 'Input';
export { Input };
