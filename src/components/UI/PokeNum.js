const PokeNum = (props) => {
  return (
    <div className="square-button-left">
      <input
        id="nb"
        type="text"
        name="howmuch"
        value={props.pokeNum}
        onChange={props.onSetPokeNum}
      />
    </div>
  );
};

export default PokeNum;
