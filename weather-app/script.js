const weatherCall = async function (city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=048d6723c33275f406e50d88ab36b84e`
    );

    const data = response.json();

    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

weatherCall("London");
