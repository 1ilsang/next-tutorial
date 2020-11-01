import { useRouter } from "next/router";

const Path = () => {
  const router = useRouter();

  return (
    <>
      <h1>Path Index QueryId: {router.query.id}</h1>
    </>
  )
};

export default Path;