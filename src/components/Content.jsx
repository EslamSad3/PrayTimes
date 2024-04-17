import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import PrayCard from "./PrayCard";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import axios from "axios";
function Content() {
  const [city, setcity] = useState({
    displayName: "مكه",
    apiName: "makkah",
  });
  const [country, setcountry] = useState("SA");
  const [time, setTime] = useState("");
  const [datestring, setdatestring] = useState("");

  function getTodayDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let hh = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    setdatestring(`${yyyy}/${mm}/${dd} | ${hh}:${min}:${sec}`);
  }

  const cities = [
    {
      displayName: "مكه",
      apiName: "makkah",
      country: "SA",
    },
    {
      displayName: "المدينه",
      apiName: "Madinah",
      country: "SA",
    },
    {
      displayName: "القاهره",
      apiName: "cairo",
      country: "EG",
    },
  ];

  const handleChange = (event) => {
    const cityObj = cities.find((city) => {
      return city.apiName === event.target.value;
    });
    setcity(cityObj);
    setcountry(event.target.counrty);
  };

  async function prayTime() {
    const respone = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=${city.apiName}&country=${country}`
    );
    console.log(respone);
    setTime(respone?.data?.data?.timings);
    // setDate(respone?.data?.data?.date?.readable);
  }
  useEffect(() => {
    prayTime();
  }, [city.apiName]);

  useEffect(() => {
    getTodayDate();
    let timer = setInterval(() => {
      getTodayDate();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container sx={{ height: "100vh", p: "5rem" }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Box>
            <Typography variant="p"> {datestring}</Typography>
            <Typography variant="h3">{city.displayName}</Typography>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box>
            <Typography variant="p"> متبقى حتى صلاة العصر : </Typography>
            <Typography variant="h3"> الوقت </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ opacity: "0.5" }} />
      <Stack direction={"row"} justifyContent={"space-between"} sx={{ mt: 5 }}>
        <PrayCard city={city} time={time} />
      </Stack>
      <Box textAlign={"center"}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={city.apiName}
          label={city.displayName}
          onChange={handleChange}
          sx={{
            width: "20%",
            mt: 5,
            "&.MuiSelect-select": {
              padding: 1,
            },
          }}
        >
          {cities.map((city, ix) => {
            return (
              <MenuItem key={ix} counrty={city.country} value={city.apiName}>
                {city.displayName}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Container>
  );
}

export default Content;
