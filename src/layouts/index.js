import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

// favicon
import favicon from "../icons/favicon.ico"

// styles
import "./index.scss"
import "../scss/main.scss"


const IndexLayout = ({children}) => {

    return (

        <div>

            <Helmet>
                <meta name="description" content="Sample"/>
                <meta name="keywords" content="sample, something"/>
                <link rel="icon" type="image/png" href={favicon}/>
                <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script>
                    {`(adsbygoogle = window.adsbygoogle || []).push({
                        google_ad_client: "ca-pub-6761407051192110",
                        enable_page_level_ads: true,
                    })`}
                </script>
            </Helmet>

            <div className="container">

                <Navigation/>

                <div className="content">
                    {children()}
                </div>

                <Footer/>

            </div>

        </div>

    )
}


IndexLayout.propTypes = {
    children: PropTypes.func,
}


// exports
export default IndexLayout
