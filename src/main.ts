export function add(a: number, b: number): number {
  return a + b;
}

if (import.meta.main) {
  console.log("Add 3 + 3 =", add(3, 3));
}
