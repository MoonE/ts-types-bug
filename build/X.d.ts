export default X;
export type Options = {
    test?: typeof import("./Test.js").default | undefined;
};
/**
 * @typedef {Object} Options
 * @property {typeof import("./Test.js").default} [test]
 */
declare class X extends Test {
    /**
     * @param {Options} options
     */
    constructor(options: Options);
    test: import("./Test.js").default | undefined;
}
import Test_1 from './test/Test.js';
//# sourceMappingURL=X.d.ts.map