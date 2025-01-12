export default async function getAllPosts() {
    const result = await fetch("https://jsonplaceholder.org/posts?_limit=10")


    return result.json()
}