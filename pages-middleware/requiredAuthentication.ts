import { signedCookies } from "cookie-parser";
import { verify } from "jsonwebtoken";
import { Request } from "express";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
// import { GetServerSidePropsResult } from "next";

export const requiredAuthentication = (
  cb: (
    d: object,
    c: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<any>>
) => {
  return async (context: GetServerSidePropsContext) => {
    const cookies = signedCookies(
      (context.req as Request).cookies,
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

    return cb(decoded, context);
  };
};
