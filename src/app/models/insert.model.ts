export class insertModel{
    public name   :  string;
    public lastp  :  string;
    public lastm  :  string;
    public adress :  string;
    public age    :  string;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
   
}