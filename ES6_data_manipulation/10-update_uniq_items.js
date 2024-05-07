// Function updateUniqueItems, returns an updated map for all items with init quantity: 1.
export default function updateUniqueItems(itemsMap) {
    if (!(itemsMap instanceof Map)) {
        throw new Error("Cannot process");
    }
    itemsMap.forEach((quantity, itemName) => {
        if (quantity === 1) {
            itemsMap.set(itemName, 100);
        }
    });
    return itemsMap;
}
