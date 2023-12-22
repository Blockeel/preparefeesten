const kandidaten = [
    {"category": "americain", "butcher": "Renmans Berg", "butcherAddress": "Kutsegemstraat 47<br/> 1910 Kampenhout", "sponsor": "Bas", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Eigen Creatie", "butcherAddress": "", "sponsor": "Beno", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Keurslager Danny & Inge", "butcherAddress": "Gontrode Heirweg 10<br/>9820 Merelbeke", "sponsor": "Blockeel", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Eigen Creatie", "butcherAddress": "", "sponsor": "Cé", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Slagerij Abel", "butcherAddress": "Ledebergstraat 6/420<br/> 9050 Ledeberg", "sponsor": "Chris", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Slagerij Freyne", "butcherAddress": "Predikherenstraat 1<br/> 8000 Brugge", "sponsor": "Dicky", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Renmans Zelzate", "butcherAddress": "Rijkswachtlaan 8<br/> 9060 Zelzate", "sponsor": "James", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Eigen Creatie", "butcherAddress": "", "sponsor": "Lebbe", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Dierendonck Brussel", "butcherAddress": "Sint-Katelijnestraat 24<br/> 1000 Brussel", "sponsor": "Loïc", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Slagerij Mortier", "butcherAddress": "Camille van der Cruyssenstraat 43<br/>9850 Nevele", "sponsor": "Tomas", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Slagerij Van De Casteele", "butcherAddress": "Frans van Ryhovelaan 226<br/>9000 Gent", "sponsor": "Wannes", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Boucherie Mazure", "butcherAddress": "Kapellestraat 4<br/>8400 Oostende", "sponsor": "Jwif", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Cru", "butcherAddress": "Kouter 177<br/>9000 Gent", "sponsor": "Finalist 2022", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "americain", "butcher": "Keurslager Somers", "butcherAddress": "Heuvelstraat 104<br/>2530 Boechout", "sponsor": "Finalist 2022", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    
    {"category": "chef", "butcher": "Renmans Berg", "butcherAddress": "Kutsegemstraat 47<br/> 1910 Kampenhout", "sponsor": "Bas", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Broodjeszaak 't Smoske", "butcherAddress": "Haachtsesteenweg 22<br/>1910 Kampenhout", "sponsor": "Bas", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Eigen Creatie", "butcherAddress": "", "sponsor": "Beno", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Keurslager Danny & Inge", "butcherAddress": "Gontrode Heirweg 10<br/>9820 Merelbeke", "sponsor": "Blockeel", "meat": "Rund", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Bakkerij Mertens", "butcherAddress": "Lourdesstraat 73<br/>9041 Gent", "sponsor": "Bram", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Slagerij Abel", "butcherAddress": "Ledebergstraat 6/420<br/> 9050 Ledeberg", "sponsor": "Chris", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Slagerij De Koepoort", "butcherAddress": "Bruulstraat 59<br/>9450 Haaltert", "sponsor": "Gitti", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Eigen Creatie", "butcherAddress": "", "sponsor": "James", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Slagerij Willem", "butcherAddress": "Het Kloosterhof 9<br/>8200 Brugge", "sponsor": "Kirk", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Dierendonck Brussel", "butcherAddress": "Sint-Katelijnestraat 24<br/> 1000 Brussel", "sponsor": "Loïc", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Slagerij Mortier", "butcherAddress": "Camille van der Cruyssenstraat 43<br/>9850 Nevele", "sponsor": "Tomas", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Mystery Nomination", "butcherAddress": "", "sponsor": "Ulysse", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Beenhouwerij Cornelissen", "butcherAddress": "Wolvertemsesteenweg 93<br/>1850 Grimbergen", "sponsor": "Wannes", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Bakkerij Vanderveken", "butcherAddress": "Tervuursesteenweg 159/N227, 1820 Perk", "sponsor": "Charlotte", "meat": "", "rank": { "vak": 0, "volk": 0 }},
    {"category": "chef", "butcher": "Keurslager Somers", "butcherAddress": "Heuvelstraat 104<br/>2530 Boechout", "sponsor": "Finalist 2022", "meat": "", "rank": { "vak": 0, "volk": 0 }}    
];

$(document).ready(function () {


        const americainKandidaten = document.getElementById("americain-kandidaten");
        const chefKandidaten = document.getElementById("chef-kandidaten");

        //filter
        var VakResultsAmericain = kandidaten.filter(function (item) {
            return item.rank.vak > 0 && item.category === 'americain'
        });
        var VakResultsAmericain = VakResultsAmericain.sort(function (a, b) {
            return a.rank.vak - b.rank.vak
        });
        var VolkResultsAmericain = kandidaten.filter(function (item) {
            return item.rank.volk > 0 && item.category === 'americain'
        });
        var VolkResultsAmericain = VolkResultsAmericain.sort(function (a, b) {
            return a.rank.volk - b.rank.volk
        });
        var VakResultsChef = kandidaten.filter(function (item) {
            return item.rank.vak > 0 && item.category === 'chef'
        });
        var VakResultsChef = VakResultsChef.sort(function (a, b) {
            return a.rank.vak - b.rank.vak
        });
        var VolkResultsChef = kandidaten.filter(function (item) {
            return item.rank.volk > 0 && item.category === 'chef'
        });
        var VolkResultsChef = VolkResultsChef.sort(function (a, b) {
            return a.rank.volk - b.rank.volk
        });

        console.log(VakResultsAmericain);
        console.log(VolkResultsAmericain);
        console.log(VakResultsChef);
        console.log(VolkResultsChef);

        if (VakResultsAmericain.length > 0 || VakResultsChef.length > 0) { document.getElementById('resultsVak').style.display = "block"; }
        if (VolkResultsAmericain.length > 0 || VolkResultsChef.length > 0) { document.getElementById('resultsVolk').style.display = "block"; }

        listTopAndInsert(VakResultsAmericain, 'resultsVakAmericain');
        listTopAndInsert(VakResultsChef, 'resultsVakChef');
        listTopAndInsert(VolkResultsAmericain, 'resultsVolkAmericain');
        listTopAndInsert(VolkResultsChef, 'resultsVolkChef');

        function listTopAndInsert(relevantArray, relevantContainer) {
            $.each(relevantArray, function (key, value) {
                var tempInfo = ''
                tempInfo += '<li>';
                tempInfo += '<strong>' + value.butcher + '</strong>';
                tempInfo += '<ul class="butcherDetails">';
                if (value.butcherAddress) { tempInfo += '<li class="icon location">' + value.butcherAddress + '</li>'; }
                if (value.meat && value.category==='chef') { tempInfo += '<li class="icon meat">' + value.meat + '</li>'; }
                if (value.sponsor) { tempInfo += '<li>genomineerd door ' + value.sponsor + '</li>'; }
                tempInfo += '</ul>';
                tempInfo += '</li>';


                document.getElementById(relevantContainer).innerHTML += tempInfo;
            });

        }

        $.each(kandidaten, function (key, value) {

            if (value.butcher || value.butcherAddress) {

                var tempInfo = ''
                tempInfo += '<li>';
                tempInfo += '<strong>' + value.butcher + '</strong>';
                tempInfo += '<ul class="butcherDetails">';
                if (value.butcherAddress) { tempInfo += '<li class="icon location">' + value.butcherAddress + '</li>'; }
                if (value.meat && value.category==='chef') { tempInfo += '<li class="icon meat">' + value.meat + '</li>'; }
                if (value.sponsor) { tempInfo += '<li>genomineerd door ' + value.sponsor + '</li>'; }
                tempInfo += '</ul>';
                tempInfo += '</li>';

                switch (value.category) {
                    case 'americain':
                        americainKandidaten.innerHTML += tempInfo;
                        break;
                    case 'chef':
                        chefKandidaten.innerHTML += tempInfo;
                        break;
                    default:
                        console.log('category ' + value.category + 'not valid')

                }
            }
        });
    
}); 