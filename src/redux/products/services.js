export const pagination = (data, limit, page) => {
    let newData = []
    let offset = (page - 1) * limit

    data.forEach((o, i) => {
        if (i >= offset && i < offset + limit) newData.push(o)
    })

    return newData
}