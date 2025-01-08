import { assertEquals } from "jsr:@std/assert/equals";
import { deepClone } from "../src/objectDeepCloning.js";

Deno.test("testing with empty object", () => {
  assertEquals(deepClone({}), {});
});

Deno.test("testing with no nesting of objects", () => {
  assertEquals(deepClone({ a: 1 }), { a: 1 });
});

Deno.test("testing with nested objects", () => {
  assertEquals(deepClone({ a: { b: 1 } }), { a: { b: 1 } });
});
