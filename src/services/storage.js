import { writeFileSync, readFileSync, promises } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const doesFileExist = async (filePath) => {
    try {
        await promises.stat(filePath);

        return true;
    } catch (error) {
        return false;        
    }
};

const DATA_FILE_NAME = 'wheather-data.json';
const DATA_FILE_DIR = homedir();
const DATA_FILE_PATH = join(DATA_FILE_DIR, DATA_FILE_NAME);

const saveKeyValue = async (key, value) => {
    const doesDataFileExist = await doesFileExist(DATA_FILE_PATH);
    const data = doesDataFileExist ? JSON.parse(readFileSync(DATA_FILE_PATH)) : {};
    data[key] = value;
    writeFileSync(DATA_FILE_PATH, JSON.stringify(data));
};

const getValueByKey = async (key) => {
    const doesDataFileExist = await doesFileExist(DATA_FILE_PATH);
    const data = doesDataFileExist ? JSON.parse(readFileSync(DATA_FILE_PATH)) : {};

    return data ? data[key] : undefined;
};

export { saveKeyValue, getValueByKey };
