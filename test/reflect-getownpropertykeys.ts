import "../Reflect";
import { assert } from "chai";

describe("Reflect.deleteMetadata", () => {
    it("KeysOrderAfterRedefineWithTargetKey", () => {
        let obj = {};
        Reflect.defineMetadata("key", "value", obj, "name");
        Reflect.defineMetadata("key", "value", obj, "age");
        let result = Reflect.getOwnPropertyKeys(obj);
        assert.deepEqual(Array.from(result), ["name", "age"]);
    });
});