    let date =new Date();
	let hours = date.getHours();
	let greeting =document.getElementById('greeting');

	function showTime(){
    if(hours>3 && hours<=12){
    	greeting.innerHTML= `Lets's start our morning with a new quotes`;
    }
    else if(hours>12 && hours<=17){
    	greeting.innerHTML= `Lets's start our afternoon with a new quotes`;
    }
    else if(hours>17 && hours<=21){
    	greeting.innerHTML= `Lets's start our evening with a new quotes`;
    }
    else if(hours>21 || hours<=3){
        greeting.innerHTML= `Lets's start our night with a new quotes`;

    }
	}
    showTime();
    
    //color array
    let ColorForOuter =["#005b96","#251e3e"," #ff3377","#2e003e","#8d5524","#8B0000","#999900","#008080","#4B0082","#8B4513"];
    let ColorForInner =["#b3cde0"," #851e3e"," #ff99cc","#8874a3","#ffdbac","#CD5C5C","#FFFF99","#AFEEEE","#8A2BE2","#F0E68C"]
    //get button
    let buttonElement =document.getElementById("clicks");
    //get outer container
    let outerDivElement = document.getElementsByClassName("outer-container")[0];
    //get inner container
    let innerDivElement = document.getElementsByClassName("inner-container")[0];
    //get inner quoteText
   let innerFontColor = document.getElementsByClassName("quote-body")[0];
    
    buttonElement.addEventListener("click",function(){
        //randommizer for outer container and inner container
        let outercolor = Math.floor(Math.random()*ColorForOuter.length);
        let innercolor = Math.floor(Math.random()*ColorForInner.length);
        outercolor = innercolor;
        let randomColorForOuter = ColorForOuter[outercolor];
        let randomColorForInner = ColorForInner[innercolor];

        //set background color or text color for inner and outer container 
        outerDivElement.style.background = randomColorForOuter;
        innerDivElement.style.background = randomColorForInner;
        innerFontColor.style.color = randomColorForOuter;
        buttonElement.style.background = randomColorForOuter;

       
        
     //collection of quotes
     const quotes =[
     {
        Quote:`Start writing, no matter what. The water does not flow until the faucet is turned on.`,
        Author:`- Louis L’Amour`
     },
     {
        Quote:`Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.`,
        Author:`- William Faulkner`
     },
     {
        Quote:`The first draft is just you telling yourself the story.`,
        Author:`- Terry Pratchett`
     },
     {
        Quote:`You do not start out writing good stuff. You start out writing crap and thinking it is good stuff, and then gradually you get better at it.`,
        Author:`- Octavia E. Butler`
     },
     {
        Quote:`You can always edit a bad page. You can not edit a blank page.`,
        Author:`- Jodi Picoult`
     },
     {
        Quote:`You can not wait for inspiration. You have to go after it with a club.`,
        Author:`- Jack London`
     },
     {
        Quote:`I have never started a poem yet whose end I knew. Writing a poem is discovering.`,
        Author:`- Robert Frost`
     },
     {
        Quote:`If there's a book that you want to read, but it hasn't been written yet, then you must write it.`,
        Author:`- Toni Morrison`
     },
     {
        Quote:`First, find out what your hero wants, then just follow him.`,
        Author:`- Ray Bradbury`
     },
     {
        Quote:`"No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.`,
        Author:`- Robert Frost`
     },

     ]
     let quote =document.getElementsByClassName("quote")[0];
     let author =document.getElementsByClassName("author")[0];
     let randomQuote =Math.floor(Math.random()*quotes.length);
     quote.innerHTML= quotes[randomQuote].Quote;
     author.innerHTML = quotes[randomQuote].Author;
    })

