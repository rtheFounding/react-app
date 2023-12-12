import { Outlet } from "react-router-dom";

// const data = 
//   {
//     "id": 1,
//     "name": "Taste of Italy",
//     "description": "Authentic Italian restaurant with a wide selection of pasta and pizza dishes.",
//     "location": "123 Main Street, Atlanta, USA",
//     "rating": 4.6
//   }

export default function ResturantLayout({data}) {
  return (
    <div className="resturant-layout">
      <h2>{data.name}</h2>
      <p> {data.description} </p>
      <p> {data.location} </p>
      <p> {data.rating} </p>
      <Outlet />
    </div>
  );
}