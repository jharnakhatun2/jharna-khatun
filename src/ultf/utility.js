export const sortedPosts = (array) =>{
    return [...array].sort((a, b) => new Date(b.date) - new Date(a.date))
}