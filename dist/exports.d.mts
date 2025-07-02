import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;

interface CardProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    padding?: 'sm' | 'md' | 'lg';
}
declare const Card: React.FC<CardProps>;

interface UseLocalStorageOptions<T> {
    defaultValue: T;
    serialize?: (value: T) => string;
    deserialize?: (value: string) => T;
}
declare function useLocalStorage<T>(key: string, options: UseLocalStorageOptions<T>): [T, (value: T | ((prev: T) => T)) => void];

declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
declare function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions, locale?: string): string;
declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
declare function cn(...classes: (string | undefined | null | false)[]): string;

export { Button, type ButtonProps, Card, type CardProps, type UseLocalStorageOptions, cn, debounce, formatCurrency, formatDate, useLocalStorage };
