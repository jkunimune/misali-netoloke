import "./lib/jquery.min.js";
// @ts-ignore
const $ = window.$;
import "./lib/plotly.min.js";
// @ts-ignore
const Plotly = window.Plotly;

import {jena_fibonaci} from "./matike.js";

$('#botone').on('click', function () {
    Plotly.newPlot(
        $('#grafe')[0],
        [{
            y: jena_fibonaci(10)
        }]
    );
});