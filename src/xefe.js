import "./lib/jquery.min.js";
// @ts-ignore
var $ = window.$;
import "./lib/plotly.min.js";
// @ts-ignore
var Plotly = window.Plotly;
import { jena_fibonaci } from "./matike.js";
$('#botone').on('click', function () {
    Plotly.newPlot($('#grafe')[0], [{
            y: jena_fibonaci(10)
        }]);
});
//# sourceMappingURL=xefe.js.map