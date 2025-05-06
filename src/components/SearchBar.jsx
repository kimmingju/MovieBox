import React from 'react';
import { genreMap } from '../genreMap';
import '../index.css'

function SearchBar({search,onSearchChange,onKeyDown,onSearch,onReset,selectedGenre,onGenreChange}) {
  return (
    <div className="search-container">
        <input
          type="text"
          placeholder="영화 제목 검색"
          value={search}
          onChange={onSearchChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSearch}>검색</button>
        <button className="reset-button" onClick={onReset}>뒤로가기</button>

        <select
          className="genre-dropdown"
          value={selectedGenre}
          onChange={onGenreChange}
        >
          <option value="">장르 선택</option>
          {Object.entries(genreMap).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
  );
}

export default SearchBar;