import '../styles/globals.css'
import type {Metadata} from "next";
import {SWRProvider} from "@/app/SWRProvider";
import Footer from "@/components/footer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "인사이트 잡",
  description: "Generated by create next app",
  keywords: "기업정보, 기업, 인사이트, 연봉정보",
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="ko" data-theme={"light"}>
      <body >
      <div className="w-full max-w-screen-2xl  mx-auto">
        <SWRProvider>
          {children}
        </SWRProvider>
      </div>
      </body>
      <hr />
      <Footer />
      </html>
  )
}