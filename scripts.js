const kandidaten = [
    {
        "category": "americain",
        "butcher": "Keurslager Danny & Inge",
        "butcherAddress": "Gontrode Heirweg 10<br/>9820 Merelbeke",
        "sponsor": "Blockeel",
        "meat": "Rund",
        "rank": { "vak": 0, "volk": 0 }
    }
    , {
        "category": "chef",
        "butcher": "Keurslager Danny & Inge",
        "butcherAddress": "Gontrode Heirweg 10<br/>9820 Merelbeke",
        "sponsor": "Blockeel",
        "meat": "Rund, Varken",
        "rank": { "vak": 0, "volk": 0 }
    }
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
                if (value.meat) { tempInfo += '<li class="icon meat">' + value.meat + '</li>'; }
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
                if (value.meat) { tempInfo += '<li class="icon meat">' + value.meat + '</li>'; }
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