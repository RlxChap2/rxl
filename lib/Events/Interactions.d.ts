/**
 * Copyright (c) 2023-present, RlxChap2, rxl-npm
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare class Reply {
    static interaction(options?: {
        interaction?: any;
        message?: string;
    }): Promise<void>;
    static message(options?: {
        interaction?: any;
        message?: string;
    }): Promise<void>;
}
