import fetch from 'node-fetch';

async function getGeolocation(ipAddress) {
  try {
    const response = await fetch(`https://ipinfo.info/json/${ipAddress}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

getGeolocation('8.8.8.8')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

getGeolocation('192.168.100.102')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

getGeolocation('10.10.10.100')
    .then(data => console.log(data))
    .catch(error => console.error('Error', error))
