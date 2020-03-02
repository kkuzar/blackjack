

export const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export const shuffle = (arr: number[]) =>  arr.sort(() => Math.random() - 0.5);
