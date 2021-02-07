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
import { deleteFromCart } from "../../../common/deleteFromCartApiCall";
import { useHistory } from "react-router-dom";

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

interface IBook {
  _id: string;
  title: string;
}

function CartPage() {
  const classes = useStyles();
  const [data, dataSet] = useState([]);
  const history = useHistory();

  async function deleteBook(bookID: string) {
    const response = await deleteFromCart(bookID);
    console.log(response, "resres");
    if (response) {
      const updatedUserCart = data.filter((book: IBook) => {
        return book._id !== bookID;
      });
      dataSet(updatedUserCart);
    }
  }

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
          <Card key={book._id} className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                {book.title}
              </Typography>
              <Button
                onClick={() => {
                  deleteBook(book._id);
                }}
                size="large"
                color="secondary"
              >
                Delete from Cart
              </Button>
            </CardContent>
          </Card>
        );
      })}
      <Button
        onClick={() => {
          history.push("/");
        }}
        size="large"
        color="primary"
        style={{ marginTop: "45px", marginBottom: "45px" }}
      >
        Go to Home Page
      </Button>

      <AmplifySignOut />
    </Container>
  );
}

export default withAuthenticator(CartPage);
