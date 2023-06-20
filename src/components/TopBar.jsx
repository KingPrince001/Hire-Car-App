import { AppBar, Toolbar, IconButton, Typography, InputBase, Select, MenuItem } from "@mui/material";
import { styled, alpha } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import './TopBar.css';

const theme = createTheme({
  palette: {
    common: {
      white: "#fff",
    },
  },
});

const TopBar = () => {
  const SearchContainer = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  
   
  }));

  const SearchInput = styled(InputBase)(({ theme }) => ({
    color: "inherit",
   
    
  }));

  const FilterSelect = styled(Select)(({ theme }) => ({
    color: "inherit",
 
  }));

  const handleFilterChange = (event) => {
    console.log("Filter changed:", event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className="AppBar" position="static" >
        <Toolbar>
          <SearchContainer>
            <SearchInput placeholder="Search…" />
            <IconButton sx={{ p: 1 }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </SearchContainer>
          <FilterSelect className="filter"
            value=""
            onChange={handleFilterChange}
            displayEmpty
            inputProps={{ "aria-label": "filter" }}
          >
            <MenuItem value="" disabled>
              Filter by
            </MenuItem>
            <MenuItem value="option1">Model</MenuItem>
            <MenuItem value="option2">Make</MenuItem>
            <MenuItem value="option3">Color</MenuItem>
            <MenuItem value="option1">Features</MenuItem>
            <MenuItem value="option2">Fuel Type</MenuItem>
            <MenuItem value="option3">Transmission Type</MenuItem>
          </FilterSelect>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopBar;
