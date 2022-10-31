export async function getBurgers() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8697a20562msh46d7a6c2845ddaep1425bajsncd6637e6f5b9',
      'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
    }
  };

  let data;

  try {
    const res = await fetch('https://burgers-hub.p.rapidapi.com/burgers', options);
    data = await res.json();
  } catch (err) {
    console.log("Failed to get burgers: ", err);
  }

  return data;
}

