import prisma from "@/lib/prisma";
import "@/app/globals.css";
async function getposts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}
export default async function Postpage() {
  const posts = await getposts();
  console.log({ posts });

  return (
    <div>
      <h1> postpage</h1>
      {posts.map((post) => (
        <li key={post.id}> {post.title}</li>
      ))}
    </div>
  );
}
