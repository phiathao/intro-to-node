let names = ['Ryan', 'Tang', 'Abdul'];

class Cohort {
    constructor(){
        this.name = names;

    }
    printCohort(){
        for(let name of this.name){
            console.log(`peeps of ${name}`);
        }
    }
}



module.exports = Cohort;