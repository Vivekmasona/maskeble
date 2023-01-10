import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);
      setSearch('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        type="search"
        className="search-bar"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <IconButton>
        <Search
          type="submit"
          sx={{ p: '10px', color: 'red' }}
          aria-label="search"
        />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
