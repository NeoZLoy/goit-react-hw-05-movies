import { StyledForm, StyledWrapper } from "./SearchForm.styled";

export const SearchForm = ({onSubmit}) => {
    return(
        <StyledWrapper>
            <StyledForm onSubmit={
                evt => {
                evt.preventDefault();
                onSubmit(evt.target.elements.query.value)
                evt.target.reset();
            }}>
                <input type="text" name = "query"/>
                <button type ="submit">Search</button>
                
          </StyledForm>
        </StyledWrapper>
    )
}