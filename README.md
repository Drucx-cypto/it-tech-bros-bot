# CypherX

CypherX is a lightweight JavaScript tool for performing basic cryptographic transformations such as character shifting and symbol encoding.

## Features

- Dynamic character shifting based on character position.
- Simple encryption and decryption functions using ASCII manipulation.
- Minimal dependency, easy to use in any JavaScript environment.

## Usage

Run the script using Node.js:

```bash
node index.js
```

## Example

```javascript
const original = "Hello, World!";
const mixed = mix(original);
const unmixed = unmix(mixed);

console.log("Original:", original);
console.log("Mixed:", mixed);
console.log("Unmixed:", unmixed);
```

## License

ISC License.
