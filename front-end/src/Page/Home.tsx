import React from "react";
import Header from "component/Header";
import Item from "component/Item";
import { Container } from "@mui/material";
import {
  collection,
  query,
  getDocs,
  collectionGroup,
} from "firebase/firestore";

import CircularProgress from "@mui/material/CircularProgress";
import db from "../firebase/config";

const Home: React.FC = () => {
  const [data, setData] = React.useState<any | null>(null);

  React.useEffect(() => {
    async function getData() {}

    getData();
  }, []);

  return (
    <Container>
      <section>
        <Header></Header>
      </section>
      {/* <section style={{ paddingTop: 100 }}>
        {data !== null && <Item data={data}></Item>}
      </section> */}
    </Container>
  );
};
export default Home;
