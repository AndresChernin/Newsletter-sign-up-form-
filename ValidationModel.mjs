class ValidationModel{
    
    constructor(email = ""){
        this.email = email;
        this.errorType = "";
        
        this.unallowedSymbols = [
            " ", "(", ")", ",", ";", ":", "\"",
            "[", "]", "{", "}", "\\", "/","+"
        ];
        this.commandsForLiveValidation=
        [this.containsUnallowedSymbols,this.containsMinus2TimesInRaw,
         this.contains2Ats, this.contains2Points];
        this.commandsForButtonValidation=
        [this.emptyEmail,this.containsAtOnWrongPlace,this.containsPointsOnWrongPlace];
    }

    setEmail(newEmail){
        this.email = newEmail;
    }
    emptyEmail(){
        if(this.email===""){
            this.errorType = "Error: Email is empty!";
            return true;

        }
        return false;
    }

    containsUnallowedSymbols(){
        for(const symbol of this.unallowedSymbols){
            if(this.email.includes(symbol)){
                this.errorType = "Error: Contains unallowed symbols";
                return true;
            }
        }

        return false;
    }

    containsMinus2TimesInRaw(){
        if(this.email.includes("--")){
            this.errorType = "Error: Contains --";
            return true;
        }

        return false;
    }

    contains2Points(){
        let counter = 0;

        for(const char of this.email){
            if(char === "."){
                counter++;
            }
        }

        if(counter >= 2){
            this.errorType = "Error: Contains 2 points";
            return true;
        }

        return false;
    }

    contains2Ats(){
        let counter = 0;

        for(const char of this.email){
            if(char === "@"){
                counter++;
            }
        }

        if(counter >= 2){
            this.errorType = "Error: Contains 2 @";
            return true;
        }

        return false;
    }

    containsAtOnWrongPlace(){

        if(!this.email.includes("@")){
            this.errorType = "Error: Missing @";
            return true;
        }

        const atIndex = this.email.indexOf("@");

        if(atIndex === 0 || atIndex === this.email.length - 1){
            this.errorType = "@ on wrong place";
            return true;
        }

        return false;
    }

    containsPointsOnWrongPlace(){

        if(!this.email.includes(".")){
            this.errorType = "Error: Missing point";
            return true;
        }

        const pointIndex = this.email.lastIndexOf(".");

        if(pointIndex === 0 || pointIndex === this.email.length - 1){
            this.errorType = "Error: Point on wrong place";
            return true;
        }

        return false;
    }

    makeLiveValidation(newEmail){
        this.setEmail(newEmail);
        this.errorType="";
        for(let command of this.commandsForLiveValidation){
          console.log(`${command.call(this)}`);
          if(command.call(this)) break;  
        }
        console.log(this.errorType);
        return this.errorType;
    }

    makeButtonValidation(newEmail){
        this.setEmail(newEmail);
        this.errorType="";
        for(let command of this.commandsForButtonValidation){
          console.log(`${command.call(this)}`);
          if(command.call(this)) break;  
        }
        console.log(this.errorType);
        return this.errorType;
        
    }
    setEmail(newEmail){
        this.email=newEmail;
    }
}