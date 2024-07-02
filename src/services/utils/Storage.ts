
export const storeLocally = (key: string, value: any) => {
    try {
        const s = JSON.stringify(value);
        localStorage.setItem(key, s);
    } catch (error) {
        console.error(`Error storing data ${key} to local storage: ${error}`);
    }
}

export const getFromLocalStorage = (key: string): any => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        try {
            const parsedData = JSON.parse(storedData);
            return parsedData;
        } catch (error) {
            console.error(`Error parsing data ${key} from local storage: ${storedData}`);
        }
    }
    return undefined;
}

export const removeFromLocalStorage = (key: string) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error removing data ${key} from local storage: ${error}`);
    }
}
