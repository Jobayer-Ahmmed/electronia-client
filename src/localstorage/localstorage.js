
const getLocalstorageData = () => {
    const data = localStorage.getItem("Cart")
    if (data) {
        const jsonData = JSON.parse(data)
        return jsonData
    }
    return []
}


const setLocalstorageData = (cartId,product_name, image, price ) => {
    console.log("I am in set Local storage")
    const getData = getLocalstorageData()
    getData.push({cartId,product_name, image, price})
    const strData = JSON.stringify(getData)
    localStorage.setItem("Cart", strData)
}

const removeLocalstorageData = (cartId) => {
    console.log(cartId)
    let getData = getLocalstorageData()
    const updatedData = getData.filter(data => data.cartId != cartId)
    console.log(updatedData)

    getData = []
    getData.push(...updatedData)
    const str = JSON.stringify(getData)
    localStorage.setItem("Cart", str)

}


export { getLocalstorageData, setLocalstorageData, removeLocalstorageData }



