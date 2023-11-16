export declare class Console {
    static throwTypeError(msg: any): void;
    static Color(options?: {
        message?: string;
        color?: string;
    }): Promise<void>;
    static DebuggingErrors(): void;
}
