class Fetch {
  async getCurrent(input) {
    const myKey = "adc517b5261bcec6a0a63d11b12ce943";
   
    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}