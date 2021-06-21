export const ChangeQuantity = (add, quantity, limit=100) => {
    let currentQuantity = quantity
    let newQuantity = 0
    let quantityLimit = limit ? limit : 0
    if (add) {
        newQuantity = currentQuantity + 1
    } else {
        newQuantity = currentQuantity - 1
    }

    if (newQuantity < 1) newQuantity = 1
    if (quantityLimit !== 0 && newQuantity > quantityLimit) newQuantity = quantityLimit

    return newQuantity
}