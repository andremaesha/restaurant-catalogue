import CONFIG from '../globals/config';
import API_CONFIG from '../globals/api-endpoint';

const CacheHelper = {
  async cachingAppShell(req) {
    const cache = await this._openCache();
    cache.addAll(req);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();

    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(req) {
    const response = await caches.match(req);

    if (response) {
      return response;
    }

    // if (req === API_CONFIG.CUSTOMER_REVIEWS) {
    //   return;
    // }

    return this._fetchrequest(req);
  },

  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async _fetchrequest(req) {
    const response = await fetch(req);

    if (!response || response.status !== 200) {
      return response;
    }

    if (req === API_CONFIG.CUSTOMER_REVIEWS) {
      return;
    }

    await this._addCache(req);
    return response;
  },

  async _addCache(req) {
    // if (req === API_CONFIG.CUSTOMER_REVIEWS) {
    //   return;
    // }
    const cache = await this._openCache();
    cache.add(req);
  },
};

export default CacheHelper;
