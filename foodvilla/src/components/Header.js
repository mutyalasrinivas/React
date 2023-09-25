
const Logo=()=>{
  return(
    <>
    <a href="/"><img alt="logo" className="logo" src="https://content.jdmagicbox.com/comp/ujjain/i2/9999px734.x734.220902165921.e9i2/catalogue/food-villa-freeganj-ujjain-ujjain-fast-food-j7m5i7idmz.jpg"/></a>
    </>
  )
}

const bgStyle={
  backgroundColor:"#bff1ff"
}

const Header=()=>{
    return(<>
       
      <div className="header" style={bgStyle}>
      <Logo/> 
      <div className="nav"  >
        <ul >
          <li><a href="/">Home</a></li>
          <li >About</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>
    </div></>)
  }
  
  export default Header;