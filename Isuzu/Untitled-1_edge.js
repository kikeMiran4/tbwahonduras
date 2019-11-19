/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_01',
                            display: 'block',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"01.jpg",'0px','0px']
                        },
                        {
                            id: '_022',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"02.jpg",'0px','0px']
                        },
                        {
                            id: '_03',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"03.jpg",'0px','0px']
                        },
                        {
                            id: '_04',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"04.jpg",'0px','0px']
                        },
                        {
                            id: '_05',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"05.jpg",'0px','0px']
                        },
                        {
                            id: '_06',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"06.jpg",'0px','0px']
                        },
                        {
                            id: '_07',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"07.jpg",'0px','0px']
                        },
                        {
                            id: '_08',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"08.jpg",'0px','0px']
                        },
                        {
                            id: '_09',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"09.jpg",'0px','0px']
                        },
                        {
                            id: '_10',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"10.jpg",'0px','0px']
                        },
                        {
                            id: '_11',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"11.jpg",'0px','0px']
                        },
                        {
                            id: '_12',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"12.jpg",'0px','0px']
                        },
                        {
                            id: '_13',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"13.jpg",'0px','0px']
                        },
                        {
                            id: '_14',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"14.jpg",'0px','0px']
                        },
                        {
                            id: '_15',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"15.jpg",'0px','0px']
                        },
                        {
                            id: '_16',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"16.jpg",'0px','0px']
                        },
                        {
                            id: '_17',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"17.jpg",'0px','0px']
                        },
                        {
                            id: '_18',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"18.jpg",'0px','0px']
                        },
                        {
                            id: '_19',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"19.jpg",'0px','0px']
                        },
                        {
                            id: '_20',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"20.jpg",'0px','0px']
                        },
                        {
                            id: '_21',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"21.jpg",'0px','0px']
                        },
                        {
                            id: '_22',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"22.jpg",'0px','0px']
                        },
                        {
                            id: '_23',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"23.jpg",'0px','0px']
                        },
                        {
                            id: '_24',
                            display: 'none',
                            type: 'image',
                            rect: ['-346px', '960px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"24.jpg",'0px','0px']
                        },
                        {
                            id: '_023',
                            type: 'image',
                            rect: ['-346px', '0px', '1772px', '997px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"023.jpg",'0px','0px']
                        },
                        {
                            id: '_0222',
                            type: 'image',
                            rect: ['-346px', '0px', '1772px', '997px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"022.jpg",'0px','0px']
                        },
                        {
                            id: '_024',
                            type: 'image',
                            rect: ['-346px', '0px', '1772px', '997px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"024.jpg",'0px','0px']
                        },
                        {
                            id: 'pie',
                            type: 'image',
                            rect: ['0px', '1778px', '1080px', '142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pie.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['758', '1609px', '300', '300', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['1', '1609px', '310', '310', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '959px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle5',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9',
                            display: 'none',
                            type: 'rect',
                            rect: ['534px', '960px', '546px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(41,41,41,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle12',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '900px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle15',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle16',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle17',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle18',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle19',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle20',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle21',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle22',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle23',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25',
                            display: 'none',
                            type: 'rect',
                            rect: ['540px', '960px', '540px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle26',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '533px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle27',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '533px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle28',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '960px', '527px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '960px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle29',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle30',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle31',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle32',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle33',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle34',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '960px', '527px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle35',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle36',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '960px', '527px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle37',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle38',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle39',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '533px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle40',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '960px', '527px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle41',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle42',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '960px', '527px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle43',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle44',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle45',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '539px', '960px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle46',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle47',
                            display: 'none',
                            type: 'rect',
                            rect: ['1px', '960px', '526px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle48',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '960px', '527px', '959px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'intro',
                            display: 'none',
                            volume: '0.38571428571429',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['355', '260', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"intro.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'PuertaCopy2',
                            type: 'image',
                            rect: ['0px', '940px', '1080px', '921px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Puerta.jpg",'0px','0px']
                        },
                        {
                            id: 'division',
                            type: 'image',
                            rect: ['0px', '922px', '1080px', '75px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"division.jpg",'0px','0px']
                        },
                        {
                            id: 'Puerta',
                            type: 'image',
                            rect: ['0px', '0px', '1080px', '921px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Puerta.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '1080px', '960px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(57,57,57,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['0px', '959px', '1080px', '960px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(57,57,57,0.54)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'pieCopy',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '1778px', '1080px', '142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"pie.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3',
                            display: 'block',
                            type: 'rect',
                            rect: ['299', '1190px', '512', '512', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            transform: [[],[],[],['0.69','0.69']]
                        },
                        {
                            id: 'logout',
                            display: 'none',
                            type: 'image',
                            rect: ['480px', '1719px', '118px', '115px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logout.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['954px', '491px', '75px', '75px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(103,13,19,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['952px', '649px', '75px', '75px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy2',
                            type: 'ellipse',
                            rect: ['843px', '799px', '75px', '75px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(181,182,184,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Symbol_4',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['255px', '317', '586', '199', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'logoutCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['80px', '769px', '118px', '115px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"logout.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_6',
                            symbolName: 'Symbol_6',
                            display: 'block',
                            type: 'rect',
                            rect: ['717', '460', '140', '140', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_6Copy',
                            symbolName: 'Symbol_6',
                            display: 'none',
                            type: 'rect',
                            rect: ['617px', '1480px', '140', '140', 'auto', 'auto']
                        },
                        {
                            id: 'Untitled-1',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '1080px', '1920px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1.jpg",'0px','0px']
                        },
                        {
                            id: 'Symbol_7',
                            symbolName: 'Symbol_7',
                            display: 'block',
                            type: 'rect',
                            rect: ['-2px', '25px', '1080', '1920', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Untitled-2',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '23px', '1080px', '1920px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Untitled-2.png",'0px','0px']
                        },
                        {
                            id: 'Vector-Smart-Object6',
                            type: 'image',
                            rect: ['178px', '-29px', '704px', '218px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Vector-Smart-Object6.png",'0px','0px'],
                            transform: [[],[],[],['1.2','1.2']]
                        },
                        {
                            id: 'Rectangle49',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '1080px', '1920px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Symbol_6Copy2',
                            symbolName: 'Symbol_6',
                            display: 'block',
                            type: 'rect',
                            rect: ['607px', '1340px', '140', '140', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1080px', '1920px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 52000,
                    autoPlay: true,
                    labels: {
                        "go": 0,
                        "INTROOO": 7000,
                        "ok": 8000,
                        "Cargabaja": 11000,
                        "1": 22000,
                        "2": 24000,
                        "3": 25000,
                        "4": 25750,
                        "5": 26500,
                        "6": 27250,
                        "7": 28000,
                        "8": 28750,
                        "9": 29500,
                        "10": 30250,
                        "11": 31000,
                        "12": 31750,
                        "13": 32500,
                        "14": 33250,
                        "15": 34000,
                        "16": 34750,
                        "17": 35500,
                        "18": 36250,
                        "19": 37000,
                        "20": 37750,
                        "21": 38500,
                        "22": 39250,
                        "23": 40000,
                        "24": 40750,
                        "CargaArriba": 43000,
                        "Rojo": 47000,
                        "Negro": 48500,
                        "Gris": 50000
                    },
                    data: [
                        [
                            "eid680",
                            "display",
                            43500,
                            0,
                            "easeOutQuint",
                            "${logoutCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid213",
                            "display",
                            28000,
                            0,
                            "easeOutCirc",
                            "${Rectangle42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid214",
                            "display",
                            28500,
                            0,
                            "easeOutCirc",
                            "${Rectangle42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            40000,
                            0,
                            "easeOutCirc",
                            "${_23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            40500,
                            0,
                            "easeOutCirc",
                            "${_23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid579",
                            "display",
                            11250,
                            0,
                            "easeOutCirc",
                            "${Symbol_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid642",
                            "display",
                            41750,
                            0,
                            "easeOutElastic",
                            "${Symbol_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid849",
                            "opacity",
                            500,
                            1000,
                            "easeOutCirc",
                            "${Vector-Smart-Object6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "display",
                            31750,
                            0,
                            "easeOutCirc",
                            "${Rectangle13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            32250,
                            0,
                            "easeOutCirc",
                            "${Rectangle13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            31000,
                            0,
                            "easeOutCirc",
                            "${Rectangle38}",
                            'none',
                            'block'
                        ],
                        [
                            "eid202",
                            "display",
                            31500,
                            0,
                            "easeOutCirc",
                            "${Rectangle38}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            38500,
                            0,
                            "easeOutCirc",
                            "${_21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            39000,
                            0,
                            "easeOutCirc",
                            "${_21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid573",
                            "top",
                            11250,
                            1250,
                            "easeOutBounce",
                            "${PuertaCopy2}",
                            '930px',
                            '120px'
                        ],
                        [
                            "eid635",
                            "top",
                            41750,
                            500,
                            "easeOutElastic",
                            "${PuertaCopy2}",
                            '120px',
                            '940px'
                        ],
                        [
                            "eid77",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${_022}",
                            'none',
                            'block'
                        ],
                        [
                            "eid78",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${_022}",
                            'block',
                            'none'
                        ],
                        [
                            "eid829",
                            "opacity",
                            0,
                            500,
                            "easeOutCirc",
                            "${Symbol_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid858",
                            "opacity",
                            7000,
                            1000,
                            "easeOutCirc",
                            "${Symbol_7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid223",
                            "display",
                            24000,
                            0,
                            "easeOutCirc",
                            "${Rectangle47}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "display",
                            24500,
                            0,
                            "easeOutCirc",
                            "${Rectangle47}",
                            'block',
                            'none'
                        ],
                        [
                            "eid656",
                            "opacity",
                            43000,
                            1000,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid96",
                            "display",
                            27250,
                            0,
                            "linear",
                            "${_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            27750,
                            0,
                            "linear",
                            "${_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${_09}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${_09}",
                            'block',
                            'none'
                        ],
                        [
                            "eid208",
                            "display",
                            29500,
                            0,
                            "easeOutCirc",
                            "${Rectangle40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid209",
                            "display",
                            30000,
                            0,
                            "easeOutCirc",
                            "${Rectangle40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            38500,
                            0,
                            "easeOutCirc",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            39000,
                            0,
                            "easeOutCirc",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            27250,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            27750,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid826",
                            "top",
                            0,
                            500,
                            "easeOutCirc",
                            "${Symbol_7}",
                            '70px',
                            '25px'
                        ],
                        [
                            "eid848",
                            "top",
                            500,
                            1000,
                            "easeOutCirc",
                            "${Vector-Smart-Object6}",
                            '-29px',
                            '81px'
                        ],
                        [
                            "eid854",
                            "top",
                            7500,
                            1000,
                            "easeOutElastic",
                            "${Vector-Smart-Object6}",
                            '81px',
                            '861px'
                        ],
                        [
                            "eid128",
                            "display",
                            33250,
                            0,
                            "easeOutCirc",
                            "${_14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            33750,
                            0,
                            "easeOutCirc",
                            "${_14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid674",
                            "opacity",
                            42250,
                            250,
                            "easeOutQuint",
                            "${_024}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid672",
                            "opacity",
                            47000,
                            1000,
                            "easeOutQuint",
                            "${_024}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid677",
                            "opacity",
                            48500,
                            1000,
                            "easeOutQuint",
                            "${_024}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "display",
                            40000,
                            0,
                            "easeOutCirc",
                            "${Rectangle27}",
                            'none',
                            'block'
                        ],
                        [
                            "eid177",
                            "display",
                            40500,
                            0,
                            "easeOutCirc",
                            "${Rectangle27}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            28750,
                            0,
                            "linear",
                            "${_08}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            29250,
                            0,
                            "linear",
                            "${_08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            37000,
                            0,
                            "easeOutCirc",
                            "${Rectangle30}",
                            'none',
                            'block'
                        ],
                        [
                            "eid186",
                            "display",
                            37500,
                            0,
                            "easeOutCirc",
                            "${Rectangle30}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            40750,
                            0,
                            "easeOutCirc",
                            "${_24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            41250,
                            0,
                            "easeOutCirc",
                            "${_24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            28750,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            29250,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid667",
                            "left",
                            44250,
                            750,
                            "easeOutCubic",
                            "${EllipseCopy2}",
                            '843px',
                            '953px'
                        ],
                        [
                            "eid122",
                            "display",
                            31000,
                            0,
                            "easeOutCirc",
                            "${Rectangle12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            31500,
                            0,
                            "easeOutCirc",
                            "${Rectangle12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            34750,
                            0,
                            "easeOutCirc",
                            "${_16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            35250,
                            0,
                            "easeOutCirc",
                            "${_16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "display",
                            25750,
                            0,
                            "easeOutCirc",
                            "${Rectangle45}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "display",
                            26250,
                            0,
                            "easeOutCirc",
                            "${Rectangle45}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            26500,
                            0,
                            "linear",
                            "${_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            27000,
                            0,
                            "linear",
                            "${_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${_01}",
                            'block',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            23500,
                            0,
                            "easeOutElastic",
                            "${_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            36250,
                            0,
                            "easeOutCirc",
                            "${_18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            36750,
                            0,
                            "easeOutCirc",
                            "${_18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid210",
                            "display",
                            28750,
                            0,
                            "easeOutCirc",
                            "${Rectangle41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid211",
                            "display",
                            29250,
                            0,
                            "easeOutCirc",
                            "${Rectangle41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid571",
                            "opacity",
                            11000,
                            1000,
                            "easeOutCirc",
                            "${Rectangle2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid640",
                            "opacity",
                            41750,
                            500,
                            "easeOutElastic",
                            "${Rectangle2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "display",
                            34000,
                            0,
                            "easeOutCirc",
                            "${_15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            34500,
                            0,
                            "easeOutCirc",
                            "${_15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid567",
                            "scaleY",
                            11000,
                            250,
                            "easeOutCirc",
                            "${Symbol_3}",
                            '0.69',
                            '1.2'
                        ],
                        [
                            "eid650",
                            "scaleY",
                            41750,
                            500,
                            "easeOutElastic",
                            "${Symbol_3}",
                            '1.2',
                            '0.66'
                        ],
                        [
                            "eid225",
                            "display",
                            7000,
                            0,
                            "easeOutCirc",
                            "${Rectangle48}",
                            'none',
                            'block'
                        ],
                        [
                            "eid226",
                            "display",
                            23500,
                            0,
                            "easeOutCirc",
                            "${Rectangle48}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "display",
                            30250,
                            0,
                            "easeOutCirc",
                            "${Rectangle39}",
                            'none',
                            'block'
                        ],
                        [
                            "eid206",
                            "display",
                            30750,
                            0,
                            "easeOutCirc",
                            "${Rectangle39}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            37750,
                            0,
                            "easeOutCirc",
                            "${_20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            38250,
                            0,
                            "easeOutCirc",
                            "${_20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "top",
                            1000,
                            0,
                            "easeOutElastic",
                            "${Symbol_1}",
                            '1609px',
                            '1609px'
                        ],
                        [
                            "eid160",
                            "display",
                            39250,
                            0,
                            "easeOutCirc",
                            "${_22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            39750,
                            0,
                            "easeOutCirc",
                            "${_22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            30250,
                            0,
                            "easeOutCirc",
                            "${Rectangle11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            30750,
                            0,
                            "easeOutCirc",
                            "${Rectangle11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid851",
                            "display",
                            8000,
                            0,
                            "easeOutCirc",
                            "${Symbol_7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            35500,
                            0,
                            "easeOutCirc",
                            "${_17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            36000,
                            0,
                            "easeOutCirc",
                            "${_17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid668",
                            "opacity",
                            44250,
                            750,
                            "easeOutQuint",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid863",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${Symbol_6Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid864",
                            "display",
                            7000,
                            0,
                            "easeOutElastic",
                            "${Symbol_6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid565",
                            "opacity",
                            11000,
                            250,
                            "easeOutCirc",
                            "${Symbol_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid644",
                            "opacity",
                            41750,
                            500,
                            "easeOutElastic",
                            "${Symbol_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "display",
                            31000,
                            0,
                            "easeOutCirc",
                            "${_11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            31500,
                            0,
                            "easeOutCirc",
                            "${_11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid827",
                            "left",
                            0,
                            500,
                            "easeOutCirc",
                            "${Symbol_7}",
                            '-52px',
                            '-2px'
                        ],
                        [
                            "eid172",
                            "display",
                            40750,
                            0,
                            "easeOutCirc",
                            "${Rectangle25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid173",
                            "display",
                            41250,
                            0,
                            "easeOutCirc",
                            "${Rectangle25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid747",
                            "display",
                            0,
                            0,
                            "easeOutQuint",
                            "${Symbol_6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid748",
                            "display",
                            11500,
                            0,
                            "easeOutQuint",
                            "${Symbol_6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid867",
                            "display",
                            43000,
                            0,
                            "easeOutCirc",
                            "${Symbol_6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid868",
                            "display",
                            52000,
                            0,
                            "easeOutCirc",
                            "${Symbol_6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            36250,
                            0,
                            "easeOutCirc",
                            "${Rectangle19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            36750,
                            0,
                            "easeOutCirc",
                            "${Rectangle19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            32500,
                            0,
                            "easeOutCirc",
                            "${_13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            33000,
                            0,
                            "easeOutCirc",
                            "${_13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            35500,
                            0,
                            "easeOutCirc",
                            "${Rectangle32}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "display",
                            36000,
                            0,
                            "easeOutCirc",
                            "${Rectangle32}",
                            'block',
                            'none'
                        ],
                        [
                            "eid197",
                            "display",
                            32500,
                            0,
                            "easeOutCirc",
                            "${Rectangle36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid198",
                            "display",
                            33000,
                            0,
                            "easeOutCirc",
                            "${Rectangle36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            39250,
                            0,
                            "easeOutCirc",
                            "${Rectangle23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "display",
                            39750,
                            0,
                            "easeOutCirc",
                            "${Rectangle23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid578",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid574",
                            "display",
                            11000,
                            0,
                            "easeOutBounce",
                            "${Rectangle2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid580",
                            "display",
                            14000,
                            0,
                            "easeOutCirc",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid636",
                            "display",
                            41750,
                            0,
                            "easeOutElastic",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "opacity",
                            43000,
                            1000,
                            "easeOutExpo",
                            "${Symbol_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid860",
                            "opacity",
                            7000,
                            1000,
                            "easeOutCirc",
                            "${Untitled-1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid79",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            23500,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            31750,
                            0,
                            "easeOutCirc",
                            "${_12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            32250,
                            0,
                            "easeOutCirc",
                            "${_12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            32500,
                            0,
                            "easeOutCirc",
                            "${Rectangle14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            33000,
                            0,
                            "easeOutCirc",
                            "${Rectangle14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            38500,
                            0,
                            "easeOutCirc",
                            "${Rectangle22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            39000,
                            0,
                            "easeOutCirc",
                            "${Rectangle22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            37750,
                            0,
                            "easeOutCirc",
                            "${Rectangle29}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            38250,
                            0,
                            "easeOutCirc",
                            "${Rectangle29}",
                            'block',
                            'none'
                        ],
                        [
                            "eid665",
                            "left",
                            44250,
                            750,
                            "easeOutQuint",
                            "${Ellipse}",
                            '664px',
                            '954px'
                        ],
                        [
                            "eid191",
                            "display",
                            34750,
                            0,
                            "easeOutCirc",
                            "${Rectangle33}",
                            'none',
                            'block'
                        ],
                        [
                            "eid192",
                            "display",
                            35250,
                            0,
                            "easeOutCirc",
                            "${Rectangle33}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            34000,
                            0,
                            "easeOutCirc",
                            "${Rectangle34}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            34500,
                            0,
                            "easeOutCirc",
                            "${Rectangle34}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            35500,
                            0,
                            "easeOutCirc",
                            "${Rectangle18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            36000,
                            0,
                            "easeOutCirc",
                            "${Rectangle18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid566",
                            "scaleX",
                            11000,
                            250,
                            "easeOutCirc",
                            "${Symbol_3}",
                            '0.69',
                            '1.2'
                        ],
                        [
                            "eid649",
                            "scaleX",
                            41750,
                            500,
                            "easeOutElastic",
                            "${Symbol_3}",
                            '1.2',
                            '0.66'
                        ],
                        [
                            "eid850",
                            "display",
                            8000,
                            0,
                            "easeOutCirc",
                            "${Untitled-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            34750,
                            0,
                            "easeOutCirc",
                            "${Rectangle17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            35250,
                            0,
                            "easeOutCirc",
                            "${Rectangle17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            37000,
                            0,
                            "easeOutCirc",
                            "${_19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            37500,
                            0,
                            "easeOutCirc",
                            "${_19}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            40000,
                            0,
                            "easeOutCirc",
                            "${Rectangle24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid171",
                            "display",
                            40500,
                            0,
                            "easeOutCirc",
                            "${Rectangle24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid743",
                            "display",
                            0,
                            0,
                            "easeOutQuint",
                            "${Symbol_6}",
                            'block',
                            'block'
                        ],
                        [
                            "eid744",
                            "display",
                            43500,
                            0,
                            "easeOutQuint",
                            "${Symbol_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid221",
                            "display",
                            25000,
                            0,
                            "easeOutCirc",
                            "${Rectangle46}",
                            'none',
                            'block'
                        ],
                        [
                            "eid222",
                            "display",
                            25500,
                            0,
                            "easeOutCirc",
                            "${Rectangle46}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            25750,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            26250,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            34000,
                            0,
                            "easeOutCirc",
                            "${Rectangle16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            34500,
                            0,
                            "easeOutCirc",
                            "${Rectangle16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            28500,
                            0,
                            "linear",
                            "${_07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "display",
                            0,
                            0,
                            "easeOutElastic",
                            "${pieCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid551",
                            "display",
                            22250,
                            0,
                            "easeOutElastic",
                            "${pieCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid641",
                            "display",
                            41750,
                            0,
                            "easeOutElastic",
                            "${pieCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid669",
                            "opacity",
                            44250,
                            750,
                            "easeOutQuart",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid831",
                            "opacity",
                            1596,
                            4142,
                            "easeOutCirc",
                            "${Untitled-2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid856",
                            "opacity",
                            7000,
                            1000,
                            "easeOutCirc",
                            "${Untitled-2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "display",
                            30250,
                            0,
                            "linear",
                            "${_10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            30750,
                            0,
                            "linear",
                            "${_10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid658",
                            "top",
                            43500,
                            2000,
                            "easeOutBounce",
                            "${Puerta}",
                            '0px',
                            '-830px'
                        ],
                        [
                            "eid215",
                            "display",
                            27250,
                            0,
                            "easeOutCirc",
                            "${Rectangle43}",
                            'none',
                            'block'
                        ],
                        [
                            "eid216",
                            "display",
                            27750,
                            0,
                            "easeOutCirc",
                            "${Rectangle43}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            31750,
                            0,
                            "easeOutCirc",
                            "${Rectangle37}",
                            'none',
                            'block'
                        ],
                        [
                            "eid200",
                            "display",
                            32250,
                            0,
                            "easeOutCirc",
                            "${Rectangle37}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            28500,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid679",
                            "opacity",
                            50000,
                            1000,
                            "easeOutQuint",
                            "${_0222}",
                            '1',
                            '0'
                        ],
                        [
                            "eid98",
                            "display",
                            26500,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            27000,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            36250,
                            0,
                            "easeOutCirc",
                            "${Rectangle31}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            36750,
                            0,
                            "easeOutCirc",
                            "${Rectangle31}",
                            'block',
                            'none'
                        ],
                        [
                            "eid861",
                            "display",
                            0,
                            0,
                            "easeOutCirc",
                            "${Rectangle49}",
                            'block',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            7000,
                            0,
                            "easeOutCirc",
                            "${Rectangle49}",
                            'block',
                            'none'
                        ],
                        [
                            "eid852",
                            "display",
                            8000,
                            0,
                            "easeOutCirc",
                            "${Untitled-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            33250,
                            0,
                            "easeOutCirc",
                            "${Rectangle15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "display",
                            33750,
                            0,
                            "easeOutCirc",
                            "${Rectangle15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid217",
                            "display",
                            26500,
                            0,
                            "easeOutCirc",
                            "${Rectangle44}",
                            'none',
                            'block'
                        ],
                        [
                            "eid218",
                            "display",
                            27000,
                            0,
                            "easeOutCirc",
                            "${Rectangle44}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "opacity",
                            44250,
                            750,
                            "easeOutCubic",
                            "${EllipseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "display",
                            37000,
                            0,
                            "easeOutCirc",
                            "${Rectangle20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            37500,
                            0,
                            "easeOutCirc",
                            "${Rectangle20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid174",
                            "display",
                            40750,
                            0,
                            "easeOutCirc",
                            "${Rectangle26}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            41250,
                            0,
                            "easeOutCirc",
                            "${Rectangle26}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            37750,
                            0,
                            "easeOutCirc",
                            "${Rectangle21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid159",
                            "display",
                            38250,
                            0,
                            "easeOutCirc",
                            "${Rectangle21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid653",
                            "left",
                            43000,
                            1000,
                            "easeOutExpo",
                            "${Symbol_4}",
                            '255px',
                            '335px'
                        ],
                        [
                            "eid666",
                            "left",
                            44250,
                            750,
                            "easeOutQuart",
                            "${EllipseCopy}",
                            '754px',
                            '952px'
                        ],
                        [
                            "eid195",
                            "display",
                            33250,
                            0,
                            "easeOutCirc",
                            "${Rectangle35}",
                            'none',
                            'block'
                        ],
                        [
                            "eid196",
                            "display",
                            33750,
                            0,
                            "easeOutCirc",
                            "${Rectangle35}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            25750,
                            0,
                            "linear",
                            "${_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            26250,
                            0,
                            "linear",
                            "${_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "display",
                            39250,
                            0,
                            "easeOutCirc",
                            "${Rectangle28}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "display",
                            39750,
                            0,
                            "easeOutCirc",
                            "${Rectangle28}",
                            'block',
                            'none'
                        ],
                        [
                            "eid581",
                            "display",
                            11500,
                            0,
                            "easeOutCirc",
                            "${logout}",
                            'none',
                            'block'
                        ],
                        [
                            "eid582",
                            "display",
                            41250,
                            0,
                            "easeOutCirc",
                            "${logout}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.3', '0.3']],
                            id: 'btn1',
                            type: 'image',
                            rect: ['-350px', '-350px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid65",
                            "left",
                            0,
                            1000,
                            "easeOutElastic",
                            "${btn1}",
                            '-400px',
                            '-350px'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.31', '0.31']],
                            id: 'btn2',
                            type: 'image',
                            rect: ['-295px', '-345px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '310px', '310px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid70",
                            "left",
                            0,
                            1000,
                            "easeOutElastic",
                            "${btn2}",
                            '-295px',
                            '-345px'
                        ]
                    ]
                }
            },
            "contenedorvideo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1079px', '960px', 'auto', 'auto'],
                            id: 'video',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(37,37,37,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1079px', '960px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.46', '0.46']],
                            id: '_360icon1',
                            type: 'image',
                            rect: ['-275px', '-283px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/360icon1.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: '_360icon2',
                            type: 'image',
                            rect: ['-275px', '-283px', '1000px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/360icon2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '512px', '512px']
                        }
                    }
                },
                timeline: {
                    duration: 48500,
                    autoPlay: true,
                    labels: {
                        "inicio": 0
                    },
                    data: [
                        [
                            "eid700",
                            "left",
                            48500,
                            0,
                            "easeOutElastic",
                            "${_360icon1}",
                            '-275px',
                            '-275px'
                        ],
                        [
                            "eid685",
                            "scaleX",
                            0,
                            1500,
                            "easeOutElastic",
                            "${_360icon2}",
                            '0.4',
                            '0.74'
                        ],
                        [
                            "eid687",
                            "scaleX",
                            1500,
                            1500,
                            "easeOutElastic",
                            "${_360icon2}",
                            '0.74',
                            '0.48'
                        ],
                        [
                            "eid701",
                            "top",
                            48500,
                            0,
                            "easeOutElastic",
                            "${_360icon2}",
                            '-283px',
                            '-283px'
                        ],
                        [
                            "eid702",
                            "top",
                            48500,
                            0,
                            "easeOutElastic",
                            "${_360icon1}",
                            '-283px',
                            '-283px'
                        ],
                        [
                            "eid699",
                            "left",
                            48500,
                            0,
                            "easeOutElastic",
                            "${_360icon2}",
                            '-275px',
                            '-275px'
                        ],
                        [
                            "eid686",
                            "scaleY",
                            0,
                            1500,
                            "easeOutElastic",
                            "${_360icon2}",
                            '0.4',
                            '0.74'
                        ],
                        [
                            "eid688",
                            "scaleY",
                            1500,
                            1500,
                            "easeOutElastic",
                            "${_360icon2}",
                            '0.74',
                            '0.48'
                        ]
                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'carro',
                            opacity: '0',
                            rect: ['-100px', '0px', '539px', '182px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/carro.png', '0px', '0px']
                        },
                        {
                            rect: ['370px', '40', '56', '84', 'auto', 'auto'],
                            id: 'Symbol_5',
                            symbolName: 'Symbol_5',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            type: 'image',
                            id: 'rueda',
                            opacity: '0',
                            rect: ['302px', '116px', '85px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rueda.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ruedaCopy',
                            opacity: '0',
                            rect: ['-21px', '116px', '85px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rueda.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '586px', '199px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid618",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Symbol_5}",
                            '370px',
                            '520px'
                        ],
                        [
                            "eid593",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${rueda}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid595",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${carro}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid611",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${carro}",
                            '-100px',
                            '0px'
                        ],
                        [
                            "eid594",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${ruedaCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid609",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${rueda}",
                            '302px',
                            '402px'
                        ],
                        [
                            "eid610",
                            "left",
                            0,
                            1000,
                            "easeOutQuart",
                            "${ruedaCopy}",
                            '-21px',
                            '79px'
                        ],
                        [
                            "eid619",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuart",
                            "${Symbol_5}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['22'], [0, 0, 0], [1, 1, 1]],
                            rect: ['0px', '0px', '56px', '84px', 'auto', 'auto'],
                            id: 'brocha',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/brocha.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '56px', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid632",
                            "rotateZ",
                            0,
                            2000,
                            "easeOutElastic",
                            "${brocha}",
                            '-22deg',
                            '22deg'
                        ],
                        [
                            "eid633",
                            "rotateZ",
                            2000,
                            2000,
                            "easeOutElastic",
                            "${brocha}",
                            '22deg',
                            '-22deg'
                        ]
                    ]
                }
            },
            "Symbol_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.14', '0.14']],
                            rect: ['-430px', '-430px', '1000px', '1000px', 'auto', 'auto'],
                            id: 'hand01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hand01.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.14', '0.14']],
                            rect: ['-430px', '-430px', '1000px', '1000px', 'auto', 'auto'],
                            id: 'hand02',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/hand02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid741",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuint",
                            "${hand02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid742",
                            "opacity",
                            1000,
                            1000,
                            "easeOutQuint",
                            "${hand02}",
                            '1',
                            '0'
                        ],
                        [
                            "eid735",
                            "opacity",
                            0,
                            1000,
                            "easeOutQuint",
                            "${hand01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid736",
                            "opacity",
                            1000,
                            1000,
                            "easeOutQuint",
                            "${hand01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid733",
                            "left",
                            0,
                            1000,
                            "easeOutQuint",
                            "${hand01}",
                            '-350px',
                            '-430px'
                        ],
                        [
                            "eid737",
                            "left",
                            1000,
                            1000,
                            "easeOutQuint",
                            "${hand01}",
                            '-430px',
                            '-290px'
                        ],
                        [
                            "eid734",
                            "top",
                            0,
                            1000,
                            "easeOutQuint",
                            "${hand01}",
                            '-340px',
                            '-430px'
                        ],
                        [
                            "eid738",
                            "top",
                            1000,
                            1000,
                            "easeOutQuint",
                            "${hand01}",
                            '-430px',
                            '-300px'
                        ]
                    ]
                }
            },
            "Symbol_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1080px', '1920px', 'auto', 'auto'],
                            id: 'Untitled-3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Untitled-3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '1px', '1080px', '1920px', 'auto', 'auto'],
                            id: 'Untitled-4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Untitled-4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1080px', '1920px']
                        }
                    }
                },
                timeline: {
                    duration: 5738,
                    autoPlay: true,
                    data: [
                        [
                            "eid751",
                            "top",
                            0,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid765",
                            "top",
                            101,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid766",
                            "top",
                            201,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid767",
                            "top",
                            302,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid768",
                            "top",
                            403,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid769",
                            "top",
                            503,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid770",
                            "top",
                            604,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid771",
                            "top",
                            705,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid772",
                            "top",
                            805,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid773",
                            "top",
                            906,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid774",
                            "top",
                            1007,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid775",
                            "top",
                            1107,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid776",
                            "top",
                            1208,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid777",
                            "top",
                            1309,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid778",
                            "top",
                            1409,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid779",
                            "top",
                            1510,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid780",
                            "top",
                            1611,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid781",
                            "top",
                            1711,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid782",
                            "top",
                            1812,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid783",
                            "top",
                            1913,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid784",
                            "top",
                            2013,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid785",
                            "top",
                            2114,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid786",
                            "top",
                            2215,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid787",
                            "top",
                            2315,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid788",
                            "top",
                            2416,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid789",
                            "top",
                            2517,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid790",
                            "top",
                            2617,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid791",
                            "top",
                            2718,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid792",
                            "top",
                            2819,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid793",
                            "top",
                            2919,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid794",
                            "top",
                            3020,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid795",
                            "top",
                            3121,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid796",
                            "top",
                            3221,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid797",
                            "top",
                            3322,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid798",
                            "top",
                            3423,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid799",
                            "top",
                            3523,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid800",
                            "top",
                            3624,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid801",
                            "top",
                            3725,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid802",
                            "top",
                            3825,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid803",
                            "top",
                            3926,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid804",
                            "top",
                            4027,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid805",
                            "top",
                            4127,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid806",
                            "top",
                            4228,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid807",
                            "top",
                            4329,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid808",
                            "top",
                            4429,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid809",
                            "top",
                            4530,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid810",
                            "top",
                            4631,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid811",
                            "top",
                            4731,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid812",
                            "top",
                            4832,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid813",
                            "top",
                            4933,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid814",
                            "top",
                            5033,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid815",
                            "top",
                            5134,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid816",
                            "top",
                            5235,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid817",
                            "top",
                            5335,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid818",
                            "top",
                            5436,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid819",
                            "top",
                            5537,
                            100,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid820",
                            "top",
                            5637,
                            101,
                            "easeOutCirc",
                            "${Untitled-4}",
                            '0px',
                            '1px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Untitled-1_edgeActions.js");
})("EDGE-675552106");
