import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { CardActionArea, Typography } from "@mui/material";
import img1 from "./../assets/imgs/1.jpg";
import img2 from "./../assets/imgs/2.jpg";
import img3 from "./../assets/imgs/3.jpg";
import img4 from "./../assets/imgs/4.jpg";
import img5 from "./../assets/imgs/5.jpg";

function PrayCard({ time, city }) {
  const prays = [
    {
      Name: "الفجر",
      city: city.displayName,
      time: time.Fajr,
      img: img1,
    },
    {
      Name: "الظهر",
      city: city.displayName,
      img: img2,
      time: time.Dhuhr,
    },
    {
      Name: "العصر",
      city: city.displayName,
      img: img3,
      time: time.Asr,
    },
    {
      Name: "المغرب",
      city: city.displayName,
      img: img4,
      time: time.Maghrib,
    },
    {
      Name: "العشاء",
      city: city.displayName,
      img: img5,
      time: time.Isha,
    },
  ];
  return (
    <>
      {prays.map((pray, index) => {
        return (
          <Card key={pray.Name} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={pray.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pray.Name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pray.time}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pray.city}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}

export default PrayCard;
