import {Component} from '@angular/core';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    tafelsEasy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    tafelsAdvanced = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    tafelStappen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 1x, 2x, 3x etc

    selectieModel = {selectie: 0}

    tafelModel = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: [],
        18: [],
        19: [],
        20: []
    }


    selectTafel() {
        console.log(this.selectieModel)
    }


    checkAnswers(tafel, nr) {

        console.log("CHECKING...", tafel, nr, this.tafelModel[tafel][nr])


        //{{nr}}_{{selectieModel.selectie}}_answer
        let input = document.getElementById(nr + "_" + tafel + "_answer")

        if (parseInt(tafel) * parseInt(nr) != parseInt(this.tafelModel[tafel][nr])) {
            console.log("WRONG ANSWER")
            input.setAttribute('color', 'danger');
        } else {

            input.setAttribute('color', 'success');

            console.log("CORRECT ANSWER")
        }
    }
}



