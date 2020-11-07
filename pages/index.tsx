import { verify } from "jsonwebtoken";
import { GetServerSideProps } from "next";
import { Request } from "express";
import { signedCookies } from "cookie-parser";

export default function Home(props) {
  console.log(props);

  return <div className="text-xl">FirstName :{props.firstName}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = signedCookies(
    (req as Request).cookies,
    process.env.COOKIE_SECRET
  );
  const decoded = !!cookies["_token"]
    ? (verify(
        cookies["_token"] ? cookies["_token"] : "",
        process.env.JWT_SECRET
      ) as object)
    : null;

  if (!decoded)
    return { redirect: { destination: "/auth/signin", permanent: false } };

  return { props: { ...decoded } };
};
