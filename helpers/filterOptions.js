// Filter the options when typed
const filterOptions = (option, inputValue) => {
    return option.value.toLowerCase().includes(inputValue.toLowerCase());
}
export default filterOptions;