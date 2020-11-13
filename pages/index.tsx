import { Calendar } from "@components/calendar";
import { NavBar } from "@components/navbar/NavBar";
import { WidgetCalendar } from "@components/widget-calendar";
import { CalendarContextProvider } from "contexts/CalendarContext";
import { GetServerSideProps } from "next";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";
import { WidgetView } from "@components/widget-view";
import { WidgetDateNavigation } from "@components/widget-date-navigation";
import Head from "next/head";
import { WidgetMonth } from "@components/widget-month";

export default function Home() {
  return (
    <CalendarContextProvider>
      <Head>
        <title>Calendar</title>
      </Head>
      <div className="min-h-screen max-h-screen overflow-hidden bg-dark-blue antialiased font-poppins flex relative">
        <NavBar />
        <div className="flex-1 flex flex-col bg-light-gray my-4 mr-4 rounded-3xl py-4 pr-4 pl-8 overflow-auto box-content space-y-3">
          <div className="flex">
            <WidgetMonth />
            <div className="my-auto mr-4 flex space-x-20">
              <WidgetView />
              <WidgetDateNavigation />
            </div>
          </div>
          <div className="w-full flex overflow-visible">
            <div className="flex flex-1 overflow-visible pr-4">
              <Calendar />
            </div>
            <div className="w-64 mr-4 space-y-4 my-4">
              <WidgetCalendar />
            </div>
          </div>
        </div>
      </div>
    </CalendarContextProvider>
  );
}

export const getServerSideProps: GetServerSideProps = requiredAuthentication(
  async (decoded) => {
    return {
      props: {
        authenticatedUser: decoded,
      },
    };
  }
);
