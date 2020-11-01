import { useRouter } from "next/router";

const MaskQuery = () => {
  const router = useRouter();
  
  return (
    <>
      <h1>MaskQuery: {router.query.id}</h1>
    </>
  )
};

export default MaskQuery;