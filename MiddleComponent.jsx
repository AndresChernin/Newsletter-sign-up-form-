function MiddleComponent({iconLink}){
    const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!"
    ];
    return(
    <article className={'middle-part'}>
    <h1>Stay updated!</h1>
    <p>Join 60,000+ product managers receiving monthly updates on:</p>
     <ul className="benefits-list">
      {items.map((item) => (
        <li className="benefit-item" key={item}>
          <img src={iconLink} alt="list icon" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    </article>

    )
}