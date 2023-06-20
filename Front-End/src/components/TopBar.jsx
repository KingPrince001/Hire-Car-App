import { AppBar, Toolbar, IconButton,  InputBase, Select, MenuItem } from "@mui/material";
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
        <Toolbar className="tool-bar">
    
          <SearchContainer className="search-container">
            <SearchInput className="search-input" placeholder="Search…" />
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
            <MenuItem value="model">Model</MenuItem>
            <MenuItem value="make">Make</MenuItem>
            <MenuItem value="color">Color</MenuItem>
            <MenuItem value="features">Features</MenuItem>
            <MenuItem value="fuelType">Fuel Type</MenuItem>
            <MenuItem value="transmissionType">Transmission Type</MenuItem>
          </FilterSelect>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopBar;
