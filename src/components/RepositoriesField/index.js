import React, { useState, useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FieldSection, Label, SelectFieldWrapper } from './styles';

function RepositoriesField() {
  // Local states and references initialization
  const [cursor, setCursor] = useState(0);
  const [cities, setCities] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const listRef = useRef(null);
  const itemsRef = useRef([]);

  // Loading cities
  useEffect(() => {
    // setCities(canadianCities);
  }, []);

  useEffect(() => {
    // Update references on suggestions change
    itemsRef.current = itemsRef.current.slice(0, suggestions.length);
    setCursor(0);
  }, [suggestions]);

  function handleTextChange(event) {
    const { value } = event.target;
    let options = [];

    if (value.length > 2) {
      // Filtering cities
      const regex = new RegExp(`${value}`, 'i');
      options = cities.sort().filter(city => regex.test(city));
    }

    setSuggestions(options);
    setText(value);
  }

  function handleCitySelection(city) {
    setText(city);
    setSuggestions([]);
    setCursor(0);
  }

  function handleKeyDown(event) {
    // arrow up/down button should select next/previous list element
    if (event.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
      listRef.current.scrollTop = 0;
      listRef.current.scrollTop =
        itemsRef.current[cursor].offsetTop - listRef.current.clientHeight;
    } else if (event.keyCode === 40 && cursor < suggestions.length - 1) {
      setCursor(cursor + 1);
      listRef.current.scrollTop = 0;
      listRef.current.scrollTop = itemsRef.current[cursor].offsetTop;
    }

    if (event.keyCode === 13 && itemsRef.current.length > 0) {
      itemsRef.current[cursor].click();
    }
  }

  function handleClear() {
    setText('');
    setSuggestions([]);
  }

  return (
    <SelectFieldWrapper>
      <FieldSection>
        <input
          className="input"
          onKeyDown={handleKeyDown}
          type="text"
          value={text}
          onChange={handleTextChange}
          required
        />
        <Label htmlFor="name">
          <span>Repository</span>
        </Label>
        <button type="button" onClick={handleClear} disabled={!text.length}>
          X
        </button>
      </FieldSection>
      <ul ref={listRef} emptyList={!(suggestions.length > 0)}>
        {suggestions.map((city, index) => (
          <li
            active={cursor === index}
            ref={el => (itemsRef.current[index] = el)}
            onClick={() => handleCitySelection(city)}
            key={index}
          >
            {city}
          </li>
        ))}
      </ul>
    </SelectFieldWrapper>
  );
}

export default RepositoriesField;
