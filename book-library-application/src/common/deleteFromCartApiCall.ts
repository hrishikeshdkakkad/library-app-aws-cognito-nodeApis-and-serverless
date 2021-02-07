import { BASE_URL, NO_USER_SESSION } from "./constants";
import { sessionDetails } from "./isAuthenticated";

export const deleteFromCart = async (bookId: string) => {
  const token = await sessionDetails();
  console.log(token, "token");
  if (token !== NO_USER_SESSION) {
    var formdata = new FormData();
    formdata.append("bookID", bookId);
    try {
      const config = {
        method: "PATCH",
        headers: {
          Accept: "*/*",
          token: token,
        },
        body: formdata,
      };
      const response = await fetch(
        `${BASE_URL()}/library-management/books/remove-from-cart`,
        config
      );
      const json = await response.json();
      if (response.ok) {
        //return json
        return response;
      } else {
        //
      }
    } catch (error) {
      //
    }
  }
};
