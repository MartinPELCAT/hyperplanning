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

const redirectPath = {
  redirect: { destination: "/auth/signin", permanent: false },
};

export const requiredAuthentication = <
  P extends { [key: string]: any } = { [key: string]: any },
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

    if (!!!token) return redirectPath;

    const decoded = !!token
      ? verify(token ? token : "", process.env.JWT_SECRET)
      : null;

    if (!decoded) return redirectPath;

    const { data } = await client.query<
      GetUserFromTokenQuery,
      GetUserFromTokenQueryVariables
    >({
      query: GetUserFromTokenDocument,
      variables: { token },
    });

    if (!!!data.getUserFromToken) return redirectPath;

    return cb(data.getUserFromToken, context);
  };
};
