import { Drawer, DrawerProps, RadioChangeEvent } from "antd";
import { FC, HTMLAttributes, useState } from "react";
import Navbar from "@components/Navbar";

export type SearchLayoutProps = HTMLAttributes<HTMLDivElement> & {};

const SearchLayout: FC<SearchLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <main>{children}</main>
    </div>
  );
};

export default SearchLayout;
