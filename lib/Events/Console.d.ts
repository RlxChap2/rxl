/**
 * Copyright (c) 2023-present, RlxChap2, rxl-npm
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare const RColors: {
    White: string;
    Cyan: string;
    Green: string;
    Blue: string;
    Yellow: string;
    Red: string;
    Magenta: string;
    Black: string;
};
export declare class Console {
    private static RColors;
    static throwTypeError(msg: any): void;
    static Color(options?: {
        message?: string;
        color?: string;
    }): Promise<void>;
    static DebuggingErrors(): void;
}
