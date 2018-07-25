const FS = require('fs');
const PATH = require('path');
const STORAGE_PATH = PATH.join(__dirname, '/storage.json');

let storage = {};

function isKeyStringValidation(key) {
    if (typeof key !== 'string') {
        throw new TypeError('Key must be a string!');
    }
}

function isKeyExist(key) {
    if (!storage.hasOwnProperty(key)) {
        throw new Error('Key does not exist in the storage!');
    }
}

function isKeyAlreadyExist(key) {
    if (storage.hasOwnProperty(key)) {
        throw new Error('Key already exists in the storage!');
    }
}

function put(key, value) {
    isKeyStringValidation(key);
    isKeyAlreadyExist(key);

    storage[key] = value;
}

function update(key, newValue) {
    isKeyStringValidation(key);
    isKeyExist(key);

    storage[key] = newValue;
}

function remove(key) {
    isKeyStringValidation(key);
    isKeyExist(key);

    delete storage[key]; 
}

function get(key) {
    isKeyStringValidation(key);
    isKeyExist(key);

    return storage[key];
}

function getAll() {
    if (Object.keys(storage).length === 0) {
        return 'There are no items in the storage';
    }

    return storage;
}

function clear() {
    storage = {};
}

function removeStorageFile() {
    if (FS.existsSync(STORAGE_PATH)) {
        FS.unlinkSync(STORAGE_PATH);
    }
}

function save() {
    let json = JSON.stringify(storage);
    FS.writeFileSync(STORAGE_PATH, json, 'utf-8');
}

function load() {
    if (FS.existsSync(STORAGE_PATH) === false) {
        return;
    }

    let json = FS.readFileSync(STORAGE_PATH, 'utf-8').toString();
    storage = JSON.parse(json);
    return storage;
}

module.exports = {
    put,
    update,
    remove,
    get,
    getAll,
    clear,
    save,
    load,
    removeStorageFile
};