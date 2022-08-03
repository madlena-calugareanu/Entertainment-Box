
    const people = [];

    const questionsQuiz = [
        "Care este cea mai faimoasă persoană pe care ai cunoscut-o vreodată?"
        ,
        "Dacă ai putea dobândi o nouă abilitate într-o clipă, care ar fi aceasta?"
        ,
        "Cine este cineva pe care îl admiri cu adevărat?"
        ,
        "Care este cea mai veche amintire a ta?"
        ,
        "Ce te-a făcut să zâmbești recent?"
        ,
        "Care este locul tău preferat pe care l-ai vizitat vreodată?"
        ,
        "Care este tradiția ta preferată de familie?"
        ,
        "Ce ceva nou vrei să faci anul acesta?"
        ,
        "Care este cel mai bun sfat pe care l-ai auzit vreodată?"
        ,
        "Colectionezi ceva?"
        ,
        "Care este cel mai folosit emoji al tău?"
        ,
        "Care este cea mai faimoasă persoană pe care ai cunoscut-o vreodată?"
        ,
        "Dacă ai putea dobândi o nouă abilitate într-o clipă, care ar fi aceasta?"
        ,
        "Cine este cineva pe care îl admiri cu adevărat?"
        ,
        "Care este cea mai veche amintire a ta?"
        ,
        "Ce te-a făcut să zâmbești recent?"
        ,
        "Care este locul tău preferat pe care l-ai vizitat vreodată?"
        ,
        "Dacă ai fi luptător, care ar fi melodia ta de intrare?"
        ,
        "Dacă ai putea aduce înapoi orice tendință de modă, care ar fi aceasta?"
        ,
        "Dacă ai avea un talk show de noapte, pe cine ai invita ca primul tău invitat?"
        ,
        "Dacă s-ar face un film din viața ta, ce gen ar fi și cine te-ar interpreta?"
        ,
        "Dacă ar fi neapărat să cânți karaoke, care ar fi melodia ta preferată?"
        ,
        "Dacă ar fi să mănânci o singură masă pentru tot restul vieții, care ar fi aceasta?"
        ,
        "Dacă ai fi lăsat pe o insulă pustie fie cu cel mai mare dușman al tău, fie cu nimeni, pe care ai alege? De ce?"
        ,
        "Dacă extratereștrii ar ateriza mâine pe Pământ și s-ar oferi să te ia acasă cu ei, ai merge?"
        ,
        "Care ar fi titlul autobiografiei tale?"
        ,
        "În copilărie, ce ai vrut să fii când crești mare?"
        ,
        "Ce lume sau loc fictiv ai vrea să vizitezi?"
        ,
        "Care este momentul tău preferat al zilei și de ce?"
        ,
        "Ce rasă de câini ai fi?"
        ,
        "Dacă ai avea o mașină a timpului, te-ai întoarce în timp sau în viitor?"
        ,
        "Care este cea mai ciudată mâncare pe care ai mâncat-o vreodată?"
        ,
        "Dacă ai putea sta cu orice personaj din desene animate, pe cine ai alege și de ce?"
        ,
        "Dacă ai putea trăi oriunde în lume timp de un an, unde ai fi?"
        ,
        "Dacă ai putea alege oricare doi oameni celebri cu care să ia cina, cine ar fi ei?"
        ,
        "Dacă ai putea fi orice animal din lume, ce animal ai alege să fii?"
        ,
        "Dacă te-ai putea redenumi, ce nume ai alege?"
        ,
        "Care este cel mai aventuros lucru pe care l-ai făcut vreodată?"
        ,
        "Care este cel mai ciudat lucru în care credeai când erai copil?"
                
    ]; 
    const debatable = [
        "Testarea pe animale ar trebui interzisă."
        ,
        "Femeile ar trebui să fie plătite mai puțin decât bărbații în anumite profesii."
        ,
        "Femeile ar trebui să aibă aceleași standarde fizice pentru a deveni pompier sau ofițer de poliție sau pentru a se alătura armatei."
        ,
        "Dependenții de droguri ar trebui să primească ajutor, nu pedepse."
        ,
        "Persoanele care fumează ar trebui să plătească mai mult pentru asistența medicală."
        ,
        "Toate drogurile recreative ar trebui legalizate."
        ,
        "Fiecare are dreptul să dețină o armă."
        ,
        "Clonarea umană ar trebui permisă."
        ,
        "Jocurile video îi fac pe oameni violenți."
        ,
        "Marijuana ar trebui legalizată."
        ,
        "Salariul minim nu este necesar."
        ,
        "E prea târziu pentru a opri schimbările climatice."
        ,
        "Bogații ar trebui să aibă cote de impozitare mai mari."
        ,
        "A fi cu adevărat scund este mai bine decât a fi cu adevărat înalt."
        ,
        "Zborul este cea mai bună superputere."
        ,
        "Ar fi groaznic să știm ce gândesc alții tot timpul."
        ,
        "Luni este cea mai proastă zi."
        ,
        "Pedeapsa cu moartea ar trebui abolită."
        ,
        "Grădinile zoologice ar trebui interzise."
        ,
        "Vârsta de vot ar trebui redusă la 16 ani."
        ,
        "Jocurile video violente ar trebui interzise."
        ,
        "Țara noastră ar trebui să introducă un venit de bază universal."
        ,
        "Relațiile la distanță nu funcționează niciodată."
        ,
        "O educație universitară nu este necesară în zilele noastre."
        ,
        "Rețelele sociale contribuie la creșterea ratelor de sinucidere."
        ,
        "Nu este potrivit să predați religia în școli."
        ,
        "Democrația este cea mai bună formă de guvernare."
        ,
        "Companiile au prea multe informații despre noi."
        ,
        "Pizza este mai delicioasă decât un hamburger."
        ,
        "Ai renunța la un deget în schimbul unui milion de dolari?"
        ,
        "O gorilă ar câștiga într-o luptă cu un urs."
        ,
        "Nu ar exista război dacă toți liderii lumii ar fi femei."
        ,
        "Adolescenții ar trebui să aibă locuri de muncă după școală."
        ,
        "Banii te fac mai fericit."
        ,
        "Nu ar trebui să mâncăm atât de multă carne."
        ,
        "Nu ar trebui permise pungile de plastic."
        ,
        "Oamenii de dimineață sunt mai productivi decât bufnițele de noapte."
        ,
        "Clienții nu au întotdeauna dreptate."
        ,
        "Trișarea la examene este uneori acceptabilă."
        ,
        "Întâlnirile online sunt o modalitate bună de a întâlni oameni."
        ,
        "Elevilor ar trebui să li se ceară să învețe o altă limbă la școală."
        ,
        "Engleza este cea mai importantă limbă de învățat."
        ,
        "Vacanța de vară este mai bună decât vacanța de iarnă."
        ,
        "Oamenii pierd prea mult timp pe rețelele de socializare."
        ,
        "Conviețuirea împreună înainte de căsătorie este utilă."
        ,
        "Reclamele pentru copii ar trebui interzise."
        ,
        "Copiii nu ar trebui să aibă smartphone-uri."
        ,
        "Copiii nu ar trebui să aibă voie să se uite la televizor."
        ,
        "Temele nu ar trebui permise în școli."
        ,
        "Educația la domiciliu este mai bună decât școala obișnuită."
        ,
        "Școlile ar trebui să interzică telefoanele."
        ,
        "Arta nu este un subiect important."
        ,
        "Muzica nu este un subiect important."
        ,
        "A trăi pentru totdeauna ar fi groaznic."
        ,
        "A fi arătos este mai bine decât a fi inteligent."
        ,
        "E mai bine să stai acasă decât să ieși."
        ,
        "Ananasul nu are locul pe pizza."
        ,
        "Pizza cu crusta subțire este mai bună decât cea groasă."
        ,
        "Oamenii nu ar trebui să se întâlnească niciodată cu un coleg."
        ,
        "Cărțile adevărate sunt mai bune decât cărțile electronice."
        ,
        "Prizonierii nu ar trebui să aibă voie să voteze."
        ,
        "Oamenii bogați ar trebui să plătească mai mult taxe."
        ,
        "Testele pe animale ar trebui interzise."
        ,
        "Avortul ar trebui interzis."
        ,
        "Universitatea ar trebui să fie fără școlarizare."
        ,
        "Alimentele modificate genetic ar trebui interzise."
        ,
        "Toată lumea ar trebui să devină vegană pentru a opri schimbările climatice."
        ,
        "Inteligența artificială va fi într-o zi periculoasă pentru oameni."
        ,
        "Guvernul ar trebui să finanțeze integral sănătatea și îngrijirea dentară."    
    ]  
    const cineAr = [
        "Cel mai probabil să uite ziua de naștere a celui mai bun prieten al lor?"
        ,
        "Cel mai probabil să mănânci ceva de pe pământ?"
        ,
        "Cel mai probabil să furați din magazin?"
        ,
        "Cel mai probabil să-și cheltuiască toți banii pe ceva stupid?"
        ,
        "Cel mai probabil să-ți faci un tatuaj groaznic?"
        ,
        "Cel mai probabil să facă un trio?"
        ,
        "Cel mai probabil să deveniți CEO?"
        ,
        "Cel mai probabil să te căsătorești cu o celebritate?"
        ,
        "Cel mai probabil să nu se căsătorească niciodată?"
        ,
        "Cel mai probabil să aibă o aventură?"
        ,
        "Cel mai probabil să divorțeze?"
        ,
        "Cel mai probabil să se alăture unui cult?"
        ,
        "Cel mai probabil să comită o crimă?"
        ,
        "Cel mai probabil să se culce cu fostul lor?"
        ,
        "Cel mai probabil să aibă o aventură de o noapte?"
        ,
        "Cel mai probabil să-i dea copilului lor un nume neobișnuit (îngrozitor)?"
        ,
        "Cel mai probabil să petreci ore întregi într-o gaură a teoriei conspirației YouTube?"
        ,
        "Cel mai probabil să fii prins făcând sex în public?"
        ,
        "Cel mai probabil să se piardă în propriul oraș natal?"
        ,
        "Cel mai probabil să vă îmbătați prea mult la băuturile înainte?"
        ,
        "Cel mai probabil să fii dat afară din club?"
        ,
        "Cel mai probabil să aibă propriul reality show?"
        ,
        "Cel mai probabil să deveniți un influencer?"
        ,
        "Cel mai probabil să se căsătorească cu cineva pe care tocmai l-au cunoscut?"
        ,
        "Cel mai probabil să te culci cu un membru al familiei unui prieten?"
        ,
        "Cel mai probabil să păstrezi un secret?"
        ,
        "Cel mai probabil să stai o săptămână fără duș?"
        ,
        "Cel mai probabil să-și falsifice propria moarte?"
        ,
        "Cel mai probabil să mai dețineți un Nokia 3310?"
        ,
        "Cel mai probabil să otrăviți accidental pe cineva cu gătit groaznic?"
        ,
        "Cine este cel mai probabil să-și petreacă tot weekendul privind un nou serial TV?"
        ,
        "Cine este cel mai probabil să nu aibă niciodată copii?"
        ,
        "Cine este cel mai probabil să fie pe covorul roșu într-o zi?"
        ,
        "Cine este cel mai probabil să trăiască cel mai mult?"
        ,
        "Cine este cel mai probabil să adopte stilul de viață #vanlife?"
        ,
        "Cine este cel mai probabil să-și ducă toate secretele în mormânt?"
        ,
        "Cine este cel mai probabil să-și dețină propria fermă în țară?"
        ,
        "Cine este cel mai probabil să fie primul care se căsătorește?"
        ,
        "Cine este cel mai probabil să găsească accidental un portal către altă dimensiune?"
        ,
        "Cine este cel mai probabil să plângă în timpul unui film trist?"
        ,
        "Cine este cel mai probabil să scape de smartphone-ul și să revină la utilizarea unui telefon cu flip?"
        ,
        "Cine este cel mai probabil să fi citit cel mai mare număr de țări?"
        ,
        "Cine este cel mai probabil să participe la Jocurile Olimpice?"
        ,
        "Cine este cel mai probabil să devină milionar?"
        ,
        "Cine este cel mai probabil să se mute într-o țară străină?"
        ,
        "Cine este cel mai probabil să apară la ușă cu supă când ești bolnav?"
        ,
        "Cine este cel mai probabil să nu-ți uite ziua de naștere?"
        ,
        "Cine este cel mai probabil să se trezească primul dimineața într-o excursie cu prietenii?"
        ,
        "Cine este cel mai probabil să devină un stand-up comedian?"
        ,
        "Cine este cel mai probabil să comande mâncare la pachet atunci când are deja resturi în frigider?"
        ,
        "Cine este cel mai probabil să primească o amendă de viteză într-o călătorie?"
        ,
        "Cine este cel mai probabil să știe exact ce să spună când te simți trist?"
        ,
        "Cine este cel mai probabil să se căsătorească în Vegas?"
        ,
        "Cine este cel mai probabil să ajungă ca concurent la un show național de talente?"
        ,
        "Cine este cel mai probabil să se rănească în timp ce face treburile în apartamentul lor?"
        ,
        "Cine este cel mai probabil să aibă o coafură nouă data viitoare când le vezi?"
        ,
        "Cine este cel mai probabil să moară primul într-un film de groază?"
        ,
        "Cine este cel mai probabil să se scufunde?"
        ,
        "Cine este cel mai probabil să fie spion?"
        ,
        "Cine este cel mai probabil să-și renoveze întreaga casă?"
        ,
        "Cine este cel mai probabil să-și dea toți banii în scopuri caritabile?"
        ,
        "Cine este cel mai probabil să se strecoare în filme?"
        ,
        "Cine este cel mai probabil să devină profesor la liceu?"
        ,
        "Cine este cel mai probabil să întârzie la brunch pentru că s-a oprit să mângâie un câine?"
        ,
        "Cine este cel mai probabil să termine o halbă de înghețată într-o singură ședință?"
        ,
        "Cine este cel mai probabil să cumpere mai multă lenjerie în loc să spele rufele?"
        ,
        "Cine este cel mai probabil să conducă un protest?"
        ,
        "Cine este cel mai probabil să se închidă din locul lor?"
        ,
        "Cine este cel mai probabil să sforăie?"
        ,
        "Cine este cel mai probabil să știe despre noul restaurant fierbinte înaintea tuturor?"
        ,
        "Cine este cel mai probabil să aibă o aventură în timpul vacanței?"
        ,
        "Cine este cel mai probabil să fie primul care iese pe ringul de dans?"
        ,
        "Cine este cel mai probabil să aibă întotdeauna cele mai bune gustări?"
        ,
        "Cine este cel mai probabil să te salveze de la o primă întâlnire proastă?"
        ,
        "Cine este cel mai probabil să facă bricolaj ceva în loc să-l cumpere?"
        ,
        "Cine este cel mai probabil să mănânce pizza la micul dejun?"
        ,
        "Cine este cel mai probabil să-i spună chelnerului că este ziua lor pentru un tort gratuit?"
        ,
        "Cine este cel mai probabil să-și facă prieteni noi ori de câte ori iese?"
        ,
        "Cine este cel mai probabil să adopte următorul animal de companie?"
        ,
        "Cine este cel mai probabil să-și petreacă sâmbăta dimineața făcând voluntariat?"
        ,
        "Despre cine este cel mai probabil să se scrie în viitoarele cărți de istorie?"
        ,
        "Cine este cel mai probabil să câștige la loterie?"
        ,
        "Cine este cel mai probabil să întârzie la cină?"
        ,
        "Cine este cel mai probabil să fie primul care se înscrie la karaoke?"
        ,
        "Cine este cel mai probabil să uite să trimită mesaje înapoi?"
        ,
        "Cine este cel mai probabil să trimită mesaje „în drumul meu” când încă se pregătesc?"
        ,
        "Cine este cel mai probabil să cumpere o motocicletă?"
                
    ]
    const generalCulture = [
        ["Un şofer conducea un camion. Luminile camionului nu erau aprinse. Luna nu era pe cer. O doamnă traversa strada. Cum a reuşit şoferul să o vadă?",
        "Era o zi însorită de vară."]    
        ,
        ["Cine nu pune nicio întrebare, dar are nevoie de răspuns?",
        "O sonerie sau un apel pe telefon"]
        ,
        ["Ce îi spune un perete alb unui" ,
        "Ne întâlnim la colţ."]
        ,
        ["40 de instrumentişti interpretează o partitură muzicală într-o jumătate de oră. În câte minute vor interpreta aceeaşi partitură muzicală un număr de 80 de instrumentişti?",
        "O vor interpreta în 30 minute, partitura este aceeași!"]
        ,
        ["Ce merge în sus şi în jos, dar nu se mişcă?",
        "Scara"]
        ,
       [ "Ce este o zebră?",
        "Un cal cu jaluzele"]
        ,
        ["Ce cuvânt este pronunţat corect când este greşit, dar este pronunţat greşit când este corect?",
        "Greşit"]
        ,
        ["Ce îţi aparţine şi este folosit mai mult de alţii?",
        "Numele tău"]
        ,
        ["O domnişoară este înmormântată în vârf de deal. De ce?",
        "Acolo era cimitirul"]
        ,
        ["Moare şi soţul domnişoarei înmormântate în vârf de deal. Poate fi înmormântat la poalele dealului ? De ce?",
        "Fata era domnişoară deci nu avea soţ!"]
        ,
        ["Într-un coş sunt patru mere galbene şi cinci roşii. Câte mere sunt în coş?",
        "4 mere, cele 5 sunt roșii, adică tomate"]
        ,
        ["Un paznic de noapte , moare în timpul zilei. Are el dreptul la pensie?",
        "Morţii nu iau pensie"]
        ,
        ["Un profesor de sport avea un sac cu 10 mingi. Un elev rău îi sparge cu un cui două mingi. Cu câte mingi a mai rămas profesorul?",
        "Va rămâne tot cu 10 mingi, dar două sunt sparte!"]
        ,
        ["În China un japonez se poate căsători cu sora văduvei lui?",
        "Văduva are soţul mort"]
        ,
        ["Dacă te afli la un concurs de atletism şi îl depăşeşti pe cel aflat pe locul II pe ce loc te vei afla după depăşire?",
        "Pe primul loc se va afla doar cel care-l va depăşi pe primul concurent deci în acest caz pe locul al doilea."]
        ,
        ["Ion are 8 ani. Câţi ani are Dan, fratele său, ştiind că Ion este de două ori mai mic decât fratele său.",
        "Problema este una de falsă împărţire. Dan va avea 16 ani."]
        ,
        ["Tatăl Tanţei are cinci fete: prima fată se numeşte Cla-Cla , a doua Cle-cle , a treia Cli-cli şi a patra Clo-clo. Cum o cheamă pe a cincea fată?",
        "Răspunsul este numai unul : Tanţa"]
        ,
        ["Gigi are un frate şi trei surori.Una dintre surorile lui Gigi se numeşte Ana. Câţi fraţi şi câte surori are Ana?",
        "În familie fiind doi fraţi şi trei surori, Ana va avea doi fraţi şi două surori."]
        ,
        ["O cărămidă costă 1 leu şi încă jumătate de cărămidă. Câţi lei costă o cărămidă ?",
        "2 lei"]
        ,
        ["În ce parte, stânga sau dreapta a unei bancnote de 10 lei este portretul lui Nicolae Iorga?",
        "Este de fapt N.Grigorescu pe bancnota de 10 lei"]
        ,
        ["Un tren personal pleacă din Bucureşti spre Cluj. Un accelerat pleacă din Cluj spre Bucureşti. Ele se întâlnesc în gara Mediaş. Care este mai aproape de Bucureşti în momentul întâlnirii ?",
        "Ambele"]
        ,
        ["Un cioban are 15 oi. În afară de 5, toate mor. Câte oi mai rămân?",
        "5"]
        ,
        ["Eşti pilot de avion pe ruta Bucureşti-New York. Avionul pleacă din Bucureşti cu 20 de pasageri şi face escale la Berlin si Paris. Câţi ani are pilotul ?",
        "Tu ești pilotul, deci răspunzi cu vârsta ta!"]
        ,
        ["Câte cifre de nouă se folosesc pentru a scrie primele 100 de numere naturale?",
        "20"]
        ,
        ["Unde s-a săpat prima fântână din Romania?",
        "În pământ"]
        ,
        ["Câte sute sunt într-o duzină?",
        "0, o duzină înseamnă 12!"]
        ,
        ["Un doctor prescrie unui pacient 3 pastile pe care le ia din jumătate în jumătate de oră. De cât timp are nevoie să le ia pe toate?",
        "o oră"]
        ,
        ["Ce eveniment a avut loc la 25 XII 1944 la Bucureşti?",
        "Crăciunul"]
        ,
        ["Câte animale din fiecare specie a luat Moise în arca lui?",
        "Era Noe, nu Moise!"]
        ,
        ["Unde a scris M. Eminescu „Amintiri din copilarie” la Ipoteşti sau Botoşani?",
        "Ion Creangă a scris „Amintiri”, nu Eminescu"]
        ,
        ["Un litru de oţet are 90.Câte grade are o jumătate de litru?",
        "tot atâtea"]
        ,
        ["Cât fac doi plus doi împărţit la doi?",
        "2"]
        ,
        ["La o mână ai 5 degete. La două mâini ai 10 degete. Câte degete ai la zece mâini?",
        "50"]
        ,
        ["Un nufăr îşi dublează suprafaţa în fiecare zi. În a zecea zi ocupă un sfert de lac. În a câta zi va ocupa întreg lacul?",
        "În a douăsprezecea zi"]
        ,
        ["Care este al douăzecilea număr natural?",
        "19"]
        ,
        ["Nasul lui Pinochio are cu şase centimetri mai mult decât jumătatea lui. Câţi cm are nasul lui Pinochio?",
        "12"]
        ,
       [ "Un cetăţean de origine irlandeză, care trăieşte în SUA, poate fi înmormântat în Franţa cu funeralii naţionale?",
        "Omul trăieşte în SUA, deci nu va fi îngropat în Franța"]
        ,
        ["Câte zile de naştere are un om de 33 de ani născut în luna februarie?",
        "una singură"]
        ,
        ["La 14 iulie este ziua Franţei. La ce popor din Asia mai există această zi?",
        "La toate popoarele există în calendar ziua de 14 iulie"]
        ,
        ["Ce trece peste apă și nu face valuri? ",
        "Podul"]
        ,
        ["Cum iese un cal alb care tocmai ce a intrat în Marea Neagră? ",
        "Ud"]
        ,
        ["Ce vine mereu dar nu ajunge niciodată?",
        "Mâine"]
        ,
        ["Câteva luni au 31 de zile, altele 30, dar câte luni au 28 de zile? ",
        "Toate lunile"]
        ,
        ["De ce se trag clopotele la biserică? ",
        "De funie"]
        ,
        ["Câte mere poți mânca dimineața pe stomacul gol? ",
        "Unul, căci restul nu mai sunt pe stomacul gol"]
        ,
        ["O pisică albă urcă într-un copac. Cum coboară? ",
        "Albă"]
        ,
        ["Într-o mașină sunt tatăl și fiul. Aceștia fac un tragic accident rutier. Tatăl moare pe loc, copilul ajunge în stare de urgență pe masa de operație. Chirurgul zice: „Nu-l pot opera, întrucât e fiul meu”. Cine este chirurgul? ",
        "Mama copilului"]
        ,
        ["Într-un coș sunt 3 mere verzi și 4 roșii. Câte mere sunt în coș?",
        "Trei, restul sunt 4 legume."]
        ,
        ["Cum numești o femeie care știe mereu unde este soțul ei? ",
        "văduvă"]
        ,
        ["Există o cameră fără uși și fără ferestre. Un bărbat este găsit spânzurat de tavan. O baltă de apă este pe podea. Cum a murit? ",
        "stătea pe un bloc de gheață care s-a topit ulterior"]
        ,
        ["Câte timbre de 2 lei sunt într-o duzină? ",
        "12 timbre"]
        ,
        ["Ce instrument îl poți auzi mereu, dar nu îl poți vedea",
        "Vocea"]
        ,
        ["Alexandra s-a născut pe data de 27 decembrie. Cu toate acestea, ziua ei de naştere este mereu vara. Cum este posibil acest lucru?",
        "Alexandra locuieşte în emisfera sudică."]
        ,
        ["Un băiat și un medic pescuiau. Băiatul este fiul medicului, dar doctorul nu este tatăl băiatului. Cine este doctorul? ",
        "mama băiatului"]
        ,
        ["Dacă te afli într-o competiție de alergat și îl depășești pe concurentul al-doilea, pe ce loc vei te vei clasa la final? ",
        "Pe locul al 2-lea"]
        ,
       [ "Care este singura întrebare la care se răspunde cu NU pentru că ar fi imposibil să se răspundă cu DA? ",
        "Dormi? sau Ești mort?"]
        ,
        ["Dacă 3 ouă fierb în 10 minute, 56 de ouă în câte minute fierb? ",
        "În 10 minute"]
        ,
        ["Unde este duminica înaintea sâmbetei? ",
        ": În dicționar"]
        ,
        ["Sunt 3 camere în care ești obligat să intri și să alegi în care ai vrea să supravietuiesti: Prima cameră este plină cu criminali înarmați până în gât, a doua cu lei nemâncați de 5 ani și a 3-a cameră cu gaz toxic. În care alegi să intri pentru a rămâne în viață? ",
        "În cea de-a doua, căci leii nemâncați de 5 ani sunt morți."]
        ,
        ["Eşti într-o cameră întunecată şi găseşti un singur băţ de chibrit. Ce aprinzi prima dată: Ziarul, lampa sau lumânarea?",
        "Chibritul"]
        ,
        ["Un tren electric merge spre sud cu 80km/h și vântul bate dinspre Nord-Vest cu 10 km/h. În ce direcție o ia fumul? ",
        "Trenul electric nu scoate fum"]
        ,
        ["Ești într-o mașină în fața trecerii de pietoni și ai de ales între a călca o bătrână sau un copil. Ce calci prima dată? ",
        "Frâna"]
        ,
        ["Dacă un avion se prăbușeste fix la granița dintre România și Bulgaria, unde vor fi înmormântați supraviețuitorii? ",
        "Supraviețuitorii nu vor fi înmormântați"]
        ,
        ["Un român care trăieşte în București poate fi înmormântat la New York? ",
        "Nu, pentru că trăiește"]
        ,
        ["Casa roșie este pe strada Galbenă. Casa galbenă este pe strada Albă. Unde se află Casa Albă? ",
        "La Washington"]
        ,
        ["Dacă un cocoș face un ou e unui hambar, pe ce parte cade oul și de ce? ",
        "cocoșii nu fac ouă"]
        ,
        ["Un şofer de camion merge pe o stradă cu sens unic în direcţia greşită. Deși bărbatul trece pe lângă două echipaje de poliție, acesta nu este oprit de oamenii legii. Cum este posibil? ",
        "Merge pe jos"]
        ,
        ["Ce s-a terminat în 1920? ",
        "1919"]
        ,
        ["Cât pământ se află într-o groapă de un metru lungime și 30 de cm lățime, săpată în mijlocul unei păduri din America de Sud? ",
        "E o groapă, niciun gram de pământ nu se află în aceasta"]
        ,
        ["Pot verişorii tăi să aibă o mătuşă comună pe care tu nu o ai? ",
        "Da, mătușa comună este chiar mama mea"]
                
    ]