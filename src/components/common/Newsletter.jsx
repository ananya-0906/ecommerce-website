import "./NewsLetter.css";


function NewsLetter(){
    return(
        <section className="newsletter">
            <div className="newsletter-content">
                <h2>Being first has its perks</h2>
                <p>Sign up to receive sonicX emails and communications for exclusive benefits, promotions and new product information.</p>

                <form className="newsletter-form">
                    <input type="email" placeholder="Email address"></input>
                    <button type="submit">SIGN UP &rarr;</button>
                </form> 
            </div>
        
                
        </section>
    );
}
export default NewsLetter;