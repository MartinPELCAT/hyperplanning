import { NavBar } from "@components/navbar/NavBar";
import { GetServerSideProps } from "next";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue antialiased font-poppins flex">
      <NavBar />
      <div className="flex-1 flex flex-col bg-light-gray my-2 mr-2 rounded-3xl p-4 text-4xl">
        <div className="w-full flex bg-blue-300">Top side bar</div>
        <div className="w-full flex h-full bg-red-300">
          <div className="flex flex-1 bg-teal-300">Calendar</div>
          <div className="w-64 bg-orange-400">right column</div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = requiredAuthentication(
  async (decoded) => {
    return { props: { authenticatedUser: decoded } };
  }
);
