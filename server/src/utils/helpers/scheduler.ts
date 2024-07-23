import { fetchCurrentDataFromApi } from "../../services/coin-service";

const startScheduler = () => {
    console.log('Scheduler started');
    setInterval(async () => {
      try {
        console.log('Fetching current data from API...');
        await fetchCurrentDataFromApi();
        console.log('Data fetched and saved successfully.');
      } catch (error) {
        console.error('Error fetching data from API:', error);
      }
    }, 30000); 
  };

export default startScheduler