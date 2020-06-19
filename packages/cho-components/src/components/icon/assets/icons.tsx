/* istanbul ignore file */
/* eslint-disable max-len */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from '@stencil/core';

export const icons = {
  'arrow-down': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="var(--icon-color)" d="M7 10l5 5 5-5z" />
    </svg>
  ),
  'arrow-up': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="var(--icon-color)" d="M7 14l5-5 5 5z" />
    </svg>
  ),
  'calendar': () => (
    <svg viewBox="0 0 24 24">
      <path
        fill="var(--icon-color)"
        d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  ),
  'cancel': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
      />
    </svg>
  ),
  'close': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 00-1.41 0 .996.996 0 000 1.41L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
      />
    </svg>
  ),
  'error-outline': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      />
    </svg>
  ),
  'hamburger': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="var(--icon-color)" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  ),
  'info': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </svg>
  ),
  'link': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
      />
    </svg>
  ),
  'search': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      />
    </svg>
  ),
  'success': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="var(--icon-color)"
        d="M20 12a8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8c.76 0 1.5.11 2.2.31l1.57-1.57A9.822 9.822 0 0012 2 10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10M7.91 10.08L6.5 11.5 11 16 21 6l-1.41-1.42L11 13.17l-3.09-3.09z"
      />
    </svg>
  ),
  'warning': () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="var(--icon-color)" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
} as const;
