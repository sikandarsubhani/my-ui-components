// src/library/components/Button.tsx
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-lg border border-gray-200 shadow-sm ${paddingClasses[padding]} ${className}`, children: [
    title && /* @__PURE__ */ jsx2("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: title }),
    children
  ] });
};

// src/library/hooks/useLocalStorage.ts
import { useState, useEffect } from "react";
function useLocalStorage(key, options) {
  const {
    defaultValue,
    serialize = JSON.stringify,
    deserialize = JSON.parse
  } = options;
  const [value, setValue] = useState(() => {
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
  useEffect(() => {
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
export {
  Button,
  Card,
  cn,
  debounce,
  formatCurrency,
  formatDate,
  useLocalStorage
};
//# sourceMappingURL=exports.mjs.map