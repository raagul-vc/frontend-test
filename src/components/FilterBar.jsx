import {
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const FilterBar = ({ type, setType }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
        fullWidth
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>
    </Box>
  );
};

export default FilterBar;