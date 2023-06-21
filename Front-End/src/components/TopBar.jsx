import { AppBar, Toolbar, IconButton,  InputBase, Select, MenuItem, Box } from "@mui/material";
import { styled, alpha } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import BusinessLogo from '../assets/car-logo.jpg';


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
          <Box style={{display:'flex'}}>
           <Box style={{ width: '3vw', height: '6vh' }}>
            <img src={BusinessLogo} style={{height:'100%', width:'100%', borderRadius:'50%'}} alt="Business Logo" />
           </Box>
          <SearchContainer className="search-container">
            <SearchInput className="search-input" placeholder="Search…" />
            <IconButton sx={{ p: 1 }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </SearchContainer>
          </Box>
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
