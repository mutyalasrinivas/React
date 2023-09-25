
import{IMG_CDN_URL} from "../constants" 
const RestarauntCard=({name,cloudinaryImageId,cuisines,minDeliveryTime,avgRating})=>{
    return(
        <>
        <div className="card">
            <img alt="card" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h5>{cuisines.join(",")}</h5>
            <h4>minDeliveryTime:{minDeliveryTime}</h4>
            <h5>{avgRating}. stars</h5>
        </div>
        </>
    )
}
 
export default RestarauntCard;