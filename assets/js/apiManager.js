export async function getBurgers() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd5f610a8f2msh3f9cd0c11f425a1p1da933jsn7a90aca1275b',
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

