async function funcionConPromesaYAwait()
{
    let miPromesa = new Promise(resolved => {
        resolved("promesa con await");
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();