import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Titulo from "./Titulo";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";
const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");

  useEffect(() => {
    if (noticias.length === 0){
    consultarApi();
  }
    setNoticias([]);
  }, [categoria, pais]);

  const consultarApi = async () => {
    try {
      if (categoria !== "" && pais !== "") {
        const respuesta = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_2400020ca6d60bf4c1a5ae89da6f19c3c1270&category=${categoria}&country=${pais}`
        );
        const dato = await respuesta.json();
        setNoticias(...noticias, dato.results);
        console.log(dato)
        console.log(setNoticias)
      }
    } catch (error) {
      console.log(error);
    }
  };
  /* 

Bosnia And Herzegovina	ba

Brunei	bn
Bulgaria	bg
Burkina fasco	bf
Cambodia	kh
Cameroon	cm
Canada	ca
Cape Verde	cv
Cayman Islands	ky
Chile	cl
China	cn
Colombia	co
Comoros	km
Costa Rica	cr
Côte d'Ivoire	ci
Croatia	hr
Cuba	cu
Cyprus	cy
Czech republic	cz
Denmark	dk
Djibouti	dj
Dominica	dm
Dominican republic	do
DR Congo	cd
Ecuador	ec
Egypt	eg
El Salvador	sv
Estonia	ee
Ethiopia	et
Fiji	fj
Finland	fi
France	fr
French polynesia	pf
Gabon	ga
Georgia	ge
Germany	de
Ghana	gh
Greece	gr
Guatemala	gt
Guinea	gn
Haiti	ht
Honduras	hn
Hong kong	hk
Hungary	hu
Iceland	is
India	in
Indonesia	id
Iraq	iq
Ireland	ie
Israel	il
Italy	it
Jamaica	jm
Japan	jp
Jordan	jo
Kazakhstan	kz
Kenya	ke
Kuwait	kw
Kyrgyzstan	kg
Latvia	lv
Lebanon	lb
Libya	ly
Lithuania	lt
Luxembourg	lu
Macau	mo
Macedonia	mk
Madagascar	mg
Malawi	mw
Malaysia	my
Maldives	mv
Mali	ml
Malta	mt
Mauritania	mr
Mexico	mx
Moldova	md
Mongolia	mn
Montenegro	me

Mozambique	mz
Myanmar	mm
Namibia	na
Nepal	np
Netherland	nl
New zealand	nz
Niger	ne
Nigeria	ng
North korea	kp
Norway	no
Oman	om
Pakistan	pk
Panama	pa
Paraguay	py
Peru	pe
Philippines	ph
Poland	pl
Portugal	pt
Puerto rico	pr
Romania	ro
Russia	ru
Rwanda	rw
Samoa	ws
San Marino	sm
Saudi arabia	sa
Senegal	sn
Serbia	rs
Singapore	sg
Slovakia	sk
Slovenia	si
Solomon Islands	sb
Somalia	so
South africa	za
South korea	kr
Spain	es
Sri Lanka	lk
Sudan	sd
Sweden	se
Switzerland	ch
Syria	sy
Taiwan	tw
Tajikistan	tj
Tanzania	tz
Thailand	th
Tonga	to
Tunisia	tn
Turkey	tr
Turkmenistan	tm
Uganda	ug
Ukraine	ua
United arab emirates	ae
United kingdom	gb
United states of america	us
Uruguay	uy
Uzbekistan	uz
Venezuela	ve
Vietnam	vi
Yemen	ye
Zambia	zm
Zimbabwe	zw*/
  return (
    <section className="main">
      <Titulo></Titulo>
      <Container className="p-5 contenedor">
        <article className="my-5">
          <Form>
            <Form.Group
              className="my-3 d-flex justify-content-center "
              controlId="selec-Categoria"
            >
              <Form.Label className="d-inline fs-3 w-50">
                Buscar por Categoria:{" "}
              </Form.Label>
              <Form.Select
                className="d-inline"
                aria-label="Categoria"
                onChange={(e) => setCategoria(e.target.value)}
                value={categoria}
              >
                <option>Categorias</option>
                <option value="">Categoria</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="environment">Medio Ambiente</option>
                <option value="food">Comida</option>
                <option value="health">Salud</option>
                <option value="politics">Politica</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
                <option value="top">Destacadas</option>
                <option value="tourism">Turismo</option>
                <option value="world">Mundo</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="d-flex justify-content-center  "
              controlId="selec-pais"
            >
              <Form.Label className="d-inline fs-3 w-50 p-1">
                Seleccionar Idioma:{" "}
              </Form.Label>
              <Form.Select
                className="d-inline "
                aria-label="pais"
                onChange={(e) => setPais(e.target.value)}
                value={pais}
              >
                <option value="">Opciones</option>
                <option value="af">Afghanistan</option>
                <option value="al">Albania</option>
                <option value="ao">Angola</option>
                <option value="ar">Argentina</option>
                <option value="au">Australia</option>
                <option value="at">Austria</option>
                <option value="az">Azerbaijan</option>
                <option value="bd">Bangladesh</option>
                <option value="bb">Barbados</option>
                <option value="by">Belarus</option>
                <option value="be">Belgium</option>
                <option value="bm">Bermuda</option>
                <option value="bt">Bhutan</option>
                <option value="bo">Bolivia </option>
                <option value="br">Brazil</option>
                <option value="ma">Morocco</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </article>
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    </section>
  );
};

export default Formulario;
