import { useState } from "react";

function apiService() {
  // const [data, setData] = useState();

  async function getMenu() {
    let response = await fetch("http://localhost:3000/menu");
    let data = await response.json();

    return { data };
  }
  return { getMenu };
}

export default apiService;
