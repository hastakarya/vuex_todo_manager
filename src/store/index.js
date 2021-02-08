import { createStore } from 'vuex'
import { createApp } from 'vue'
import todos from './modules/todos'

// Load Vuex
createApp().use(createStore)

// Create Store
export default new createStore({
    modules: {
        todos
    }
});

