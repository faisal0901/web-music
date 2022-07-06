import React from "react";
import Header from "component/Header";
import Item from "component/Item";
import { Container } from "@mui/material";
import axios from "axios";
const Home: React.FC = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    axios.get("http://localhost:8000/api/home").then((resp) => {
      setData(resp.data.category);
    });
  }, []);

  return (
    <Container>
      <section>
        <Header></Header>
      </section>
      <section style={{ paddingTop: 100 }}>
        {data !== null && <Item data={data}></Item>}
      </section>
    </Container>
  );
};
export default Home;
