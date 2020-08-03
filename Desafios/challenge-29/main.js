(function () {
    function DOM(nodeDOM) {
        this.element = document.querySelectorAll(nodeDOM);

        this.on = function (event, eventFunction) {
            Array.prototype.forEach.call(this.element, element => {
                element.addEventListener(event, eventFunction, false)
            });

        };

        this.off = function (event, eventFunction) {
            Array.prototype.forEach.call(this.element, element => {
                element.removeEventListener(event, eventFunction, false)
            });

        };

        this.get = function () {
            return this.element;
        };

        this.forEach = function forEach() {
            return Array.prototype.forEach.apply(this.element, arguments);
        }

        this.map = function map() {
            return Array.prototype.map.apply(this.element, arguments);
        }

        this.filter = function filter() {
            return Array.prototype.filter.apply(this.element, arguments);
        }

        this.reduce = function reduce() {
            return Array.prototype.reduce.apply(this.element, arguments);
        }

        this.reduceRight = function reduceRight() {
            return Array.prototype.reduceRight.apply(this.element, arguments);
        }

        this.every = function every() {
            return Array.prototype.every.apply(this.element, arguments);
        }

        this.some = function some() {
            return Array.prototype.some.apply(this.element, arguments);
        }

        DOM.isArray = function isArray(param) {
            return Object.prototype.toString.call(param) === "[object Array]"
        };
        DOM.isObject = function isObject(param) {
            return Object.prototype.toString.call(param) === "[object Object]"
        };
        DOM.isFunction = function isFunction(param) {
            return Object.prototype.toString.call(param) === "[object Function]"
        };
        DOM.isNumber = function isNumber(param) {
            return Object.prototype.toString.call(param) === "[object Number]"
        };
        DOM.isString = function isString(param) {
            return Object.prototype.toString.call(param) === "[object String]"
        };
        DOM.isBoolean = function isBoolean(param) {
            return Object.prototype.toString.call(param) === "[object Boolean]"
        };
        DOM.isNull = function isNull(param) {
            return Object.prototype.toString.call(param) === "[object Null]" || Object.prototype.toString.call(param) === "[object Undefined]"
        };

    }
    window.DOM = DOM;
})()