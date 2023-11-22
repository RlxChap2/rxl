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
