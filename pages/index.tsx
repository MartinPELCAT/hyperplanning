import { Calendar } from "@components/calendar";
import { NavBar } from "@components/navbar/NavBar";
import { WidgetCalendar } from "@components/widget-calendar";
import { CalendarContextProvider } from "contexts/CalendarContext";
import { GetServerSideProps } from "next";
import { requiredAuthentication } from "pages-middleware/requiredAuthentication";
import { WidgetView } from "@components/widget-view";
import { WidgetDateNavigation } from "@components/widget-date-navigation";
import Head from "next/head";

export default function Home() {
  return (
    <CalendarContextProvider>
      <Head>
        <title>Calendar</title>
      </Head>
      <div className="min-h-screen bg-dark-blue antialiased font-poppins flex">
        <NavBar />
        <div className="flex-1 flex flex-col bg-light-gray my-4 mr-4 rounded-3xl py-4 pr-4 pl-8">
          <div className="flex">
            <div className="flex-1 ml-8 font-bold text-5xl">Octobre</div>
            <div className="my-auto flex space-x-20 mx-8">
              <WidgetView />
              <WidgetDateNavigation />
            </div>
          </div>
          <div className="w-full flex h-full">
            <div className="flex flex-1">
              <Calendar />
            </div>
            <div className="w-64 mr-4 space-y-4">
              <WidgetCalendar />
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
