import {Component, Input, OnInit} from '@angular/core';
import {COUNTRY_CODES as codes} from '../../shared/country-codes';

@Component({
    selector: 'app-card-vert',
    templateUrl: './card-vert.component.html',
    styleUrls: ['./card-vert.component.scss']
})

export class CardVertComponent implements OnInit {

    @Input() card;

    constructor() {
    }

    /**
     * Returns 2-letter country code when passed full country name (from UN Data)
     * Use for flag PNGs
     * @param c
     * @returns {string}
     */
    getCountryCode(c) {
        return (codes[c].toLowerCase());
    }

    /**
     * Functions for extacting parsed data from CARDs
     * @param c
     * @returns {any}
     */
    getTotal(c) {
        return c['maleUrban'] + c['maleRural'] + c['femaleUrban'] + c['femaleRural'];
    }

    getMaleUrbanPC(c, multiplier = 1) {
        return String(this.round(c['maleUrban'] / this.getTotal(c) * 100 * multiplier, 1)) + '%';
    }

    getFemaleUrbanPC(c, multiplier = 1) {
        return String(this.round(c['femaleUrban'] / this.getTotal(c) * 100 * multiplier, 1)) + '%';
    }

    getMaleRuralPC(c, multiplier = 1) {
        return String(this.round(c['maleRural'] / this.getTotal(c) * 100 * multiplier, 1)) + '%';
    }

    getFemaleRuralPC(c, multiplier = 1) {
        return String(this.round(c['femaleRural'] / this.getTotal(c) * 100 * multiplier, 1)) + '%';
    }

    /**
     * Function for rounding percentages to 1 decimal-point
     * @param value
     * @param precision
     * @returns {number}
     */
    round(value, precision) {
        const multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    /**
     * Calculated total population based on CARD details
     * @param c
     * @returns {any}
     */
    getTotalPopulation(c) {
        let total = c['maleUrban'] + c['maleRural'] + c['femaleUrban'] + c['femaleRural'];
        if (total === 0) {
            total = c['bothUrban'] + c['bothRural'];
        }
        if (total === 0) {
            total = c['femaleTotal'] + c['maleTotal'];
        }
        if (total === 0) {
            total = c['bothTotal'];
        }
        return total;
    }


    ngOnInit() {
    }

}
