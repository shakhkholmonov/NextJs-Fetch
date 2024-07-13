export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  const paths = comments.map((comments) => ({
    params: { id: `${comments.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`);
  const comments = await res.json();

  return {
    props: {
      comments,
    },
  };
}

export default function Comments({ comments }) {
  return (
    <div>
      <h1>{comments.email}</h1>
      <p>{comments.body}</p>
    </div>
  );
}
