function mergePath(paterPath = "", path = "") {
    if (!path && !paterPath) return ""
    if (!path) return paterPath
    if (!paterPath) return path
    path = path.replace(/^\//, "")
    paterPath = paterPath.replace(/\/$/, "")
    return paterPath + "/" + path
}

export default mergePath
