import { removeVowels } from "../src/removeVowels.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("testing with no vowels", () => {
  assertEquals(removeVowels("rhythm"), "rhythm");
  assertEquals(removeVowels("gym"), "gym");
});
