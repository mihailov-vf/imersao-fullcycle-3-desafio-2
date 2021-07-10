import axios from "axios";
import { useEffect, useState } from "react";

import "./List.css"

function showPosition(position) {
  return `lat: ${position.lat}, lon: ${position.lon}`;
}

function List() {
  const [routes, setRoutes] = useState([{ title: "teste", startPosition: { lat: 2.054589670495, lon: 10.983798457 }, endPosition: { lat: 2.054589673495, lon: 10.983778457 } }]);

  useEffect(function () {
    (async () => {
      const http = axios.create({
        baseURL: 'http://host.docker.internal:3000'
      })
      const res = await http.get('routes');
      const routes = res.data;
      setRoutes(routes);
    })();
  }, []);

  return (
    <ul>
      {routes.map(route => (<li className="route" key={route.title}>
        <span>{route.title}</span>
        <ul>
          <li>{showPosition(route.startPosition)}</li>
          <li>{showPosition(route.endPosition)}</li>
        </ul>
      </li>))}
    </ul>
  );
}

export default List;