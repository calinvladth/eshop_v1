export const OrderByIndex = (list) => {
    const arr = list.sort((a, b) => {
        return a.index - b.index
    })
    return arr
}