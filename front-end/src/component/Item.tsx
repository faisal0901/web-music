import React from "react";

import Card from "@mui/material/Card";
import { Container } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
type ItemProps = {
  data?:
    | {
        id: string;
        item: {
          thumbnail: string;
          id: string;
          description: string;
          name: string;
        }[];
      }[]
    | null
    | undefined;
};
const Item: React.FC<ItemProps> = (props: ItemProps) => {
  return (
    <div>
      {props.data &&
        props.data.map((value: any, index: any) => {
          return (
            <>
              <Container maxWidth="xl" key={`card-${index}`}>
                <div>{value?.name ?? "null"}</div>
                <div style={{ display: "flex", paddingTop: 15 }}>
                  {value.item.map((val: any, num: any) => {
                    return (
                      <Card sx={{ maxWidth: 345 }} style={{ marginRight: 20 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image="/static/images/cards/contemplative-reptile.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    );
                  })}
                </div>
              </Container>
            </>
          );
        })}
    </div>
  );
};
export default Item;
