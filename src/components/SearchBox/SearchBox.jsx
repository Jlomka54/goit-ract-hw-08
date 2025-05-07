import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <div className={css.searchBox}>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={(event) => {
          const action = setFilter(event.target.value);
          dispatch(action);
        }}
      />
    </div>
  );
};

export default SearchBox;
