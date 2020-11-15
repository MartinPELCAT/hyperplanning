import { signedCookies } from "cookie-parser";
import { verify } from "jsonwebtoken";
import { Request } from "express";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { ParsedUrlQuery } from "querystring";
import { client } from "apollo/client";
import {
  GetUserFromTokenDocument,
  GetUserFromTokenQuery,
  GetUserFromTokenQueryVariables,
} from "@generated";

const redirectPath = (
  redirectUrl: string
): { redirect: { destination: string; permanent: boolean } } => {
  return {
    redirect: {
      destination:
        redirectUrl === "/"
          ? "/auth/signin"
          : `/auth/signin?redirect_to=${encodeURIComponent(redirectUrl)}`,
      permanent: false,
    },
  };
};

export const requiredAuthentication = <
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  Q extends ParsedUrlQuery = ParsedUrlQuery
>(
  cb: (
    d: GetUserFromTokenQuery["getUserFromToken"],
    c: GetServerSidePropsContext<Q>
  ) => Promise<GetServerSidePropsResult<P>>
) => {
  return async (context: GetServerSidePropsContext<Q>) => {
    const cookies = signedCookies(
      (context.req as Request).cookies,
      process.env.COOKIE_SECRET
    );
    const token = cookies["_token"];

    if (!token) return redirectPath(context.req.url);

    const decoded = verify(token, process.env.JWT_SECRET);

    if (!decoded) return redirectPath(context.req.url);

    const { data } = await client.query<
      GetUserFromTokenQuery,
      GetUserFromTokenQueryVariables
    >({
      query: GetUserFromTokenDocument,
      variables: { token },
    });

    if (!data.getUserFromToken) return redirectPath(context.req.url);

    return cb(data.getUserFromToken, context);
  };
};
