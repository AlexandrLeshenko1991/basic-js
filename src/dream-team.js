module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        return members
            .filter(item => {
                if (item !== undefined && typeof item === 'string' && item.length > 0) {
                    return true
                }
                return false
            })
            .map(item => {
                return item.trim()[0].toUpperCase()
            })
            .sort()
            .join('')
    }
    return false

};