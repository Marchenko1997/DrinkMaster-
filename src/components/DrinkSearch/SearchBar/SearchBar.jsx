import {
  SearchBarStyled,
  Icon,
  StyledSearchButton,
} from "./SearchBar.styled.jsx";

const SearchBar = ({ setDrink }) => {
  const searchByLetter = (event) => {
    event.preventDefault();
    const letterParams = event.currentTraget.elements.searchLetter.value.trim();
    setDrink(letterParams);
  };

  return (
    <SearchBarStyled>
      <div>
        <form className="SearchForm" onSubmit={searchByLetter}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter the text"
            name="searchLetter"
            min="1"
            max="20"
          />
          <StyledSearchButton type="submit">
            <Icon />
          </StyledSearchButton>
        </form>
      </div>
    </SearchBarStyled>
  );
};

export default SearchBar;
