import storage from "local-storage-fallback";

export const initialState = {
    isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false
}

export const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME": {
            storage.setItem("isDark", !state.isDark);

            return {
                ...state,
                isDark: !state.isDark,
            };
        }
        default: {
            throw new Error('Something with action went wrong.')
        }
    }
};
