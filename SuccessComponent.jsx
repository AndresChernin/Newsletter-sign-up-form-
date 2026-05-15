function SuccessComponent({email, buttonFunction}){
    return(
      <section className="success-part">
         
        <div className="icon-h-p-part">
         <img 
          src="./assets/images/icon-success.svg"
          className="icon-part"
        />

        <h1>
          Thanks for subscribing!
        </h1>

        <p>
          A confirmation email has been sent to
          <strong> {email}</strong> Please open it and click 
          the button inside to confirm your subscription.
        </p>
      </div>
       <button className="dismiss-button" onClick={buttonFunction}>
        Dismiss message
      </button>
      
      </section>
    );
}