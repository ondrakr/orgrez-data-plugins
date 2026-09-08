---
name: generator-prispevku-veverka
description: Vytváří hotové PNG příspěvky a vizuálně propojené carousely pro ORGREZ/Orgrezio podle tématu, přesně zadaného textu a rozměru. Použij pro značkovou grafiku s volitelným maskotem veverkou; nepoužívej pro obecnou grafiku mimo vizuální identitu ORGREZ.
---

# Generátor příspěvků – veverka ORGREZ

Vytvoř finální obrázek příspěvku, ne pouze prompt nebo popis. Ke generování použij dostupný nástroj pro tvorbu obrázků a vždy mu předej relevantní referenční soubory z [`../../assets/`](../../assets/). Výstup odevzdej jako PNG v přesně zadaných rozměrech.

## Povinný vstup

Vyžádej si chybějící údaje před generováním:

- téma nebo obsah příspěvku;
- přesné texty, které mají být viditelné, minimálně nadpis;
- rozměr nebo poměr stran podle zadání uživatele.

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

## Carousel

Nejdříve navrhni stručnou osnovu všech slidů: účel, přesný text, roli maskota a hlavní kompoziční motiv každého slidu. Požádej o schválení osnovy. Potom generuj slide po slidu a po každém počkej na schválení nebo připomínky.

Carousel musí působit jako jeden celek. Před prvním slidem stanov společný systém: mřížku, okraje, typografickou hierarchii, dominantní motiv, zacházení s logem a URL, rytmus barev a případnou kontinuitu ilustrace. U dalších slidů používej schválené předchozí slidy jako další vizuální reference. Zachovej stejné rozměry, měřítko prvků a podobu maskota, ale dovol smysluplné variace kompozice. Čísla slidů přidávej jen na výslovné zadání.

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
