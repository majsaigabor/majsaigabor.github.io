(function() {

    let c;

    function getNumber(){
        return (getNumber.number = Math.floor(Math.random() * (4 + 1))) === getNumber.lastNumber ? getNumber() : getNumber.lastNumber = getNumber.number;
    }

    function randomimage(){
        if(c) {
            document.querySelector('#root').classList.toggle(`a${c}`);
        }
        c = getNumber();
        document.querySelector('#root').classList.toggle(`a${c}`);
    };

    randomimage();
    setInterval(randomimage,12000);
    document.querySelector('#history').onclick = () => {
        $('#overlay-target').html('<h1>Majsai Gábor vagyok...</h1><p><span class="fr boxi"><img src="./images/besenyo2.jpg"></span>Azt hiszem, nem tévedek nagyot, ha úgy gondolom, az <strong>Öreg járgány szívatóval indul</strong> című dalomnak köszönhetően ismert meg az ország. Egy 1993-as pop-rock fesztivált nyertünk meg vele akkori zenekarommal, a <strong>Besenyő Blues Band</strong>del, amit eredetileg csak saját szórakoztatásunkra hoztunk létre. Aztán olyan nagy sikere lett a dalnak, hogy Emerton díjat kaptunk, CD-nk jelent meg, és koncertjeimen még manapság is gyakran kéri tőlem a közönség.</p><p>Akkoriban jöttem haza hosszabb külföldi tartózkodásomat követően, mert <strong>Cserháti Zsuzsával</strong> és az <strong>Europa Group</strong>pal jó pár évig turnéztunk kint, később pedig más magyar és német zenekarokkal, majd szólóban bejártam egész Európát Skandináviától Spanyolországig. Olyan sztárok előtt léphettem fel, mint a Four Tops, James Brown vagy a Modern Talking.</p><p><span class="fl boxi"><img src="./images/tj1.jpg"></span>Már ezen a versenyen is sokan <strong>Tom Jones</strong>-oztak, a közönség, a szakma, a sajtó egyöntetű lelkesedéssel kezdett a „Walesi Hang”-hoz hasonlítani külsőm és hangom alapján egyaránt, úgyhogy magam is elgondolkodtam rajta. <strong>Amikor egy kiadó megkeresett azzal az ajánlattal, hogy Tom Jones dalait énekeljem el magyarul, nem haboztam.</strong></p><p>Így készült el első szólólemezem <strong>BaráTom Jones</strong> címmel. Mivel a közönség szimpátiája azóta is kíséri ezt az anyagot, nagy örömmel énekelem újra és újra.</p><p><span class="fr boxi"><img src="./images/cd/fvg1.jpg"></span>A 2000-es évek elején Vágó István hívó szavára alakítottunk egy zenekart Heilig Gáborral, Gallai Péterrel, Látó Jánossal és Makrai Palival <strong>Favágók</strong> néven. A humor és szórakoztatás jegyében készítettük el CD-inket Első reccsenet, majd Második reccsenet címmel, és élő zenei műsorral jártuk az országot. Minden nyáron megfordultunk a Balaton körül (emlékezetes keszthelyi koncertjeinkről a helyiek sokat tudnának mesélni), de nem múlhatott el nyárutó a Budai Parkszínpad teltházas nagykoncertjei nélkül. Sikeres és vidám évek voltak.</p><p>Zenei kirándulásképpen Dés László és Geszti Péter szerzeményét, az <strong>Üvegtigris főcímdalát, a Rossz pénzt énekeltem</strong>, néhány rajzfilmfigurának kölcsönöztem hangszálaimat, vagy <strong>Vörös Pisti</strong>vel, régi barátommal zenéltünk együtt a Petőfi csarnokban. <strong>"A vendégek, Leonard Cohen dalai" CD-n a Jövő című dalt</strong> énekeltem, de vezettem műsort is a 9S tévében, Kotta nélkül címmel, ahova az ország neves művészeit hívtam meg.</p><p><span class="fl boxi"><img src="./images/cd/poker.jpg"></span>2006-ban, egyéves munkám gyümölcseként a boltokba kerülhetett <strong>Póker</strong> c. önálló lemezem, amelynek kapcsán az egész évet végigturnéztam, és <strong>Jöhet a zápor</strong> c. dalom hónapokig slágerlistás volt országszerte.</p><p>2007 jelentett azután valódi fordulópontot az életemben, ugyanis ekkor jelent meg <strong>Swing, swing, swing</strong> címmel nagyzenekari albumom, amelyen klasszikus amerikai jazz nótákat énekelek igényes, új magyar szövegekkel. Ennek apropóján mostanában néhányan a swing zene hazai nagykövetének neveznek, ami nyilván túlzás, de az elmondható, hogy talán éppen akkor robbant be ez a lemez, amikor a piacon igény mutatkozott rá.</p><p><span class="fr boxi"><img src="./images/cd/sss.jpg"></span><br />Ez a stílus sosem volt számomra idegen, ahhoz azonban nagy lélegzetvétel kellett, hogy egy big banddel (20 tagú zenekarral) vágjak bele, elsőként a magyar piacon, ráadásul magyar nyelven.Sok munkánkba került, de arra gondoltam, ezt most kell meglépnem, most érett meg bennem. Ehhez a zenéhez igényes fülek kellenek a hallgatóság részéről, de úgy tűnik, ebből egyre több van, amit mi sem bizonyít jobban, mint hogy a Swing, swing, swing rövid idő alatt aranylemez lett. Mindez talán számomra volt a legnagyobb meglepetés, de az album 2008-ban ráadásul Fonogram-jelölést kapott az év legjobb jazz albuma kategóriában.</p><p><span class="fl boxi"><img src="./images/cd/swb.jpg"></span>A sikerre való tekintettel 2010 novemberében szintén swing alapokra építő, bár boogie-woogie elemekkel turbózott új albummal jelentkeztem, a címe: <strong>Swing és a Boogie.</strong> Játékosabb, könnyedebb, de nem kevésbé igényes hangzású saját dalok és pár klasszikus is hallható rajta, sőt egy Louis Armstrong-nóta erejéig (Bölcsődal) kisebbik fiammal, Rolanddal énekelünk duettet. </p><p>A <strong>Majsai Swing Stars</strong> nevű öttagú zenekaromat is az az igény hozta létre, hogy megpróbáljuk interpretálni a nagyzenekari hangzást egyszerűbb logisztikával, hiszen lényegesen könnyebb vele az ország bármely pontjára eljutni, mint a big banddel. Időközben Roland fiam igazi érett jazz zenésszé nőtte ki magát, és zenekarom állandó dobosa lett.</p><p><span class="fr boxi"><img src="./images/cd/hang.jpg"></span>2016-os albumom már kicsit tovább kalandozik, egészen az electro swing világa felé. Leginkább saját szerzeményeim kaptak helyet rajta, és bevallom, a soul, a rhythm and blues és más, számomra kedves műfajok is megjelennek a dalokban, ahogy épp a hangulatom diktálja. Ezért is lett a lemez címe <strong>Hangulatok</strong>. Az album sokszínű hangzását hűen tükrözi pop-art jellegű lemezborítója, amely idősebbik fiam, Richárd – Majsair Design – tervezői munkáját dicséri.</p><p>A lemezekkel és fellépésekkel kapcsolatban minden újdonság és érdekesség megtalálható facebook oldalamon, <a href="https://www.facebook.com/majsaigabor" target="_blank">facebook.com/majsaigabor</a>, valamint állandó partnereim, a <a href="http://www.zene.hu" target="_blank">zene.hu</a> és a <a href="http://www.jazzy.hu" target="_blank">jazzy.hu</a> oldalakon.</p><p>Ami azt illeti, innen már nem volt megállás: az elmúlt évek számtalan bigband-felkérése, nyári fesztiválja, klubkoncertje mind azt igazolta, hogy valami elindult a swing régi-új műfajával kapcsolatban. Talán felnőtt hozzá egy generáció itthon és külföldön egyaránt, mert lelkes ováció fogadja az élő zenét a színpadon. Néha engem is erről kérdeznek: mekkora szerepe van a régi stílusoknak a zeném alakításában, illetve hogyan viszonyulok a legfrissebb trendekhez. Nos, nagy tisztelője vagyok a régi zenészeknek, szívesen hallgatom őket még bakeliten is, ami magától értetődően formálja az ízlésemet. A mai időknek is megvannak azonban az értékei, léteznek kiemelkedő produkciók, amelyekre érdemes odafigyelni. Tulajdonképpen megpróbálom valahogy önmagamon átszűrve egybe olvasztani mindezt, és a múlt értékeit megőrizve aktuális maradni. A zene világában nincs olyan, hogy idő. Csak jó produkció van, ami időtálló. Nincsenek elveszett évek sem. Van, aki egy perc alatt jut fel a csúcsra, de a sors nekem nem ezt adta, és ezt nem is bánom. Egész életemben a zenét szerettem, és ezt csinálhattam, ami már önmagában egy ajándék.</p><span class="boxi bio"><img src="./images/design/bio.jpg" /></span>');
    };
    document.querySelector('#navitop').onclick = () => {
        document.querySelector('.contact_info').classList.toggle('open');
        document.querySelector('#navitop').classList.toggle('open');
    };

    var overlay = document.getElementById('nav-overlay');
    var scrollPos = document.querySelector("body").scrollTop; // [1]

    $('body').on( "click", ".c-nav-toggle--opener", function() {
        document.querySelector(".c-nav-overlay").classList.toggle("c-nav-overlay--open");
        document.querySelector("body").classList.toggle("is-overlay-open");
        document.getElementById("nav-overlay").setAttribute("aria-expanded", "true");
        document.querySelector('.story-content').focus();
       // trapFocus(overlay);
    });

    $('body').on( "click", ".c-nav-toggle--closer", function() {
        document.querySelector(".c-nav-overlay").classList.toggle("c-nav-overlay--open");
        document.querySelector("body").classList.toggle("is-overlay-open");
        document.getElementById("nav-overlay").setAttribute("aria-expanded", "false");
        document.querySelector("body").scrollTop = scrollPos; // [1]
        document.querySelector('#overlay-target').scrollTop = scrollPos; // [1]
        $('#overlay-target').html('');
    });

    $('body').on('click', '.article-opener', function(e) {
        $('#overlay-target').html(contents[e.target.id]);
    });

    const contents = {};

    $.ajax({
        url: "./hirek.php",
        context: document.body
    })
    .done(function(arr) {
        $.each(arr, function(idx, item) {
            const { id, type, content } = item;
            let newContent = content;
            contents[`article-${id}`] = content;
            
            if(type === 'article') {
                const SIZE = 450;
                const SAMPLE = 20;
                const a = newContent.slice(0,SIZE);
                const t = a.slice(-SAMPLE);
                newContent = t.includes('<') ? a.slice(0, SIZE-(SAMPLE-t.indexOf('<'))) : `${a}...`;
                newContent += ` <a id="article-${id}" class="c-nav-toggle c-nav-toggle--opener article-opener" aria-controls="nav-overlay" >olvass tovább</a>`;
            }

            $('#content .row')
                .append(
                    $('<div></div>')
                        .attr('id',`hir-${id}`)
                        .addClass(`${type} box video col-xl-5 col-md-11 col-sm-11`)
                        .html(`<div class="content">${newContent}</div>`)
            );
        });
        SimpleScrollbar.initEl(document.querySelector('#content'));
    });


})();

/* 
    Trap focus function for the overlay
    https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
*/

function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'),
        firstFocusableEl = focusableEls[0];  
        lastFocusableEl = focusableEls[focusableEls.length - 1];
        KEYCODE_TAB = 9;

    element.addEventListener('keydown', function(e) {
        var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) { 
            return; 
        }

        if ( e.shiftKey ) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }

    });
}