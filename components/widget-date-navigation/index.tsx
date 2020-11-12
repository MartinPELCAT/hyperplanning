import { ChevronLeftIcon } from "@components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@components/icons/ChevronRightIcon";

export const WidgetDateNavigation = () => {
  return (
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
  );
};
