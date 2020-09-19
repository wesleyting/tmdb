const getWinDim = (type) => {
    const defaultDim = {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
    return type === "width" ? defaultDim.width : defaultDim.height;
}
export default getWinDim;