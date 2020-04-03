import React from 'react';

import {StyledTerms} from './styled'

const Terms = () => {

    return(
        <StyledTerms>
            <h2>Zásady ochrany osobních údajů</h2>
            <p>Provozovatel webu: <a href="https://hynekzemanec.me/" target="_blank" rel="noopener noreferrer">Hynek
                Zemanec</a> <br/> IČO: 04393597<br/>Se sídlem Stará cesta 7, České Budějovice
<br/>Kontaktní e-mail: <a href="mailto:hynek@hynekzemanec.cz">hynek@hynekzemanec.cz</a></p>

            <h3>Jak data sbíráme?</h3>

            <p>Při odeslání formuláře je zpráva s Vaší emailovou adresou zaslána na speciálně zřízený email, který
                spravuje MVDr. Dana Zemancová.</p>

            <h3>Jaká data sbíráme a proč?</h3>

            <p>Pro účely komunikace uchováváme následující data:</p>

            <ul>
                <li><strong>Vaše emailová adresa</strong></li>

                <li><strong>Předmět Vaší zprávy</strong></li>

                <li><strong>Obsah elektronické komunikace</strong></li>
            </ul>

            <p>Tato data sbíráme, abychom vám mohli odpovědět na dotazy či připomínky, které skrze formulář zašlete.
                Tyto údaje nikde veřejně neuvádíme.</p>

            <h3>Jak dlouho data uchováváme?</h3>

            <p>Data jsou uchovávána po dobu nezbytně nutnou pro odpověď, maximálně však 1 rok.</p>

            <h3>Kdo osobní údaje zpracovává?</h3>

            <p>Zpracovatelem těchto údajů je:</p>

            <p>Hynek Zemanec (IČO 04393597, se sídlem Stará cesta 7, České Budějovice), který provozuje tento web. </p>
            <p>MVDr. Dana Zemancová (IČO 60077361, se sídlem V. Volfa 45, 370 05 České Budějovice), která odpovídá na
                Vaše dotazy.</p>

            <h3>Jaká jsou má práva?</h3>
            <ul>
                <li><strong>Právo na odvolání souhlasu</strong> - Kdykoli můžete odvolat dříve udělený souhlas se zpracováním Vašich
                    osobních údajů.
                </li>

                <li><strong>Právo na informace</strong> - Můžete se dotázat, jaké údaje zpracováváme, za jakým účelem, v jakém rozsahu,
                    jak dlouho a kdo k nim má přístup.
                </li>

                <li><strong>Právo na opravu či výmaz</strong> - Kdykoli můžete požádat o opravu či výmaz Vašich osobních údajů.</li>
            </ul>
            <p>Pro uplatnění kteréhokoliv práva zmíněného výše kontaktujte Provozovatele webu, a to e-mailem, popř.
                písemně.</p>
            <p className="center"><em>Tyto Zásady ochrany osobních údajů jsou platné a účinné od 1. 4. 2020.</em></p>
        </StyledTerms>
    )
}

export default Terms;