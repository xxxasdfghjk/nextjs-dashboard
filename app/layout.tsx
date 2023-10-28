import "@/app/ui/global.css";
import { ReactNode } from "react";
import { inter } from "./ui/fonts";

type Props = {
    children: ReactNode;
};

const RootLayout = (props: Props) => {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{props.children}</body>
        </html>
    );
};

export default RootLayout;
