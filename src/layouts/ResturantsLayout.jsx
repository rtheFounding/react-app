import {
  Outlet,
  useParams
} from "react-router-dom";

const data = {
  "taste-of-italy": {
    "id": 1,
    "name": "Taste of Italys",
    "description": "Authentic Italian restaurant with a wide selection of pasta and pizza dishes.",
    "location": "123 Main Street, Atlanta, USA",
    "rating": 4.6
  },
  "wingstop": {
    "id": 1,
    "name": "Wingstop",
    "description": "Authentic Italian restaurant with a wide selection of pasta and pizza dishes.",
    "location": "123 Main Street, Atlanta, USA",
    "rating": 4.6
  }
}
export default function ResturantLayout() {
  const { reqId } = useParams();

  console.log(reqId)
  return (
    <div className="resturant-layout">
      <h2>{data[reqId].name}</h2>
      <p> {data[reqId].description} </p>
      <p> {data[reqId].location} </p>
      <p> {data[reqId].rating} </p>
      <Outlet />
    </div>
  );
}
