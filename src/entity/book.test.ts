import assert = require("assert");
import { test } from "node:test";
import { Book } from "./book";

test("baic", () => {
    const book = new Book("test")
    assert.strictEqual("test", book.Name)
})

