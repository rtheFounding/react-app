import { Outlet } from "react-router-dom";

const data = {
  "restaurants": [
      {
          "id": 1,
          "name": "Taste of Italy",
          "description": "Authentic Italian restaurant with a wide selection of pasta and pizza dishes.",
          "location": "123 Main Street, Atlanta, USA",
          "Rating": 4.6
      },
  ]
}

export default function ResturantLayout() {
  return (
    <div className="resturant-layout">
      {JSON.stringify(data)}
      <h2>Resturants</h2>
      <p>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid commodi.
      </p>
      <Outlet />
    </div>
  );
}
