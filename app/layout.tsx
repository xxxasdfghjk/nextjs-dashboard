import "@/app/ui/global.css";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const RootLayout = (props: Props) => {
    return (
        <html lang="en">
            <body>{props.children}</body>
        </html>
    );
};

export default RootLayout;
