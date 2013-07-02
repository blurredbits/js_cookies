
function Cookie (batchType, bakeTime) {
    this.batchType = batchType;
    this.bakeTime = bakeTime;
    this.status = "raw";
}

Cookie.prototype.status(ovenTime) {
    if (ovenTime === 0) {
        return this.status;   
    }
    
    if (ovenTime < this.bakeTime) {
        this.status = "still gooey";
        return this.status;
    }
    
    if (ovenTime === this.bakeTime) {
        this.status = "just right";
        return this.status;
    }
    
    if (ovenTime > this.bakeTime){
        this.status = "burnt to death";
        return this.status;
    }
}
