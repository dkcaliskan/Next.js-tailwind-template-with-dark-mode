import Head from "next/head";

export default function MetaTags({title, keywords, description, image}) {
    return (
        <Head>
            <title>{title}</title>  
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />

            <meta name="twitter:card" content="summary" /> 
            <meta name="twitter:site" content="@dotju" />           
            <meta name="twitter:title" content={title} />   
            <meta name="twitter:description" content={description} />   
            <meta name="twitter:image" content={image} />   

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}
