---
name: generator-prispevku-veverka
description: Vytváří hotové PNG příspěvky, až pět jejich variant a libovolně dlouhé vizuálně propojené carousely pro ORGREZ/Orgrezio z vyplňovacího formuláře. Použij pro značkovou grafiku s volitelným maskotem veverkou; nepoužívej pro obecnou grafiku mimo vizuální identitu ORGREZ.
---

# Generátor příspěvků – veverka ORGREZ

Vytvoř finální obrázek příspěvku, ne pouze prompt nebo popis. Ke generování použij dostupný nástroj pro tvorbu obrázků a vždy mu předej relevantní referenční soubory z [`../../assets/`](../../assets/). Výstup odevzdej jako PNG v přesně zadaných rozměrech.

## Povinný vstup

Při spuštění nabídni uživateli předvyplněnou osnovu níže. Pokud ji již vyplnil v úvodním promptu, neopakuj ji a rovnou zpracuj zadání. Zachovej popisky a prázdná pole, aby uživatel mohl psát přímo za dvojtečku:

```text
Typ příspěvku:
Rozměr:
Veverka:
Obsah:
Počet variant/slidů:
Přesný text do obrázku:
```

Pro `Veverka` přijmi například `ano`, `ne` nebo popis pózy a emoce. Pro `Typ příspěvku` přijmi běžné varianty slov `post`, `příspěvek` a `karusel`/`carousel` bez ohledu na velikost písmen.

Vyžádej si chybějící údaje před generováním:

- téma nebo obsah příspěvku;
- přesné texty, které mají být viditelné, minimálně nadpis;
- rozměr nebo poměr stran podle zadání uživatele.

U samostatného postu je výchozí počet variant jedna a maximum je pět. Karusel nemá výchozí počet slidů. Urči jej pouze tehdy, když z obsahu jednoznačně plyne, například z očíslovaných částí nebo přesného seznamu slidů. Pokud přesný počet nebo rozdělení obsahu není jasné, doptej se a nezačínej generovat žádný obrázek, dokud nebude počet i obsah jednotlivých slidů jednoznačný. Uživatel může zadat i vyšší počet, například deset; všechny slidy vytvoř bez průběžného schvalování a vrať je společně. Rozlišuj, zda uživatel žádá několik variant stejného postu, nebo několik navazujících carouselových slidů.

Nevymýšlej chybějící copy. Volitelné položky jako podnadpis, štítek, CTA, citace nebo jméno autora použij pouze tehdy, když je uživatel výslovně zadá.

## Neměnné prvky značky

- Hlavní barvy: oranžová `#FF6A00`, modrá `#1A99E6`, bílá a velmi tmavá námořnická pro text.
- Písmo: Montserrat. Pro nadpisy používej Bold, ExtraBold nebo Black; pro doprovodný text Regular nebo Medium. Přiložené řezy jsou v [`../../assets/fonts/`](../../assets/fonts/).
- Logo: vlož přesný soubor [`../../assets/orgrezio-logo.svg`](../../assets/orgrezio-logo.svg); logo nepřekresluj a neměň jeho barvy ani proporce.
- Na každém výstupu musí být logo ORGREZIO a adresa `www.orgrez.io`.
- Styl je čistý, vzdušný, profesionální a přátelský: bílé pozadí, výrazná typografická hierarchie, oranžové nebo modré akcenty, jemné vrstevnicové linky, oblé rámečky a jednoduché prostorové plochy či podstavce.

Referenční posty určují vizuální jazyk, nikoli pevnou šablonu. Kompozici vždy navrhni podle sdělení a formátu; neopakuj mechanicky stejné rozmístění prvků. Podrobnosti jsou v [`references/vizualni-system.md`](references/vizualni-system.md).

## Maskot

Veverka zatím nemá vlastní jméno; označuj ji interně jako „veverka ORGREZ“, ale tento název nevkládej do obrázku, pokud ho uživatel nezadá jako viditelný text.

Pokud je maskot pro kompozici přínosný, použij [`../../assets/veverka-reference.png`](../../assets/veverka-reference.png) jako hlavní referenci identity. Zachovej rezavě oranžovou srst, krémové břicho a tlamu, velké tmavé oči, dlouhé štětičkové uši, huňatý ocas a přátelský lehce stylizovaný fotorealistický 3D vzhled. Pózu, emoci, gesto a úhel pohledu smíš měnit podle obsahu. Maskot nemusí být na každém postu ani na každém slidu.

Nevytvářej jiný druh veverky a neměň zásadně proporce, barvu srsti nebo charakter obličeje. Pokud se veverka objeví vícekrát v carouselu, musí působit jako tatáž postava.

## Přesnost textu

Do grafiky vlož jen:

1. text dodaný uživatelem, doslovně a se zachováním kapitalizace, interpunkce a diakritiky;
2. povinné značkové prvky v logu;
3. pevnou adresu `www.orgrez.io`.

Nepřidávej slogany, vysvětlení, čísla slidů, CTA, podpisy, pseudo-text, vodoznaky ani náhodné znaky. Před odevzdáním zkontroluj každý viditelný znak. Při chybě výstup oprav nebo vygeneruj znovu.

Když se text nevejde, nejprve změň zalomení, kompozici a přiměřeně velikost písma. Nezmenšuj jej pod pohodlně čitelnou velikost. Pokud ani potom nelze zachovat čitelnost, zastav se a požádej uživatele o kratší text.

## Jednotlivý post

1. Zkontroluj téma, přesné texty a rozměr.
2. Zvol vizuální metaforu, hierarchii a roli maskota podle obsahu.
3. Použij referenční list, logo a nejméně dva stylové referenční posty.
4. Vygeneruj nebo sestav finální kompozici. Udržuj bezpečné okraje a dostatečný kontrast.
5. Ověř rozměry, text, logo, URL, barvy, identitu maskota a absenci nevyžádaných znaků.
6. Odevzdej hotový PNG.

## Dávka až pěti variant

Když uživatel požádá o dvě až pět variant stejného postu, vytvoř přesně požadovaný počet v jednom pracovním běhu a vrať je společně v jedné odpovědi. Nečekej na schválení mezi variantami.

- Každá varianta je samostatný plnohodnotný PNG soubor ve stejných zadaných rozměrech, nikoli výřez, náhledový arch nebo koláž.
- Zachovej ve všech variantách úplně stejné schválené texty, logo, URL a pravidla značky.
- Varianty smysluplně odliš kompozicí, vizuální metaforou, pózou či přítomností maskota a převahou oranžového nebo modrého akcentu. Nevytvářej jen kosmeticky odlišné kopie.
- Pokud nástroj podporuje dávkové generování, použij je. Jinak proveď jednotlivá generování souběžně, je-li to možné, a výstupy ukaž až po dokončení celé dávky.
- Když některá varianta selže kontrolou, oprav pouze vadné kusy. Nesnižuj potichu požadovaný počet.
- Při požadavku na více než pět výstupů nabídni rozdělení do dávek po nejvýše pěti.

## Carousel

Když je `Typ příspěvku` karusel/carousel, nejprve ověř, že znáš přesný počet slidů a přesný obsah každého z nich. Počet nikdy nedoplňuj výchozí hodnotou. Lze jej odvodit jen z jednoznačně strukturovaného obsahu; jinak se doptej. Dokud počet a rozdělení obsahu nejsou jasné, nevolej obrazový nástroj a nezačínej generovat. Jakmile je zadání kompletní, nevyžaduj schválení jednotlivých slidů: vytvoř všechny a vrať je společně jako samostatné PNG soubory.

Přijmi i delší carousel, například deset slidů. Pokud obrazový nástroj omezuje počet současných výstupů, rozděl práci interně do menších dávek, ale uživatele mezi nimi nezastavuj a odevzdej celý carousel najednou. Při dílčím selhání oprav jen vadné slidy a nesnižuj požadovaný počet. Průběžné schvalování použij pouze tehdy, když o něj uživatel výslovně požádá.

Carousel musí působit jako jeden celek. Před prvním slidem stanov společný systém: mřížku, okraje, typografickou hierarchii, dominantní motiv, zacházení s logem a URL, rytmus barev a případnou kontinuitu ilustrace. U dalších slidů používej dříve vytvořené finální slidy jako další vizuální reference. Zachovej stejné rozměry, měřítko prvků a podobu maskota, ale dovol smysluplné variace kompozice. Čísla slidů přidávej jen na výslovné zadání.

Po dokončení carouselu ulož finální obrázky jako `slide-01.png`, `slide-02.png` a dále ve správném pořadí. Zkontroluj počet souborů a jejich rozměry, potom všechny finální PNG zabal do jediného archivu `orgrez-carousel-<kratky-nazev>.zip`. Do ZIPu nevkládej koncepty, chybné varianty ani pomocné soubory. V odpovědi nabídni ZIP jako hlavní soubor ke stažení; jednotlivé slidy můžeš navíc zobrazit pro kontrolu. Carousel o více slidech není dokončený, dokud ZIP nevznikne a neobsahuje přesně všechny finální slidy.

## Výstupní kontrola

Výstup je hotový pouze tehdy, když:

- jde o PNG v přesně zadaných rozměrech;
- všechny zadané texty jsou úplné a doslovně správné;
- není přítomen žádný jiný text kromě loga a `www.orgrez.io`;
- logo je čitelné, nezdeformované a v bezpečné vzdálenosti od okraje;
- barvy a typografie odpovídají značce;
- případná veverka odpovídá referenčnímu listu;
- kompozice odpovídá obsahu a není jen slepou kopií ukázky;
- u carouselu je jasná vizuální kontinuita se schválenými slidy.
- víceslidový carousel je navíc odevzdaný jako ZIP se správně seřazenými finálními PNG.
