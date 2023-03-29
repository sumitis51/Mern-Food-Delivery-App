import Footer from "./Footer";
import NavBar from "./Navbar";

 const WithLayout=(Component)=>{
    return (props)=>{
    return(
        <>
        <NavBar/>
        <Component {...props}/>
        <Footer/>
        </>
    )
    }
}

export default WithLayout;