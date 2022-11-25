/** Copied from https://github.com/piotrwitek/utility-types/blob/2ae7412a9edf12f34fedbf594facf43cf04f7e32/src/mapped-types.ts#L112 */
/**
 * MutableKeys
 * @desc Get union type of keys that are mutable in object type `T`
 * Credit: Matt McCutchen
 * https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript
 * @example
 *   type Props = { readonly foo: string; bar: number };
 *
 *   // Expect: "bar"
 *   type Keys = MutableKeys<Props>;
 */
declare type MutableKeys<T extends object> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P>;
}[keyof T];
declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
export declare type OmitReadonly<T extends object> = Pick<T, MutableKeys<T>>;
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};
export {};
//# sourceMappingURL=types.d.ts.map