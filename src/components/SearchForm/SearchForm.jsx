export const SearchForm = ({onSubmit}) => {
    return(
        <div>
            <form onSubmit={
                evt => {
                evt.preventDefault();
                onSubmit(evt.target.elements.query.value)
                evt.target.reset();
            }}>
                <button type ="submit">Search</button>
                <input type="text" name = "query"/>
          </form>
        </div>
    )
}