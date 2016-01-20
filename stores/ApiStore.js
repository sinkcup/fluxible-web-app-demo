import BaseStore from 'fluxible/addons/BaseStore';

class ApiStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.dispatcher = dispatcher;
        this.data = null;
    }
    handleData(data) {
        this.data = data;
        this.emitChange();
    }
    getData() {
        return this.data;
    }
    dehydrate() {
        return {
            'data': this.data
        };
    }
    rehydrate(state) {
        this.data = state.data;
    }
}

ApiStore.storeName = 'ApiStore';
ApiStore.handlers = {
    'LOAD_SUCCESS': 'handleData'
};

export default ApiStore;
