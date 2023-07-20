interface IKVStorage<T> {
    set(key: string, value: T): void;
    get(key: string): T | null;
    remove(key: string): void;
}

export class KVStorage<T> implements IKVStorage<T> {
    instance;

    constructor(instance: IKVStorage<T>) {
        this.instance = instance;
    }

    set(key: string, value: T): void {
        this.instance.set(key, value);
    }
    get(key: string): T | null {
        return this.instance.get(key);
    }
    remove(key: string): void {
        this.instance.remove(key);
    }
}

export class LocalStorage implements IKVStorage<string> {
    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
    get(key: string): string | null {
        return localStorage.getItem(key);
    }
    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
