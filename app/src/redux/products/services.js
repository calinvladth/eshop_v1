export const pagination = (data, limit, page) => {
    let offset = (page - 1) * limit
    return data.slice(offset, offset + limit)
}
