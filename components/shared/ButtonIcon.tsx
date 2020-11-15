import { FC } from "react";

type ButtonIconProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "role"
>;

export const ButtonIcon: FC<ButtonIconProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} role="button">
      {children}
    </div>
  );
};
