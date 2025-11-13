// Suppress preload warnings in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes?.('was preloaded using link preload')) return;
    originalWarn(...args);
  };
}
