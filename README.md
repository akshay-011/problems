# JavaScript Practice Questions

- https://leetcode.com/problems/surrounded-regions/description/
- https://leetcode.com/problems/regular-expression-matching/description/

### 1. **String Manipulation**

- **Problem**: Write a function that takes a string and returns the same string with all vowels removed.
  - **Example**: `removeVowels('Hello World')` → `"Hll Wrld"`

### 2. **Array Flattening**

- **Problem**: Given a nested array, write a function to flatten the array to a single level. For example, `[1, [2, [3, [4]]]]` should return `[1, 2, 3, 4]`.
  - **Example**: `flatten([1, [2, [3, [4]]]])` → `[1, 2, 3, 4]`

### 3. **Object Deep Clone**

- **Problem**: Write a function that takes an object and returns a deep clone of the object (not a shallow copy). Modify a property of the cloned object and ensure that the original object remains unchanged.
  - **Example**:
    - `let obj = { a: 1, b: { c: 2 } }`
    - `let clone = deepClone(obj)`
    - Modify `clone.b.c = 3`
    - `obj.b.c` should still be `2`

### 4. **Debouncing Function**

- **Problem**: Write a function that implements debouncing. The function should only execute after a certain amount of delay once the event stops triggering.
  - **Example**:
    - `debounce(() => console.log('Executed'), 300)`
    - It should only log `"Executed"` after the function has stopped being called for 300ms.

### 5. **Sum of Digits in a Number**

- **Problem**: Write a function that calculates the sum of all digits in a given number. For example, for the number `123`, the result should be `1 + 2 + 3 = 6`.
  - **Example**: `sumDigits(123)` → `6`

### 6. **Array Grouping**

- **Problem**: Write a function that groups an array of objects by a given property. For example, given `[{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 1, name: 'Jack'}]`, group by `id` so that it returns `[{id: 1, names: ['John', 'Jack']}, {id: 2, names: ['Jane']}]`.
  - **Example**: `groupBy([{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 1, name: 'Jack'}], 'id')`
    → `[{id: 1, names: ['John', 'Jack']}, {id: 2, names: ['Jane']}]`

### 7. **Array Sorting by Object Property**

- **Problem**: Write a function to sort an array of objects by a property value. For example, given `[{name: 'John', age: 25}, {name: 'Jane', age: 30}]`, sort by `age` in ascending order.
  - **Example**: `sortBy([{name: 'John', age: 25}, {name: 'Jane', age: 30}], 'age')` → `[ { name: 'John', age: 25 }, { name: 'Jane', age: 30 } ]`

### 8. **Find Missing Number in Array**

- **Problem**: Given an array of numbers from 1 to n with one number missing, find the missing number. For example, if the array is `[1, 2, 4, 5]`, the missing number is `3`.
  - **Example**: `findMissing([1, 2, 4, 5])` → `3`

### Regex Practice Questions

### 9. **Validate Email Address**

- **Problem**: Write a regex that validates a standard email address (e.g., `example@domain.com`).
  - **Example**: `validateEmail('test@example.com')` → `true`, `validateEmail('test.com')` → `false`

### 10. **Extract Numbers from a String**

- **Problem**: Write a regex that extracts all numbers from a string. For example, given the string `"My number is 1234 and my friend's number is 5678"`, it should return `[1234, 5678]`.
  - **Example**: `extractNumbers('My number is 1234 and my friend's number is 5678')` → `[1234, 5678]`

### 11. **Find Duplicate Words**

- **Problem**: Write a regex that finds duplicate words in a sentence. For example, in the sentence `"Hello world world! Hello again."`, the output should indicate that "world" and "Hello" are repeated.
  - **Example**: `findDuplicateWords('Hello world world! Hello again.')` → `['Hello', 'world']`

### 12. **Phone Number Validation**

- **Problem**: Write a regex to validate a phone number. The phone number should follow the format `(XXX) XXX-XXXX`, where `X` is a digit.
  - **Example**: `validatePhoneNumber('(123) 456-7890')` → `true`, `validatePhoneNumber('123-456-7890')` → `false`

### 13. **Extract Date from a String**

- **Problem**: Write a regex to extract a date in the format `DD/MM/YYYY` from a string. For example, for the input `"The event is on 25/12/2025."`, the regex should extract `25/12/2025`.
  - **Example**: `extractDate('The event is on 25/12/2025.')` → `'25/12/2025'`

### New Concepts:

#### **Debouncing**

- **Definition**: Debouncing is a technique used to limit the rate at which a function is executed. It’s often used in scenarios where the function is called repeatedly in a short time span, like when typing in a search box.
- **Example Use Case**: Limiting the number of times an API is called when a user types in a search box.

#### **Event Delegation**

- **Definition**: Event delegation is a technique where a parent element listens for events on its child elements, even if the child elements are added dynamically later on.
- **Example Use Case**: Listening for click events on a button added dynamically via JavaScript.

### Conclusion:

These questions will test your knowledge of JavaScript fundamentals and some advanced concepts, such as event delegation, debouncing, and regex. Try to solve these and implement the solutions with clean code!
