import { NavBar } from "@components/navbar/NavBar";
import { GetServerSideProps } from "next";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue antialiased font-sans flex">
      <NavBar />
      <div className="flex-1 bg-light-gray my-2 mr-2 rounded-3xl"></div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = requiredAuthentication(
  async (decoded) => {
    return { props: { authenticatedUser: decoded } };
  }
);
