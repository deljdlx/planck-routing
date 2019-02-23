var classes = [
    {
        "name": "Planck\\Routing\\Route",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescriptor",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Phi\\Routing\\Route",
            "parent",
            "Planck\\Routing\\RouteDescriptor"
        ],
        "parents": [
            "Phi\\Routing\\Route"
        ],
        "lcom": 1,
        "length": 38,
        "vocabulary": 15,
        "volume": 148.46,
        "difficulty": 5.09,
        "effort": 755.81,
        "level": 0.2,
        "bugs": 0.05,
        "time": 42,
        "intelligentContent": 29.16,
        "number_operators": 10,
        "number_operands": 28,
        "number_operators_unique": 4,
        "number_operands_unique": 11,
        "cloc": 0,
        "loc": 34,
        "lloc": 34,
        "mi": 50.85,
        "mIwoC": 50.85,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 0.92,
        "relativeSystemComplexity": 25.92,
        "totalStructuralComplexity": 100,
        "totalDataComplexity": 3.67,
        "totalSystemComplexity": 103.67,
        "package": "Planck\\Routing\\",
        "pageRank": 0.49,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Planck\\Routing\\RouteDescriptor",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "JsonSerializable",
            "Planck\\Routing\\Route"
        ],
        "parents": [],
        "lcom": 1,
        "length": 42,
        "vocabulary": 12,
        "volume": 150.57,
        "difficulty": 5.17,
        "effort": 777.94,
        "level": 0.19,
        "bugs": 0.05,
        "time": 43,
        "intelligentContent": 29.14,
        "number_operators": 11,
        "number_operands": 31,
        "number_operators_unique": 3,
        "number_operands_unique": 9,
        "cloc": 3,
        "loc": 35,
        "lloc": 32,
        "mi": 73.15,
        "mIwoC": 51.25,
        "commentWeight": 21.91,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.33,
        "relativeSystemComplexity": 2.33,
        "totalStructuralComplexity": 3,
        "totalDataComplexity": 4,
        "totalSystemComplexity": 7,
        "package": "Planck\\Routing\\",
        "pageRank": 0.4,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Planck\\Routing\\Router",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Phi\\Routing\\Router",
            "Planck\\Application\\Application",
            "parent",
            "Phi\\Routing\\Route",
            "Planck\\Routing\\Route",
            "parent"
        ],
        "parents": [
            "Phi\\Routing\\Router"
        ],
        "lcom": 1,
        "length": 22,
        "vocabulary": 8,
        "volume": 66,
        "difficulty": 5.1,
        "effort": 336.6,
        "level": 0.2,
        "bugs": 0.02,
        "time": 19,
        "intelligentContent": 12.94,
        "number_operators": 5,
        "number_operands": 17,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 5,
        "loc": 29,
        "lloc": 24,
        "mi": 86.87,
        "mIwoC": 56.88,
        "commentWeight": 29.99,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 16.5,
        "totalStructuralComplexity": 32,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 33,
        "package": "Planck\\Routing\\",
        "pageRank": 0.11,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    }
]