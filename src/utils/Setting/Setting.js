import storage from 'storage';

function getNow() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export default class Setting {
    async _get(key) {
        try {
            const value = await storage.getStorage(key);
            return JSON.parse(value);
        } catch (e) {
            return null;
        }
    }

    async _set(key, value) {
        try {
            await storage.setStorage(key, JSON.stringify(value));
            return true;
        } catch (e) {
            return false;
        }
    }

    async addItem(path, progress, target = 'history') {
        let history = await this._get(target);
        if (!history) {
            history = [];
        }

        if (target === 'history') {
            history = history.filter(item => item.path !== path);
        }
        history.push({ path, progress, time: getNow() });

        await this._set(target, history);
    }

    async getItem(path, target = 'history') {
        let history = await this._get(target);
        if (!history) {
            return null;
        }

        const item = history.find(item => item.path === path);
        if (!item) {
            return null;
        }

        return item.progress
    }

    async clearItems(target = 'history') {
        await this._set(target, []);
    }

    async getAllItems(target = 'history') {
        let history = await this._get(target);
        if (!history) {
            return [];
        }

        return history;
    }

    async setMode(mode) {
        if (mode === 'page' || mode === 'scroll') {
            await this._set('mode', mode);
        }
    }

    async getMode() {
        if (await this._get('mode')) {
            return await this._get('mode');
        } else {
            await this._set('mode', 'page');
            return 'page';
        }
    }

    async setLargerFont(isLarger) {
        if (isLarger === true || isLarger === false) {
            await this._set('isLarger', isLarger);
        }
    }

    async isLargerFont() {
        if (await this._get('isLarger') === null) {
            await this._set('isLarger', false);
            return false;
        } else {
            return await this._get('isLarger');
        }
    }
}