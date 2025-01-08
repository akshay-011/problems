import { removeVowels } from "../src/removeVowels.js";
import { assertEquals } from "jsr:@std/assert";

Deno.test("empty string", () => {
  assertEquals(removeVowels(""), "");
});

Deno.test("testing with no vowels", () => {
  assertEquals(removeVowels("rhythm"), "rhythm");
  assertEquals(removeVowels("gym"), "gym");
});

Deno.test("text with only vowels", () => {
  assertEquals(removeVowels("a"), "");
  assertEquals(removeVowels("ae"), "");
  assertEquals(removeVowels("aei"), "");
});

Deno.test("text with vowel character", () => {
  assertEquals(removeVowels("hi"), "h");
  assertEquals(removeVowels("good night"), "gd nght");
});
