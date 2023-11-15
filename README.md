<div align="center">
	<br />
	<p>
		<a href="https://www.npmjs.com/package/rxl-rest"><img src="https://media.discordapp.net/attachments/1106119206061223936/1155248969337810954/rxl.png?width=1440&height=492" width="546" alt="rxl-rest" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/6CuMuv5Yzg"><img src="https://img.shields.io/discord/977544174125609010?logo=discord&color=5865F2" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/rxl-rest"><img src="https://img.shields.io/npm/v/rxl-rest.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/rxl-rest"><img src="https://img.shields.io/npm/dt/rxl-rest.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## install

```sh
npm install rxl-rest
```

---

## String Code

**This is a simple code for using the string code :**

```js
const { String } = require("rxl-rest");

console.log(String("rxl"));
```

- **if the string = rxl**

```console
$ true
```

- **if the string dosen't same the rxl**

```console
$ false
```

## Discord Package Section

> **You can user reply and interaction messages with `rxl-rest` package**

```js
const { reply } = require("rxl-rest");

reply({ message: `Test Message`, interaction: interaction });
```

**Console:**

```console
$ Test Message, UserID: userId, Username: username
```

## Errors Section

- **you can Return and get The Errors**

```js
const { Errors } = require("rxl-rest");

async function testErrors() {
  try {
    // Call Errors function with different inputs
    const ErrorsInstance = await Errors;
    const error1 = new ErrorsInstance.Errors("Error 1");
    console.log("Returned error 1:", error1);
  } catch (err) {
    console.log("Caught an error:", err);
  }
}

testErrors();
```
