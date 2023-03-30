import '../Assets/Styles/SearchBar.css';
export default function SearchBar() {
  return (
    <div>
      <div className="searchbar">
        <div className="searchbar_container ">
          <input
            type="text"
            placeholder="กำลังมองหาอะไรอยู่?"
            className="searchbar_input"
          />
          <button type="submit" className="btn-search">
            <i className="bx bx-search btn-search-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
