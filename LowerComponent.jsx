function LowerComponent({currentEmail,currentError,inputFunction,buttonFunction}){
    return (
    <form className="signup-form"
    onSubmit={buttonFunction}
    noValidate
    >
       <div className="email-error-part">
          <p>Email address</p>
          <p className="error-part">{currentError.error}</p>
       </div> 
       {currentError.error===""&&
        <input 
          type="email"
          placeholder="email@company.com"
          className="no-error-input"
          value={currentEmail.email}
          onChange={inputFunction("email")}
      />}
        {currentError.error!=""&&
        <input 
          type="email"
          placeholder="email@company.com"
          className="error-input"
          value={currentEmail.email}
          onChange={inputFunction("email")}
      />}
      <button className="button-part">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}