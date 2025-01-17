let registrosEmojis = {
    ordenEmojis: [],
    numeroToques: {
        confusion: 0,
        emocion: 0,
        felicidad: 0,
        miedo: 0,
        rabia: 0,
        sorpresa: 0,
        timidez: 0,
        tristeza: 0,
    },
    emojisMarcados: {
        confusion: "-",
        emocion: "-",
        felicidad: "-",
        miedo: "-",
        rabia: "-",
        sorpresa: "-",
        timidez: "-",
        tristeza: "-"
    },
    imagen: 0
};

export function resetCaras(numeroFotografia) {
    registrosEmojis = ({
        ordenEmojis: [],
        numeroToques: {
            confusion: 0,
            emocion: 0,
            felicidad: 0,
            miedo: 0,
            rabia: 0,
            sorpresa: 0,
            timidez: 0,
            tristeza: 0,
        },
        emojisMarcados: {
            confusion: "-",
            emocion: "-",
            felicidad: "-",
            miedo: "-",
            rabia: "-",
            sorpresa: "-",
            timidez: "-",
            tristeza: "-"
        },
        imagen:numeroFotografia
    });
}

export function contarToque(emocionPulsada) {
    emocionPulsada = emocionPulsada.trim().toLowerCase();
    let numToques = registrosEmojis.numeroToques;
    let emjMarcados = registrosEmojis.emojisMarcados;

    switch (emocionPulsada) {
        case 'confusion':
            numToques.confusion++;
            if (numToques.confusion % 2 == 0) {
                emjMarcados.confusion = "-"
            } else {
                emjMarcados.confusion = "Confusion"
            }
            break;
        case 'emocion':
            numToques.emocion++;
            if (numToques.emocion % 2 == 0) {
                emjMarcados.emocion = "-"
            } else {
                emjMarcados.emocion = "Emocion"
            }
            break;
        case 'felicidad':
            numToques.felicidad++;
            if (numToques.felicidad % 2 == 0) {
                emjMarcados.felicidad = "-"
            } else {
                emjMarcados.felicidad = "Felicidad"
            }
            break
        case 'miedo':
            numToques.miedo++;
            if (numToques.miedo % 2 == 0) {
                emjMarcados.miedo = "-"
            } else {
                emjMarcados.miedo = "Miedo"
            }
            break
        case 'rabia':
            numToques.rabia++;
            if (numToques.rabia % 2 == 0) {
                emjMarcados.rabia = "-"
            } else {
                emjMarcados.rabia = "Rabia"
            }
            break
        case 'sorpresa':
            numToques.sorpresa++;
            if (numToques.sorpresa % 2 == 0) {
                emjMarcados.sorpresa = "-"
            } else {
                emjMarcados.sorpresa = "Sorpresa"
            }
            break
        case 'timidez':
            numToques.timidez++;
            if (numToques.timidez % 2 == 0) {
                emjMarcados.timidez = "-"
            } else {
                emjMarcados.timidez = "Timidez"
            }
            break
        case 'tristeza':
            numToques.tristeza++;
            if (numToques.tristeza % 2 == 0) {
                emjMarcados.tristeza = "-"
            } else {
                emjMarcados.tristeza = "tristeza"
            }
            break
    }

    registrosEmojis.ordenEmojis.push(emocionPulsada);

    // Eliminar duplicados
    registrosEmojis.ordenEmojis = [...new Set(registrosEmojis.ordenEmojis)];

    console.log(registrosEmojis);
}

export async function mandarEmojis(usuario) {
  let emojisTmp = JSON.parse(JSON.stringify(registrosEmojis));
  let enviado = true;

  let peticion;
  try {
    peticion = await fetch(
      'http://172.16.0.235:8080/api/juegoCaras/recibirDatos',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: usuario,
          ordenEmojis: emojisTmp.ordenEmojis,
          numToques: emojisTmp.numeroToques,
          emjMarcados: emojisTmp.emojisMarcados,
          imagen: imagen
        })
      }
    );
  } catch (err) {
    console.log(err);
    peticion = {ok: false};
  }

  if (!peticion.ok) {
    enviado = false;
    console.log('La petición no se ha procesado');
  }else{
    console.log('La petición se ha procesado');

  }

  return enviado;
}