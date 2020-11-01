import Link from "next/link";

const link = () => {
  const id = 'test';

  return (
    <>
    <div>
      <h1>Link Test</h1>
      <Link href={`/mask?id=${id}`} as={`/mask/${id}`}>Dynamic Link: as '/mask/test' to '/mask?id=test'</Link>
      <br />
      <Link href={`/mask?id=${id}`}>just href</Link>
    </div>
    <div>
      <Link href={`/post/solved?id=${id}`} as={`/post/solved/${id}`}>Dynamic Link: as '/mask/test' to '/mask?id=test'</Link>
      <br />
      <Link href={`/post/solved?id=${id}`}>Post href</Link>
    </div>
    </>
  )
}

export default link;
