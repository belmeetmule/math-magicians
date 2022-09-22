const quotStyle = {
  fontSize: '1.5rem',
  paddingLeft: '5%',
};
const Quote = () => (
  <div style={quotStyle}>
    <p>Here is a quote from famaous mathematician:</p>
    <blockquote>
      &quot; Mathimatics is not about numbers, equation, computations or
      algorithms: it is about undrstanding.  &quot; --Willian Paul Thurston.
    </blockquote>
  </div>
);

export default Quote;
