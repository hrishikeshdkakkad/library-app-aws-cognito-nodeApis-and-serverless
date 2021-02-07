import React from "react";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);

interface IProps {
  cart_item: number;
}

const CustomizedBadges: React.FC<IProps> = (props: IProps) => {
  const history = useHistory();
  return (
    <IconButton onClick={() => history.push("/cart")} aria-label="cart">
      <StyledBadge badgeContent={props.cart_item} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default CustomizedBadges;
