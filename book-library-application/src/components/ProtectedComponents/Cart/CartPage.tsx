import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { BASE_URL } from "../../../common/constants";
import { sessionDetails } from "../../../common/isAuthenticated";

const useStyles = makeStyles({
  root: {
    minWidth: 75,
  },
  bullet: {
    display: "inline-block",
    margin: "0 3px",
    transform: "scale(0.5)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function CartPage() {
  const classes = useStyles();
  const [data, dataSet] = useState([]);

  useEffect(() => {
    async function getUserCart() {
      const token = await sessionDetails();
      let config = {
        headers: {
          token: token,
        },
      };
      let response = await axios.get(
        `${BASE_URL()}/application-users/users/cart`,
        config
      );
      console.log(response.data.items);
      dataSet(response.data.items);
    }

    getUserCart();
  }, []);

  return (
    <Container>
      {data.map((book: any) => {
        return (
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                {book.title}
              </Typography>
              <Button size="large" color="secondary">
                Delete from Cart
              </Button>
            </CardContent>
          </Card>
        );
      })}
      ;
    </Container>
  );
}

export default withAuthenticator(CartPage);
