export const fetchData = async (url, body) => {
  try {
    const response = await fetch(url)
    console.log(response);
    if(!response.ok) { throw new Error(`Fetch Call Cannot Be Made`)}
    const data = await response.json()
    return data;
  } catch (error) {
    return error;
  }
}
