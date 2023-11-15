export declare class Log {
    static success(msg: string): void;
}
export declare class Reply {
    static interaction(msg: string, int: any): Promise<void>;
    static message(msg: string, int: any): Promise<void>;
}
