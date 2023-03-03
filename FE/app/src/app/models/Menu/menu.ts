export class Menu {
    id: number;
    name: string;
    description: string;
    // averageRating_Value: string;
    // averageRating_NumRatings: string;
    // hostId: number;
    createdDateTime: Date;
    updatedDateTime: Date;
    meal: string


    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        // this.averageRating_Value = '';
        // this.averageRating_NumRatings = '';
        // this.hostId = 0;
        this.createdDateTime = new Date();
        this.updatedDateTime = new Date();
        this.meal = '';
    }

}
