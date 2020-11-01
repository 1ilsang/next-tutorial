import { useRouter } from "next/router";

const PathQuery = () => {
  const router = useRouter();

  return (
    <>
      <div>Path QueryId: {router.query.id}</div>
    </>
  )
}

export default PathQuery;