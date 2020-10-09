class BdvUtil {
    /**
     * @param element which should have waypoints such as connection and association
     * @returns {{top: number, left: number}} object with calculated center object
     */
    static calculateCenterOfTwoPoints = (element) => {
        let a = element.waypoints[0];
        let b = element.waypoints[1];
        return {top: Math.abs(a.y-b.y)/2, left: Math.abs(a.x-b.x)/2 };
    };



    static getPosition = (element, type) => {
        let upLeft = {top: 0, left: 0};
        let upRight = {top: 0, right: 0};
        let downLeft = {bottom: 0, left: 0}
        let downRight = {bottom: 0, right: 0};

        let centerShape = {top: element.height/2, left: element.width/2};

        if(element.waypoints) {
            return this.calculateCenterOfTwoPoints(element);
        }

        switch (type) {
            case 'Pool':
            case 'Lane':
            case 'TextAnnotation':
                return downLeft;
            case 'StartEvent':
            case 'EndEvent':
                return {right: 0, bottom: -6};
            default:
                return downRight;
        }
    }
}

export default BdvUtil;
