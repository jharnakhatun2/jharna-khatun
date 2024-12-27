export const searchFiltered = (items, query, keys) =>{
    if(!query) return items;
    const lowerCaseQuery =  query.toLowerCase();

    return items.filter((item)=>
        keys.some((key)=> item[key]?.toString().toLowerCase().includes(lowerCaseQuery))
)
}