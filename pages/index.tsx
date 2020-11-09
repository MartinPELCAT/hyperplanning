import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";
import { NavBar } from "@components/navbar/NavBar";
import { GetServerSideProps } from "next";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-blue antialiased font-poppins flex">
      <NavBar />
      <div className="flex-1 flex flex-col bg-light-gray my-4 mr-4 rounded-3xl py-4 pr-4 pl-8">
        <div className="flex">
          <div className="flex-1 ml-8 font-bold text-5xl">Octobre</div>
          <div className="my-auto flex space-x-20 mr-8">
            <div className="flex bg-white rounded-full font-bold shadow-md p-1/2">
              <div className="flex-1 w-24 text-center bg-active-icon rounded-full text-white py-1">
                Day
              </div>
              <div className="flex-1 w-24 text-center rounded-full py-1">
                Week
              </div>
            </div>
            <div className="my-auto flex space-x-1">
              <div className="my-auto">
                <ChevronLeftIcon />
              </div>
              <div className="bg-active-icon text-white rounded-full font-bold py-1 px-8 shadow-md">
                Today
              </div>
              <div className="my-auto">
                <ChevronRightIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex h-full">
          <div className="flex flex-1">Calendar</div>
          <div className="w-64">right column</div>
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
