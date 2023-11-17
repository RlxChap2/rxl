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

## Discord Package Section

> **You can use reply and interaction messages with `rxl-rest` package**

```js
const { Reply } = require("rxl-rest");

// Example Useage for Messages
Reply.message({ message: `Test Message`, interaction: message });

// Example Useage for Interactions
Reply.interaction({ message: `Test Message`, interaction: interaction });
```

**Console:**

```console
$ Test Message, UserID: userId, Username: username
```

## Console Section

- **you can Get more features With rxl!**

```js
const { Console } = require("rxl-rest");

// Exmple Useage of how to Return and get The Errors
Console.DebuggingErrors();

// Exmple Useage of how to Change The Console Msssage Color
Console.Color({ message: `Hello World!`, color: "green" }); // Green => green, Red => red

// Exmple Useage of how to make Type Errors
Console.throwTypeError("An error occurred");
```
