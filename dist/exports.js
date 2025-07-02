"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/exports.ts
var exports_exports = {};
__export(exports_exports, {
  Button: () => Button,
  Card: () => Card,
  cn: () => cn,
  debounce: () => debounce,
  formatCurrency: () => formatCurrency,
  formatDate: () => formatDate,
  useLocalStorage: () => useLocalStorage
});
module.exports = __toCommonJS(exports_exports);

// src/library/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = ""
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50"
  };
  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`,
      disabled,
      onClick,
      children
    }
  );
};

// src/library/components/Card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = ({
  children,
  title,
  className = "",
  padding = "md"
}) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `bg-white rounded-lg border border-gray-200 shadow-sm ${paddingClasses[padding]} ${className}`, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: title }),
    children
  ] });
};

// src/library/hooks/useLocalStorage.ts
var import_react = require("react");
function useLocalStorage(key, options) {
  const {
    defaultValue,
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = options;
  const [value, setValue] = (0, import_react.useState)(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? deserialize(item) : defaultValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });
  const setStoredValue = (newValue) => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, serialize(valueToStore));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };
  (0, import_react.useEffect)(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue) {
        try {
          setValue(deserialize(e.newValue));
        } catch (error) {
          console.warn(`Error parsing localStorage value for key "${key}":`, error);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, deserialize]);
  return [value, setStoredValue];
}

// src/library/utils/index.ts
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(amount);
}
function formatDate(date, options = {}, locale = "en-US") {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options
  }).format(dateObj);
}
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  cn,
  debounce,
  formatCurrency,
  formatDate,
  useLocalStorage
});
//# sourceMappingURL=exports.js.map