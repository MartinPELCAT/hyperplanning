import { NavBar as Header } from "@components/navbar/NavBar";
import { GetServerSideProps } from "next";
import React from "react";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";

export default function Contact(props: any) {
  return (
    <div>
      <Header />
      {JSON.stringify(props)}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  { propTest: string },
  { urlTest: string }
> = requiredAuthentication(async (user) => {
  return { props: { ...user, propTest: "ddsdad" } };
});
