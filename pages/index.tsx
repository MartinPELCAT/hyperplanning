import Header from "@components/Header";
import { GetServerSideProps } from "next";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 antialiased font-sans">
      <Header />
      <div></div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = requiredAuthentication(
  async (decoded) => {
    return { props: { authenticatedUser: decoded } };
  }
);
