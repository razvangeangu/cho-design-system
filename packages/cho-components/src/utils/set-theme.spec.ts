import { setTheme } from './set-theme';

describe('setTheme', () => {
  it('should set light theme from parameter', () => {
    setTheme('light');
    expect(document.body.dataset.choTheme).toBe('light');
  });

  it('should set dark theme from parameter', () => {
    setTheme('dark');
    expect(document.body.dataset.choTheme).toBe('dark');
  });

  it('should set dark theme from storage', () => {
    setTheme('light');
    setTheme();
    expect(document.body.dataset.choTheme).toBe('dark');
  });

  it('should set light theme from storage', () => {
    setTheme('dark');
    setTheme();
    expect(document.body.dataset.choTheme).toBe('light');
  });
});
