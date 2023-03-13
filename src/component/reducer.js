import NewStudent from "./NewStudent";
import Students from "./pages/Students";
import UpdateStudent from "./UpdateStudent";

const reducer = (state = [], action) => {
  switch (action) {
    case NewStudent:
      return <NewStudent />;
    case UpdateStudent:
      return <UpdateStudent />;
    default:
      return <Students />;
  }
};

export default reducer;
