import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await res.json();
    return { props: { comments } };
  } catch (e) {
    throw e;
  }
}

export default function PostsPage({ comments }) {
  return (
    <>
      <header style={{ background: "#fff", color: "#000", display: "flex", justifyContent: "center", padding: "10px" }}>
        <Link href="/" style={{ marginRight: "10px", textDecoration: "none", color: "#000" }}>
          Home
        </Link>
        <Link href="/comments" style={{ marginRight: "10px", textDecoration: "none", color: "#000" }}>
          Сomments
        </Link>
        <Link href="/courses" style={{ textDecoration: "none", color: "#000" }}>
          Courses
        </Link>
      </header>
      <div style={{ padding: "20px" }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <Link href={`/comment/${comment.id}`} passHref>
              <p style={{ margin: "0", fontSize: "18px" }}>{comment.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
