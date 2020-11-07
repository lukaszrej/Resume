const React = require("react");
const ContextProvider = require("./src/store/ContextProvider");

exports.wrapRootElement = ({ element }) => {
    return (
        <ContextProvider>
            { element }
        </ContextProvider>
    )
}
