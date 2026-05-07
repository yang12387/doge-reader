const legacy = $falcon.jsapi.storage;

if (!legacy) {
  console.error(' storage API 不可用！');
}

// 通用 promisify 包装（回调风格转 Promise）
function promisify(fn, param) {
  return new Promise((resolve, reject) => {
    fn(param, (result) => {
      if (result && result.error) {
        reject(result.error);
      } else {
        resolve(result);
      }
    });
  });
}

export default {
  // 获取值：返回字符串或 null
  async getStorage(key) {
    const result = await promisify(legacy.getStorage, { key });
    return result.data !== undefined ? result.data : null;
  },
  // 设置值：value 必须是字符串
  async setStorage(key, value) {
    await promisify(legacy.setStorage, { key, data: value });
    return 0;
  },
  // 获取所有 keys
  async getStorageKeys() {
    const result = await promisify(legacy.getStorageInfo, {});
    return result.keys || [];
  },
  // 删除指定 key
  async removeStorage(key) {
    await promisify(legacy.removeStorage, { key });
    return 0;
  },
  // 清空所有
  async clearStorage() {
    await promisify(legacy.clearStorage, {});
    return 0;
  }
};