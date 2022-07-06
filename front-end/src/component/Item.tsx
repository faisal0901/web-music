import React from "react";

import Card from "@mui/material/Card";
import { Container } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
  console.log(props.data);
  return (
    <div>
      {props.data &&
        props.data.map((value: any, index: any) => {
          return (
            <>
              <Container maxWidth="xl" key={`card-${index}`}>
                <div>{value?.name ?? "null"}</div>
                <div style={{ display: "flex", paddingTop: 15 }}>
                  {value.itemId.map((val: any, num: any) => {
                    return (
                      <Card sx={{ maxWidth: 345 }} style={{ marginRight: 20 }}>
                        <CardMedia
                          component="img"
                          height="160"
                          image={val.thumbnail}
                          alt={val.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {val.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {val.description}
                          </Typography>
                        </CardContent>
                        <CardActions></CardActions>
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
