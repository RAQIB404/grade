function grade(r){
    switch(true){
        case r<35:
        console.log("you failed");
        break;

        case r>=35 && r<60:
            console.log("second class");
            break;

        case r>=60 && r<84:
            console.log("first class");
            break;
        case r>=85:
            console.log("distinction");
            break;

        default:
            console.log("invalid");
    }
}

grade(87);