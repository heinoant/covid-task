## COVID-19 Tehtävä

Tehtävänantona oli toteuttaa sovellus, joka hakee dataa HS:n rajapinnasta, ja visualisoi sairastuneiden, kuolleiden sekä parantuneiden lukumäärän tekstinä tai graafina.

## Toteutus

Toteutin tehtävän React Native Expolla hyödyntäen axios ja react-native-chart-kit -kirjastoja. Sovellus perustuu päänäkymä 'App.js':n lisäksi kahteen komponenttiin, joista toinen 'datafetch.js' hakee datan axiosin kanssa rajapinnasta ja toinen 'graph.js' pirtää annetusta datasta pylväsdiagrammin.

### datafetch.js

Käyttämällä React Hookien useEffect-hookia haemme datan silloin kun lataamme komponentin. Asettamalla datanhaulle Error ja Loading statet voimme käsitellä nämä tilanteet. Tässä tapauksessa renderöimälle käyttäjälle asiaansopivan varoitustekstin. Datanhaun yhteydessä destrukturoin myös saamamme datan vastaamaan kolmea meitä kiinnostavaa kategoriaa. Näin datan käyttö myöhemmissä vaihessa on vaivattomampaa. Datafetch-komponentissa myös tapahtuu graph-komponenti haku renderöitäväksi.

### graph.js

Graph-komponentti käyttää react-native-chart-kit -kirjastoa piirtääkseen pylväsdiagrammin. Se saa propsina destrukturoimisen ansiosta ainoastaan relevantin datan käyttöön. Tästä datasta se laskee loopin kanssa uusien tapausten lukumäärän lisäten lukumäärät uuteen taulukkoon, josta diagrammi piirretään.

## Sovelluksen käyttö

Navigoi projektikansioon ja asenna paketit
`npm install`
ja
`expo start`
Jos graafin piirtämisen kanssa tulee ongelmia, niin huomioi react-native-svg: 9.7.1 -dependency.
