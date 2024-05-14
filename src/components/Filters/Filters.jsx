import { useDispatch, useSelector } from "react-redux";
import { selectPizzaTypeFilter } from "../../redux/pizzas/selectors";
import Select from "react-select";
import { setTypeFilterValue } from "../../redux/pizzas/pizzasSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const chosenType = useSelector(selectPizzaTypeFilter);
  const options = [
    { label: "vegeterian", value: "vegeterian" },
    { label: "with meat", value: "with meat" },
  ];
  return (
    <Select
      placeholder="Choose type"
      value={chosenType}
      onChange={(e) => {
        dispatch(setTypeFilterValue(e.value));
      }}
      options={options}
      //   styles={style}
      className="filter-select"
    />
  );
};

export default Filters;
