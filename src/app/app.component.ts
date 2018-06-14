import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardsService} from './services/cards.service';
import {Card} from './model/CardModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

    cards: Card[];

    constructor(private cardService: CardsService) {  }

    countryArray: Card[] = [];
    countryObj: object = {};

    ngOnInit() {

        /**
         * Subscribe to Card Service which returns an Observable
         */
        this.cardService.getCards()
            .subscribe(d => {

                const countryData = (d as any).places;
                let ind = 0;
                /**
                 * Loop through UN Data and parse into CARD array
                 */
                countryData.forEach((obj) => {
                    const nextCountry = obj['Country or Area'];
                    if (!this.countryObj[nextCountry]) {
                        ind++;
                        this.countryObj[nextCountry] = ind;
                        const newCard: Card = {
                            country: nextCountry,
                            population: 0,
                            year: 0,
                            maleUrban: 0,
                            maleRural: 0,
                            maleTotal: 0,
                            femaleUrban: 0,
                            femaleRural: 0,
                            femaleTotal: 0,
                            bothUrban: 0,
                            bothRural: 0,
                            bothTotal: 0,
                            sourceYear: 0
                        };
                        updateObject(newCard, obj);
                        this.countryArray.push(newCard);
                    } else {
                        const existingInd = this.countryObj[nextCountry];
                        updateObject(this.countryArray[existingInd - 1], obj);
                    }

                    function updateObject(card, o) {

                        function updateCard(c, key, val, yr) {
                            if (c[key] === 0) {
                                c[key] = val;
                            } else {
                                if (c['year'] <= yr) {
                                    c[key] = val;
                                    c['year'] = yr;
                                }
                            }
                        }

                        const cYear = Number(o['Year']);
                        const cVal = Number(o['Value']);

                        switch (o['Sex']) {
                            case 'Male':
                                switch (o['Area']) {
                                    case 'Urban':
                                        updateCard(card, 'maleUrban', cVal, cYear);
                                        break;
                                    case 'Rural':
                                        updateCard(card, 'maleRural', cVal, cYear);
                                        break;
                                    case 'Total':
                                        updateCard(card, 'maleTotal', cVal, cYear);
                                        break;
                                }
                                break;
                            case 'Female':
                                switch (o['Area']) {
                                    case 'Urban':
                                        updateCard(card, 'femaleUrban', cVal, cYear);
                                        break;
                                    case 'Rural':
                                        updateCard(card, 'femaleRural', cVal, cYear);
                                        break;
                                    case 'Total':
                                        updateCard(card, 'femaleTotal', cVal, cYear);
                                        break;
                                }
                                break;
                            case 'Both Sexes':
                                switch (o['Area']) {
                                    case 'Urban':
                                        updateCard(card, 'bothUrban', cVal, cYear);
                                        break;
                                    case 'Rural':
                                        updateCard(card, 'bothRural', cVal, cYear);
                                        break;
                                    case 'Total':
                                        updateCard(card, 'bothTotal', cVal, cYear);
                                        break;
                                }
                                break;
                        }

                        return card;
                    }
                });
            });

        this.cards = this.countryArray;
    }

    hasApropiateData(c) {
        return c['maleUrban'] > 0 && c['maleRural'] > 0 && c['femaleUrban'] > 0 && c['femaleRural'] > 0;
    }

    ngOnDestroy() {
        // TODO unsubscribe to ensure no memory leaks
    }

}
