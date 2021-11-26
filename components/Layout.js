import Head from "next/head";
import MetaTags from "./Metatags";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
    return (
      
      <div>
        <MetaTags title={title} keywords={keywords} description={description} />
  
        <Header />
        <main className="container mx-auto my-7 md:px-3">{children}</main>
        {/* <Footer /> */}
      </div>
     
    );
  }
  
  Layout.defaultProps = {
    title: "Enter Your Default App Name",
    keywords: "Default, keywords, keyword",
    description:
      "App Default Description.",
  };